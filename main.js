let cart = [];

const products = [
  { id: 1, name: "Product 1", price: 19.99 },
  { id: 2, name: "Product 2", price: 29.99 },
  { id: 3, name: "Product 3", price: 39.99 },
];

function showProducts() {
  document.getElementById("productsSection").style.display = "block";
  document.getElementById("cartSection").style.display = "none";
  document.getElementById("checkoutSection").style.display = "none";

  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products.forEach((product) => {
    productList.innerHTML += `
                    <div class="product" onclick="addToCart(${product.id})">
                        <h3>${product.name}</h3>
                        <p>$${product.price.toFixed(2)}</p>
                    </div>
                `;
  });
}

function showCart() {
  updateCart();
  document.getElementById("productsSection").style.display = "none";
  document.getElementById("cartSection").style.display = "block";
  document.getElementById("checkoutSection").style.display = "none";
}

function showCheckout() {
  document.getElementById("productsSection").style.display = "none";
  document.getElementById("cartSection").style.display = "none";
  document.getElementById("checkoutSection").style.display = "block";
}

function addToCart(productId) {
  const selectedProduct = products.find((product) => product.id === productId);
  cart.push({
    id: selectedProduct.id,
    name: selectedProduct.name,
    price: selectedProduct.price,
  });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  let cartContent = document.getElementById("cartContent");
  let cartTotal = document.getElementById("cartTotal");
  cartContent.innerHTML = "";

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    cartContent.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
                <span class="remove-button" onclick="removeFromCart(${i})">&#10006;</span>
            </div>
        `;
    total += item.price;
  }

  cartTotal.textContent = total.toFixed(2);
}

function submitOrder(event) {
  event.preventDefault();

  alert("Order placed successfully!");
  cart = [];
  showProducts();
}
