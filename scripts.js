document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});

function loadProducts() {
    fetch('php/product_list.php')
        .then(response => response.json())
        .then(products => {
            const productSection = document.getElementById('products');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="images/${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productSection.appendChild(productDiv);
            });
        });
}

function addToCart(productId) {
    console.log('Add to cart', productId);
    // Implement add to cart functionality
}