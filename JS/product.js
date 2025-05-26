document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  // Use the global 'allProducts' array from common.js
  const product = allProducts.find(p => p.id === productId);

  if (product) {
    document.getElementById('breadcrumb-category').textContent = product.category || 'Category';
    document.getElementById('breadcrumb-category').href = `category.html?category=${product.category}`; // Link back to category page
    document.getElementById('breadcrumb-title').textContent = product.title;
    document.getElementById('product-title').textContent = product.title;
    const originalPrice = product.price.toLocaleString('en-PH', { minimumFractionDigits: 2 });
    const discountPrice = product.discountPrice.toLocaleString('en-PH', { minimumFractionDigits: 2 });

    document.getElementById('product-price').innerHTML = product.discountPrice < product.price
      ? `<span class="price-original">₱${originalPrice}</span> <span class="price-discount">₱${discountPrice}</span>`
      : `<span class="price-regular">₱${originalPrice}</span>`;


    document.getElementById('product-description').textContent = product.description || 'No description available.';

    // Main image
    const mainImage = document.getElementById('main-image');
    mainImage.style.backgroundImage = `url('${product.image}')`;

    // Thumbnails (if you have multiple images for a product, you'd extend your product object)
    const thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = ""; // Clear existing
    // For now, just add the main image as a thumbnail
    const mainThumbnail = document.createElement('div');
    mainThumbnail.className = 'thumbnail active'; // Set as active by default
    mainThumbnail.style.backgroundImage = `url('${product.image}')`;
    mainThumbnail.addEventListener('click', () => {
      document.getElementById('main-image').style.backgroundImage = mainThumbnail.style.backgroundImage;
      document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
      mainThumbnail.classList.add('active');
    });
    thumbnails.appendChild(mainThumbnail);


    // Alternatives
    const altContainer = document.getElementById('alt-products');
    altContainer.innerHTML = ""; // Clear existing
    // Filter alternative products from allProducts, excluding the current one and limiting to 5
    allProducts.filter(p => p.id !== productId && p.category === product.category)
               .slice(0, 5)
               .forEach(alt => {
      const altDiv = document.createElement('a');
      altDiv.href = `product.html?id=${alt.id}`;
      altDiv.className = 'alt-product';
      altDiv.style.backgroundImage = `url('${alt.image}')`;
      altContainer.appendChild(altDiv);
    });

    // Quantity buttons
    const quantityInput = document.getElementById('quantity');
    document.getElementById('increase').addEventListener('click', () => {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    document.getElementById('decrease').addEventListener('click', () => {
      let qty = parseInt(quantityInput.value);
      if (qty > 1) quantityInput.value = qty - 1;
    });

    // Add to cart button
    document.querySelector('.add-to-cart').addEventListener('click', () => {
      addToCart(product.id, parseInt(quantityInput.value));
    });

  } else {
    // Graceful fallback if product not found
    document.querySelector('.product-page').innerHTML = `
      <div style="text-align: center; padding: 50px;">
        <p style="font-size: 24px; color: red;">Product not found.</p>
        <p style="margin-top: 15px;"><a href="../index.html">Go back to homepage</a></p>
      </div>
    `;
    document.getElementById('breadcrumb-title').textContent = "Not Found";
    if (document.getElementById('breadcrumb-category')) document.getElementById('breadcrumb-category').textContent = "Unknown";
  }

  // Assuming common.js handles login/signup modals and dropdowns.
  // No need for login/signup modal logic here if it's in common.js
});
