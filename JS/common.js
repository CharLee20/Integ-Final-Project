// --- Consolidated Product Data ---
// IMPORTANT: All product IDs are UNIQUE across this array.
// Image paths are standardized to be relative to the root (assuming common.js is in a JS folder).
const allProducts = [
    {
      "id": 101,
      "title": "Sapphire Nitro+ AMD Radeon RX 7700 XT",
      "image": "../IMAGES/GPU/RX 7700XT/7700xt_1.webp",
      "indexImage": "IMAGES/GPU/RX 7700XT/7700xt_1.webp",
      "attributes": "24 inch, IPS",
      "price": 35450.00,
      "discountPrice": 29450.00,
      "category": "PC Essentials",
      "type": "GPU",
      "brand": "AMD",
      "description": "The AMD Radeon™ RX 7700 XT desktop graphics card is designed for next-generation gaming and streaming experiences at 1440p.",
      "features": [
        "Next-gen 1440p gaming performance",
        "12GB GDDR6 Memory",
        "Ray tracing & AI acceleration",
        "RDNA™ 3 architecture",
        "DisplayPort™ 2.1 and HDMI™ 2.1 support"
      ]
    },
    {
      "id": 102,
      "title": "Intel Core i9-14900K",
      "image": "../IMAGES/CPU/i9-14900K/i9-14900K_1.webp",
      "indexImage": "IMAGES/CPU/i9-14900K/i9-14900K_1.webp",
      "attributes": "24 cores",
      "price": 35000.00,
      "discountPrice": 31499.00,
      "category": "PC Essentials",
      "type": "CPU",
      "brand": "Intel",
      "description": "The Intel Core i9-14900K is a high-end 14th Gen processor with 24 cores and 32 threads optimized for elite gaming and productivity."
    },
    {
      "id": 103,
      "title": "LG UltraFine 27US500-W",
      "image": "../IMAGES/Monitor/LG UltraFine 27US500-W/LG UltraFine 27US500-W_1.webp",
      "indexImage": "IMAGES/Monitor/LG UltraFine 27US500-W/LG UltraFine 27US500-W_1.webp",
      "attributes": "27 inch, IPS",
      "price": 129.99,
      "discountPrice": 99.99,
      "category": "PC Essentials",
      "type": "Monitor",
      "brand": "Dell",
      "description": "The LG UltraFine 27US500-W is a 27-inch 4K UHD monitor with HDR10 support, ideal for creative professionals and gamers seeking vibrant visuals."
    },
    {
      "id": 104,
      "title": "Steelseries Apex 7 TKL Mechanical Gaming Keyboard",
      "image": "../IMAGES/Keyboards/Steelseries Apex 7/Steelseries Apex 7_2.webp",
      "indexImage": "IMAGES/Keyboards/Steelseries Apex 7/Steelseries Apex 7_2.webp",
      "attributes": "Hot swappable switches",
      "price": 7500.00, 
      "discountPrice": 6650.00,
      "category": "Peripherals",
      "type": "Keyboard",
      "brand": "Logitech",
      "description": "The SteelSeries Apex 7 TKL Mechanical Gaming Keyboard has an OLED Smart Display which is an integrated command center that displays useful information for adjusting settings, changing profiles, and seeing on-the-fly updates."
    },
    {
      "id": 105,
      "title": "Corsair 6500X",
      "image": "../IMAGES/Casing/Corsair 6500X/Corsair 6500X_2.webp",
      "indexImage": "IMAGES/Casing/Corsair 6500X/Corsair 6500X_2.webp",
      "attributes": "6-Core, 12-Thread",
      "price": 11000.00,
      "discountPrice": 9995.00,
      "category": "PC Essentials",
      "type": "CPU",
      "brand": "AMD",
      "description": "The CORSAIR 6500X Mid-Tower Dual Chamber PC Case delivers exceptional airflow and cooling with fully mesh paneling and a dual chamber design for an organized, stunning build."
    },
    {
      "id": 106,
      "title": "Onikuma M830",
      "image": "../IMAGES/Mic/Onikuma M830/Onikuma M830_2.webp",
      "indexImage": "IMAGES/Mic/Onikuma M830/Onikuma M830_2.webp",
      "attributes": "GPU",
      "price": 329.99,
      "discountPrice": null,
      "category": "Peripherals",
      "type": "Microphone",
      "brand": "NVIDIA",
      "description":""
    },
    {
      "id": 107,
      "title": "Redragon M915-RGB",
      "image": "../IMAGES/MOUSE/Redragon M915-RGB Swain Wired Gaming Mouse/redragon-m915-rgb-swain-wired-gaming-mouse-2.jpg",
      "indexImage": "IMAGES/MOUSE/Redragon M915-RGB Swain Wired Gaming Mouse/redragon-m915-rgb-swain-wired-gaming-mouse-2.jpg",
      "attributes": "16GB (2x8GB) DDR4 3200MHz",
      "price": 1500.00,
      "discountPrice": 1200.00,
      "category": "Peripherals",
      "type": "Mouse",
      "brand": "Redragon",
      "description": ""
    },
    {
      "id": 108,
      "title": "Razer BlackShark V2 Pro",
      "image": "../IMAGES/Headphones/2. Razer BlackShark V2 Pro Wireless Gaming Headset [RZ04-03220300-R3M1]/razer-blackshark-v2-pro-white-1 (1).jpg",
      "indexImage": "IMAGES/Headphones/2. Razer BlackShark V2 Pro Wireless Gaming Headset [RZ04-03220300-R3M1]/razer-blackshark-v2-pro-white-1 (1).jpg",
      "attributes": "1TB NVMe M.2",
      "price": 7250.00,
      "discountPrice": 6500.00,
      "category": "PC Essentials",
      "type": "Headphones",
      "brand": "Samsung"                              
    },
    {
      "id": 109,
      "title": "Redragon GS814",
      "image": "../IMAGES/Speakers/Redragon GS814/Redragon GS814_1.jpg",
      "indexImage": "IMAGES/Speakers/Redragon GS814/Redragon GS814_1.jpg",
      "attributes": "1TB NVMe M.2",
      "price": 109.99,
      "discountPrice": null,
      "category": "Peripherals",
      "type": "Speakers",
      "brand": "Samsung",
      "description": "Elevate your gaming experience with the dynamic and immersive audio of the Redragon GS814 Connie 20W RGB PC Gaming Computer Speaker. Adding a touch of flair to your setup, the RGB lighting on the GS814 Connie offers a mesmerizing visual accompaniment to your gaming sessions."
    },
    {
      "id": 110,
      "title": "Samsung 980 SSD",
      "image": "../IMAGES/SSD/Samsung 980/Samsung 980_1.webp",
      "indexImage": "IMAGES/SSD/Samsung 980/Samsung 980_1.webp",
      "attributes": "1TB NVMe M.2",
      "price": 3500.00,
      "discountPrice": 3050.00,
      "category": "PC Essentials",
      "type": "Storage",
      "brand": "Samsung",
      "description": "Harness your PC's potential with the 980. Whether you need a boost for gaming or a seamless workflow for heavy graphics, the 980 is a smart choice for outstanding SSD performance"
    },
    {
      "id": 108,
      "title": "Samsung 970 EVO Plus SSD",
      "image": "./IMAGES/ssd.jpg",
      "attributes": "1TB NVMe M.2",
      "price": 109.99,
      "discountPrice": null,
      "category": "PC Essentials",
      "type": "Storage",
      "brand": "Samsung"
    }
];

 

