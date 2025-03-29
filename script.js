
// Existing code continues...

document.addEventListener("DOMContentLoaded", function(event){
    document.getElementById('loginForm')?.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'test' && password === 'test') {
            window.location.href = 'categories.html';
        } else {
            alert('Invalid username or password');
        }
    });
})

document.addEventListener("DOMContentLoaded", function(event){
const cart = JSON.parse(localStorage.getItem('cart')) || {};

document.querySelectorAll('.add-to-cart').forEach(button => {
    console.log('Found add-to-cart button:', button); // Debug
    button.addEventListener('click', function() {
        console.log('Add to cart clicked, itemId:', this.getAttribute('data-id')); // Debug
        const itemId = this.getAttribute('data-id');
        cart[itemId] = (cart[itemId] || 0) + 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Updated cart:', cart); // Debug
        alert('Item added to cart');
    });
});
})

document.addEventListener("DOMContentLoaded", function(event){
function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const totalPriceSpan = document.getElementById('totalPrice');
    cartItemsDiv.innerHTML = '';
    let totalPrice = 0;
    
    for (const [id, quantity] of Object.entries(cart)) {
        const itemPrice = getItemPrice(id); // Function to get item price based on ID
        totalPrice += itemPrice * quantity;
        cartItemsDiv.innerHTML += `<div>Item ${id}: ₹${itemPrice} x ${quantity} <button onclick="removeFromCart('${id}')">Remove</button></div>`;
    }
    
    totalPriceSpan.textContent = `₹${totalPrice}`;
}
})

document.addEventListener("DOMContentLoaded", function(event){
function removeFromCart(id) {
    delete cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}
})

document.addEventListener("DOMContentLoaded", function(event){
function clearCart() {
    localStorage.removeItem('cart'); 
    alert('Cart has been cleared'); 
    updateCart(); // Update the cart display
}
})

document.addEventListener("DOMContentLoaded", function(event){
// Call updateCart on cart.html load
if (document.getElementById('cartItems')) {
    updateCart();
}
})

document.addEventListener("DOMContentLoaded", function(event){
function getItemPrice(id) {
    const prices = {
        // Shirts
        '101': 500, '102': 600, '103': 700, '104': 800, '105': 850, '106': 900, '107': 600, '108': 900, '109': 950,
        '110': 600, '111': 750, '112': 650, '113': 800, '114': 850, '115': 900, '116': 1000, '117': 1100, '118': 1200,
        // Pants
        '201': 700, '202': 800, '203': 900, '204': 600, '205': 750, '206': 650, '207': 850, '208': 1200,
        '209': 900, '210': 800, '211': 1000, '212': 700, '213': 850, '214': 600, '215': 950, '216': 750,
        '217': 850, '218': 900,
        // Jackets
        '37': 1200, '38': 1500, '39': 1800, '40': 1600, '41': 1700, '42': 1900, '43': 2000,
        '44': 2100, '45': 3000, '46': 2000, '47': 2500, '48': 1800, '49': 2200, '50': 2800,
        '51': 1900, '52': 1700, '53': 2400, '54': 2100,
        // Footwear
        '55': 900, '56': 1100, '57': 1500, '58': 800, '59': 400, '60': 2000, '61': 1300,
        '62': 1700, '63': 1200, '64': 1000, '65': 1800, '66': 2000, '67': 900, '68': 1500,
        '69': 1100
    };
    return prices[id] || 0;
}
})