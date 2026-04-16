// Product Data
const products = [
    { id: 1, name: "Stylish T-Shirt", price: 499, image: "https://www.vector-x.com/cdn/shop/files/61MTmlZlw4L._SY741.jpg?v=1749114584" },
    { id: 2, name: "Denim Jeans", price: 999, image: "https://m.media-amazon.com/images/I/81Sqh7EKwxL._AC_UY1100_.jpg" },
    { id: 3, name: "Casual Shoes", price: 1499, image: "https://5.imimg.com/data5/SELLER/Default/2024/12/469937024/HS/WV/QZ/191798954/high-end-fashion-street-style-casual-shoes-for-men.jpg" },
    { id: 4, name: "Jacket", price: 1999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJo7UWmC35AafFSkTudGoYuA5ebHUYWR48lQ&s" },
    { id: 5, name: "Cap", price: 299, image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/667d214e82fb1500d77f669c/31rdg7pqldl.jpg" }
];

let cart = [];

// Load products on page
function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        productList.innerHTML += `
        <div class="col-md-4">
            <div class="card">
                <img src="${product.image}" class="card-img-top">
                <div class="card-body">
                    <h5>${product.name}</h5>
                    <p>₹${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}

// Add item to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// Update cart UI
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const total = document.getElementById("total");

    cartItems.innerHTML = "";
    let sum = 0;

    cart.forEach((item, index) => {
        sum += item.price;

        cartItems.innerHTML += `
        <li>
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})" class="btn btn-sm btn-danger">X</button>
        </li>
        `;
    });

    cartCount.innerText = cart.length;
    total.innerText = sum;
}

// Remove item
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Clear cart
function clearCart() {
    cart = [];
    updateCart();
}

// Toggle cart sidebar
function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
}

// Load products initially
displayProducts();