const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const mainOverlay = document.getElementById('mainOverlay');
const loginButtonHeader = document.getElementById('loginButtonHeader'); 
const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink'); 
const userDropdownContent = document.querySelector('.dropdown-content');
const profileDropdownLink = document.getElementById('profileDropdownLink');
const ordersDropdownLink = document.getElementById('ordersDropdownLink');
const logoutDropdownLink = document.getElementById('logoutDropdownLink');
const loginDropdownButton = document.getElementById('loginDropdownButton');
const registerDropdownButton = document.getElementById('registerDropdownButton');


function openModal(modal) {
    if (modal) {
        modal.classList.remove('hidden');
        mainOverlay.classList.remove('hidden');
        document.body.classList.add('modal-open'); 
    }
}


function closeModal(modal) {
    if (modal) {
        modal.classList.add('hidden');
        mainOverlay.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }
}


if (loginButtonHeader) {
    loginButtonHeader.addEventListener('click', () => {
 
        if (userDropdownContent) {
            userDropdownContent.style.display = userDropdownContent.style.display === 'block' ? 'none' : 'block';
            updateDropdownUI();  
        }
    });
}

 
document.addEventListener('click', (event) => {
    if (userDropdownContent && !userDropdownContent.contains(event.target) && !loginButtonHeader.contains(event.target)) {
        userDropdownContent.style.display = 'none';
    }
});


