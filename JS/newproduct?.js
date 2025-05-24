
const products = [
  {
    id: 1,
    title: "Gaming Mouse Pro RGB",
    attributes: "RGB Lighting, 16000 DPI, Ergonomic",
    price: 39.99,
    discountPrice: 29.99,
    category: "Peripherals",
    type: "Mouse",
    brand: "Logitech",
    image: "/api/placeholder/280/200"
  },
  {
    id: 2,
    title: "Mechanical Gaming Keyboard",
    attributes: "Blue Switches, RGB Backlit, Anti-Ghost",
    price: 89.99,
    discountPrice: null,
    category: "Peripherals",
    type: "Keyboard",
    brand: "Corsair",
    image: "/api/placeholder/280/200"
  },
  {
    id: 3,
    title: "1080p Gaming Monitor",
    attributes: "24 inch, IPS Panel, 144Hz",
    price: 129.99,
    discountPrice: 99.99,
    category: "Peripherals",
    type: "Monitor",
    brand: "Dell",
    image: "/api/placeholder/280/200"
  },
  {
    id: 4,
    title: "AMD Ryzen 5 5600X",
    attributes: "6-Core, 12-Thread, 3.7GHz Base",
    price: 199.99,
    discountPrice: 179.99,
    category: "PC Essentials",
    type: "CPU",
    brand: "AMD",
    image: "/api/placeholder/280/200"
  },
  {
    id: 5,
    title: "Intel Core i5-12400",
    attributes: "6-Core, 12-Thread, 2.5GHz Base",
    price: 209.99,
    discountPrice: 189.99,
    category: "PC Essentials",
    type: "CPU",
    brand: "Intel",
    image: "/api/placeholder/280/200"
  },
  {
    id: 6,
    title: "NVIDIA RTX 4070",
    attributes: "12GB GDDR6X, Ray Tracing, DLSS 3",
    price: 599.99,
    discountPrice: 549.99,
    category: "PC Essentials",
    type: "GPU",
    brand: "NVIDIA",
    image: "/api/placeholder/280/200"
  },
  {
    id: 7,
    title: "Corsair 16GB DDR4 RAM",
    attributes: "3200MHz, RGB, Dual Channel Kit",
    price: 79.99,
    discountPrice: null,
    category: "PC Essentials",
    type: "RAM",
    brand: "Corsair",
    image: "/api/placeholder/280/200"
  },
  {
    id: 8,
    title: "Samsung 1TB NVMe SSD",
    attributes: "980 PRO, PCIe 4.0, 7000MB/s Read",
    price: 149.99,
    discountPrice: 129.99,
    category: "PC Essentials",
    type: "SSD",
    brand: "Samsung",
    image: "/api/placeholder/280/200"
  },
  {
    id: 9,
    title: "ASUS ROG Motherboard",
    attributes: "ATX, WiFi 6, RGB, Multiple PCIe Slots",
    price: 159.99,
    discountPrice: null,
    category: "PC Essentials",
    type: "Motherboard",
    brand: "ASUS",
    image: "/api/placeholder/280/200"
  },
  {
    id: 10,
    title: "Corsair 750W PSU",
    attributes: "80+ Gold, Modular, 10 Year Warranty",
    price: 109.99,
    discountPrice: 94.99,
    category: "PC Essentials",
    type: "PSU",
    brand: "Corsair",
    image: "/api/placeholder/280/200"
  }
];

// DOM elements
const grid = document.getElementById('product-grid');
const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
const filterTagContainer = document.getElementById('active-filters');
const clearFiltersBtn = document.getElementById('clear-filters');
const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');
const cartCount = document.getElementById('cart-count');

// State
let cartItems = [];
let currentProducts = [...products];

// Get selected filters
function getSelectedFilters() {
  const selected = {
    category: [],
    type: [],
    brand: []
  };

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const name = checkbox.name;
      const value = checkbox.value;
      if (selected[name]) {
        selected[name].push(value);
      }
    }
  });

  return selected;
}

// Render active filter tags
function renderActiveFilters() {
  filterTagContainer.innerHTML = '';
  
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const tag = document.createElement('button');
      tag.className = 'filter-tag';
      tag.textContent = `${checkbox.value} ✕`;
      tag.addEventListener('click', () => {
        checkbox.checked = false;
        renderProducts();
      });
      filterTagContainer.appendChild(tag);
    }
  });
}

// Filter products based on selected filters and search
function filterProducts() {
  const filters = getSelectedFilters();
  const searchTerm = searchInput.value.toLowerCase();

  return products.filter(product => {
    // Filter by category
    const matchesCategory = filters.category.length === 0 || 
      filters.category.includes(product.category);
    
    // Filter by type
    const matchesType = filters.type.length === 0 || 
      filters.type.includes(product.type);
    
    // Filter by brand
    const matchesBrand = filters.brand.length === 0 || 
      filters.brand.includes(product.brand);
    
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      product.title.toLowerCase().includes(searchTerm) ||
      product.attributes.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesType && matchesBrand && matchesSearch;
  });
}

// Sort products
function sortProducts(products, sortBy) {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => {
        const priceA = a.discountPrice || a.price;
        const priceB = b.discountPrice || b.price;
        return priceA - priceB;
      });
    case 'price-high':
      return sorted.sort((a, b) => {
        const priceA = a.discountPrice || a.price;
        const priceB = b.discountPrice || b.price;
        return priceB - priceA;
      });
    case 'name':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}

// Show loading state
function showLoading() {
  grid.innerHTML = `
    <div class="loading-spinner">
      <i class="fas fa-spinner fa-spin"></i>
      <p>Loading products...</p>
    </div>
  `;
}

