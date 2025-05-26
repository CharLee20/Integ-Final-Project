document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.product-grid');
  const checkboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');

  function renderProducts() {
    grid.innerHTML = ''; // Clear current products

    const filters = {
      category: [],
      type: [],
      brand: []
    };

    checkboxes.forEach(cb => {
      if (cb.checked) {
        filters[cb.name].push(cb.value);
      }
    });

    // Use the global 'allProducts' array
    const filtered = allProducts.filter(product => {
      const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
      const matchesType = filters.type.length === 0 || filters.type.includes(product.type);
      const matchesBrand = filters.brand.length === 0 || filters.brand.includes(product.brand);
      return matchesCategory && matchesType && matchesBrand;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '<p style="text-align: center; width: 100%; padding: 20px;">No products match the selected filters.</p>';
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement('a');
      card.className = 'product-card';
      // Adjust href based on your product page structure (e.g., relative to category.html)
      card.href = `product.html?id=${product.id}`;

      const hasDiscount = product.discountPrice && product.discountPrice < product.price;

      card.innerHTML = `
        <div class="product-image" style="background-image: url('${product.image}'); background-size: cover;"></div>
        <div class="product-title">${product.title}</div>
        <div class="product-attributes">${product.attributes}</div>
        <div class="product-price">
          ${hasDiscount
            ? `<span class="old-price">₱${product.price.toFixed(2)}</span> 
               <span class="discounted-price">₱${product.discountPrice.toFixed(2)}</span>`
            : `₱${product.price.toFixed(2)}`
          }
        </div>
        <button class="add-to-cart-button" onclick="event.preventDefault(); addToCart(${product.id})">Add to Cart</button>
      `;

      grid.appendChild(card);
    });
  }

  checkboxes.forEach(cb => cb.addEventListener('change', renderProducts));
  renderProducts();

  // Assuming common.js handles login/signup modals and dropdowns.
  // No need for login/signup modal logic here if it's in common.js
});
