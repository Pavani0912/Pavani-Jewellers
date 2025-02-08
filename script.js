// script.js
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Gold Necklace",
            price: "$500",
            image: "https://via.placeholder.com/300x200",
            description: "A beautiful gold necklace with intricate designs."
        },
        {
            name: "Diamond Ring",
            price: "$1000",
            image: "https://via.placeholder.com/300x200",
            description: "A stunning diamond ring that shines bright."
        },
        {
            name: "Silver Earrings",
            price: "$150",
            image: "https://via.placeholder.com/300x200",
            description: "Elegant silver earrings perfect for any occasion."
        }
    ];

    const productsContainer = document.querySelector('.products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button class="buy-btn">Buy Now</button>
        `;

        productsContainer.appendChild(productDiv);
    });
});
