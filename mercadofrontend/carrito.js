document.addEventListener('DOMContentLoaded', () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const cartItemsContainer = document.getElementById('cart-items');
    const total = localStorage.getItem('cartTotal') ? parseInt(localStorage.getItem('cartTotal')) : 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.classList.add('cart-item-image');

        const name = document.createElement('span');
        name.innerText = item.name;
        name.classList.add('cart-item-name');

        const price = document.createElement('span');
        price.innerText = '$' + item.price;
        price.classList.add('cart-item-price');

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Eliminar';
        removeButton.classList.add('remove-button');
        removeButton.onclick = () => removeFromCart(index);

        cartItem.appendChild(img);
        cartItem.appendChild(name);
        cartItem.appendChild(price);
        cartItem.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItem);
    });

    document.getElementById('total').innerText = total;

    document.getElementById('clear-cart').addEventListener('click', clearCart);
});

function removeFromCart(index) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    localStorage.setItem('cartTotal', total);

    location.reload();
}

function clearCart() {
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTotal');
    location.reload();
}