if (signupLink) {
    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(signupModal);
    });
}

if (loginLink) {
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(signupModal);
        openModal(loginModal);
    });
}

 
if (mainOverlay) {
    mainOverlay.addEventListener('click', () => {
        closeModal(loginModal);
        closeModal(signupModal);
    });
}

 
document.querySelectorAll('.modal-content .close-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();  
        closeModal(e.target.closest('.login-modal, .signup-modal'));
    });
});

// --- Login/Logout Functionality ---
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

function loginUser(username, email) {
    currentUser = { username, email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateDropdownUI();
    showNotification(`Welcome, ${username}!`, 'success');
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateDropdownUI();
    showNotification('Logged out successfully.', 'info');
}

function updateDropdownUI() {
    const loggedInSection = document.getElementById('loggedInSection');
    const loginButton = document.getElementById('loginDropdownButton');
    const registerButton = document.getElementById('registerDropdownButton');
    const userNameElement = document.querySelector('.dropdown-header .user-name');
    const userEmailElement = document.querySelector('.dropdown-header .user-email');
    const logoutLink = document.querySelector('.logout-link');

    if (currentUser) {
        loggedInSection.classList.remove('hidden');
        if (loginButton) loginButton.classList.add('hidden');
        if (registerButton) registerButton.classList.add('hidden');
        if (userNameElement) userNameElement.textContent = currentUser.username;
        if (userEmailElement) userEmailElement.textContent = currentUser.email;
        if (logoutLink) logoutLink.addEventListener('click', logoutUser);
    } else {
        loggedInSection.classList.add('hidden');
        if (loginButton) {
            loginButton.classList.remove('hidden');
            loginButton.onclick = () => openModal(loginModal);
        }
        if (registerButton) {
            registerButton.classList.remove('hidden');
            registerButton.onclick = () => openModal(signupModal);
        }
        if (logoutLink) logoutLink.removeEventListener('click', logoutUser);
    }
}

 
document.addEventListener('DOMContentLoaded', updateDropdownUI);


// --- Shopping Cart Functionality ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];
 
const cartLink = document.querySelector('.cart-link');  
const cartDropdown = document.getElementById('cart-dropdown'); 
const cartItemsContainer = document.getElementById('cart-items-container');  
const cartTotalPriceElement = document.getElementById('cart-total-price');  
const buyNowButton = document.getElementById('buy-now-button');
const emptyCartButton = document.getElementById('empty-cart-button');

 
function getProductById(id) {
 
    return allProducts.find(product => product.id === Number(id));
}

 
function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) {
        console.error('Product not found:', productId);
        showNotification('Product not found!', 'error');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            title: product.title,
            price: product.discountPrice || product.price, 
            image: product.image,
            quantity: quantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${quantity}x ${product.title} added to cart!`, 'success');
    renderCartContents(); 
}

 
function removeItemFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Item removed from cart.', 'info');
    renderCartContents();  
}

 
function renderCartContents() {
    cartItemsContainer.innerHTML = '';  
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #777; padding: 15px;">Your cart is empty.</p>';
        if (buyNowButton) buyNowButton.disabled = true;  
        if (emptyCartButton) emptyCartButton.disabled = true;  
    } else {
        if (buyNowButton) buyNowButton.disabled = false;
        if (emptyCartButton) emptyCartButton.disabled = false;
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            const itemPrice = item.price * item.quantity;
            totalPrice += itemPrice;

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-details">Qty: ${item.quantity} | ₱${item.price.toFixed(2)} each</div>
                </div>
                <div class="cart-item-actions">
                    <button class="remove-item-button" onclick="removeItemFromCart(${item.id})">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }
    if (cartTotalPriceElement) cartTotalPriceElement.textContent = `₱${totalPrice.toFixed(2)}`;
}

 
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
   
        cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
     
        renderCartContents();
    }
}

// --- Cart Dropdown Toggle Logic ---
if (cartLink) {
    let hideCartTimeout;

 
    cartLink.addEventListener('mouseenter', () => {
        clearTimeout(hideCartTimeout);  
        renderCartContents(); 
        cartDropdown.classList.add('show');
    });

 
    if (cartDropdown) {
        cartDropdown.addEventListener('mouseenter', () => {
            clearTimeout(hideCartTimeout);
            cartDropdown.classList.add('show');
        });
    }


  
    cartLink.addEventListener('mouseleave', () => {
        hideCartTimeout = setTimeout(() => {
            if (cartDropdown) cartDropdown.classList.remove('show');
        }, 300);  
    });

    if (cartDropdown) {
        cartDropdown.addEventListener('mouseleave', () => {
            hideCartTimeout = setTimeout(() => {
                cartDropdown.classList.remove('show');
            }, 300);
        });
    }


  
    cartLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        renderCartContents(); 
        if (cartDropdown) {
            cartDropdown.classList.toggle('show');
 
            if (cartDropdown.classList.contains('show')) {
                document.addEventListener('click', closeCartOnClickOutside);
            } else {
                document.removeEventListener('click', closeCartOnClickOutside);
            }
        }
    });

    function closeCartOnClickOutside(event) {
        if (cartDropdown && !cartDropdown.contains(event.target) && !cartLink.contains(event.target)) {
            cartDropdown.classList.remove('show');
            document.removeEventListener('click', closeCartOnClickOutside);
        }
    }
}

// --- Buy Now and Empty Cart Button Handlers ---
if (buyNowButton) {
    buyNowButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout with ' + cart.reduce((sum, item) => sum + item.quantity, 0) + ' items.');
 
            cart = [];  
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification('Checkout successful!', 'success');
            if (cartDropdown) cartDropdown.classList.remove('show'); 
        } else {
            showNotification('Your cart is empty!', 'info');
        }
    });
}

if (emptyCartButton) {
    emptyCartButton.addEventListener('click', () => {
        if (cart.length > 0 && confirm('Are you sure you want to empty your cart?')) {
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification('Cart has been emptied.', 'info');
            if (cartDropdown) cartDropdown.classList.remove('show');  
        } else if (cart.length === 0) {
             showNotification('Your cart is already empty.', 'info');
        }
    });
}


// --- Notification System  ---
function showNotification(message, type = 'info', duration = 3000) {
    const notificationContainer = document.body;
    let notificationDiv = document.querySelector('.notification');  

    if (!notificationDiv) {
        notificationDiv = document.createElement('div');
        notificationDiv.className = `notification`;
        notificationContainer.appendChild(notificationDiv);
    }

 
    notificationDiv.className = `notification ${type}`;
    notificationDiv.textContent = message;

     
    notificationDiv.classList.add('show-notification');
 
    setTimeout(() => {
        notificationDiv.classList.remove('show-notification');
       
    }, duration);
}

 
window.openModal = openModal;
window.closeModal = closeModal;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.addToCart = addToCart;
window.removeItemFromCart = removeItemFromCart; 
window.updateCartCount = updateCartCount; 
window.showNotification = showNotification;  
window.allProducts = allProducts;  

 
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
 
});