// Render products
function renderProducts() {
  renderActiveFilters();
  
  let filtered = filterProducts();
  const sortBy = sortSelect.value;
  
  if (sortBy) {
    filtered = sortProducts(filtered, sortBy);
  }

  currentProducts = filtered;
  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-products">No products match your criteria. Try adjusting your filters.</div>';
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.cursor = 'pointer';

    const hasDiscount = product.discountPrice && product.discountPrice < product.price;

    card.innerHTML = `
      <div class="product-image" style="background-image: url('${product.image}')"></div>
      <div class="product-info">
        <div class="product-title">${product.title}</div>
        <div class="product-attributes">${product.attributes}</div>
        <div class="product-price">
          ${hasDiscount
            ? `<span class="old-price">${product.price.toFixed(2)}</span> 
               <span class="discounted-price">${product.discountPrice.toFixed(2)}</span>`
            : `${product.price.toFixed(2)}`
          }
        </div>
      </div>
    `;

    // Add click event to simulate adding to cart
    card.addEventListener('click', () => {
      addToCart(product);
    });

    grid.appendChild(card);
  });
}

// Add to cart function
function addToCart(product) {
  cartItems.push(product);
  updateCartCount();
  showNotification(`${product.title} added to cart!`, 'success');
}

// Update cart count
function updateCartCount() {
  cartCount.textContent = cartItems.length;
}

// Show notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Show cart modal function
function showCartModal() {
  // Remove existing modal if any
  const existingModal = document.querySelector('.cart-modal');
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement('div');
  modal.className = 'cart-modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'cart-modal-content';

  let cartHTML = `
    <div class="cart-modal-header">
      <h2>Shopping Cart (${cartItems.length})</h2>
      <button class="cart-modal-close">✕</button>
    </div>
  `;

  if (cartItems.length === 0) {
    cartHTML += `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <p>Your cart is empty</p>
      </div>
    `;
  } else {
    let total = 0;
    cartItems.forEach((item, index) => {
      const price = item.discountPrice || item.price;
      total += price;
      cartHTML += `
        <div class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">${price.toFixed(2)}</div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
    });

    cartHTML += `
      <div class="cart-total">
        <div class="cart-total-row">
          <span>Total: ${total.toFixed(2)}</span>
          <button class="checkout-btn" onclick="checkout()">Checkout</button>
        </div>
      </div>
    `;
  }

  modalContent.innerHTML = cartHTML;
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Event listeners for modal
  modal.querySelector('.cart-modal-close').addEventListener('click', () => {
    modal.remove();
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

// Remove from cart function
window.removeFromCart = function(index) {
  cartItems.splice(index, 1);
  updateCartCount();
  showCartModal(); // Refresh the modal
  showNotification('Item removed from cart', 'info');
};

// Checkout function
window.checkout = function() {
  if (cartItems.length === 0) return;
  
  // Simple checkout simulation
  showNotification(`Checkout successful! ${cartItems.length} items ordered.`, 'success');

  // Clear cart and close modal
  cartItems = [];
  updateCartCount();
  document.querySelector('.cart-modal').remove();
};

// Event listeners setup
function setupEventListeners() {
  // Filter checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', renderProducts);
  });

  // Clear filters button
  clearFiltersBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkboxes.forEach(cb => cb.checked = false);
    searchInput.value = '';
    sortSelect.value = '';
    renderProducts();
  });

  // Sort select
  sortSelect.addEventListener('change', renderProducts);

  // Search input
  searchInput.addEventListener('input', renderProducts);

  // Search input keyboard navigation
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      renderProducts();
    }
  });

  // Newsletter form submission
  document.querySelector('.newsletter').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simple validation
    if (email) {
      showNotification(`Thank you for subscribing with ${email}!`, 'success');
      e.target.querySelector('input[type="email"]').value = '';
    }
  });

  // Cart link click handler
  document.querySelector('.cart-link').addEventListener('click', (e) => {
    e.preventDefault();
    showCartModal();
  });

  // Navigation links
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Remove active class from all links
      document.querySelectorAll('.nav a').forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      e.target.classList.add('active');
      
      // Simulate category filtering based on nav click
      const linkText = e.target.textContent.trim();
      if (linkText.includes('PC Essentials')) {
        // Clear all filters and select PC Essentials
        checkboxes.forEach(cb => cb.checked = false);
        document.querySelector('input[value="PC Essentials"]').checked = true;
        renderProducts();
      } else if (linkText.includes('Peripherals')) {
        // Clear all filters and select Peripherals
        checkboxes.forEach(cb => cb.checked = false);
        document.querySelector('input[value="Peripherals"]').checked = true;
        renderProducts();
      } else if (linkText.includes('Home')) {
        // Clear all filters for home view
        checkboxes.forEach(cb => cb.checked = false);
        searchInput.value = '';
        sortSelect.value = '';
        renderProducts();
      }
    });
  });

  // Product hover effects
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.product-card')) {
      const card = e.target.closest('.product-card');
      card.style.transform = 'translateY(-8px)';
      card.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.product-card')) {
      const card = e.target.closest('.product-card');
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
    }
  });
}

// Enhanced render products with loading state
let filterTimeout;
const originalRenderProducts = renderProducts;
renderProducts = function() {
  clearTimeout(filterTimeout);
  showLoading();
  filterTimeout = setTimeout(() => {
    originalRenderProducts();
  }, 300);
};

// Initialize the application
function init() {
  setupEventListeners();
  renderProducts();
  console.log('E-Commerce application initialized successfully!');
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
