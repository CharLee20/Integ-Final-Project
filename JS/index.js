document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.product-grid');
  grid.innerHTML = '';

 
  const productsToDisplay = allProducts.slice(0, 10);  

  productsToDisplay.forEach(product => {
    const card = document.createElement('a');
    card.className = 'product-card';
   
    card.href = `HTMLS/product.html?id=${product.id}`; 

    const hasDiscount = product.discountPrice && product.discountPrice < product.price;

    card.innerHTML = `
      <div class="product-image" style="background-image: url('${product.indexImage}'); background-size: cover;"></div>
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
});

 /* Updated code for comma-separated values 
 document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.product-grid');
  grid.innerHTML = '';

  const productsToDisplay = allProducts.slice(0, 10);  

  productsToDisplay.forEach(product => {
    const card = document.createElement('a');
    card.className = 'product-card';
    card.href = `HTMLS/product.html?id=${product.id}`; 

    const hasDiscount = product.discountPrice && product.discountPrice < product.price;

    const formattedPrice = product.price.toLocaleString('en-PH', { minimumFractionDigits: 2 });
    const formattedDiscount = product.discountPrice.toLocaleString('en-PH', { minimumFractionDigits: 2 });

    card.innerHTML = `
      <div class="product-image" style="background-image: url('${product.indexImage}'); background-size: cover;"></div>
      <div class="product-title">${product.title}</div>
      <div class="product-attributes">${product.attributes}</div>
      <div class="product-price">
        ${hasDiscount
          ? `<span class="old-price">₱${formattedPrice}</span> 
             <span class="discounted-price">₱${formattedDiscount}</span>`
          : `₱${formattedPrice}`
        }
      </div>
      <button class="add-to-cart-button" onclick="event.preventDefault(); addToCart(${product.id})">Add to Cart</button>
    `;

    grid.appendChild(card);
  });
});

 */
