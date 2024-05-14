
const products = [
    { name: "Laptop", price: 999.99 },
    { name: "Desktop", price: 1499.99 },
    { name: "Accessories", price: 49.99 }
];c

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; 

    products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - $${product.price}`;
        productList.appendChild(listItem);
    });
}
const products2 = [
    { name: "Laptop", price: 999.99 },
    { name: "Desktop", price: 1499.99 },
    { name: "Accessories", price: 49.99 }
];c
window.onload = displayProducts;


document.addEventListener("DOMContentLoaded", function() {
    
    var computers = [
        {
            name: "asus",
            image: "computer1.jpg",
            description: "Description of Computer 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$999.99"
        },
        {
            name: "acer",
            image: "computer2.jpg",
            description: "Description of Computer 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$799.99"
        }
    
    ];

    var computerContainer = document.getElementById("computer-container");

    
    computers.forEach(function(computer) {
        var computerBox = document.createElement("div");
        computerBox.className = "computer-box";

        var image = document.createElement("img");
        image.src = computer.image;
        image.alt = computer.name;

        var heading = document.createElement("h2");
        heading.textContent = computer.name;

        var description = document.createElement("p");
        description.textContent = computer.description;

        var price = document.createElement("p");
        price.textContent = computer.price;

        var button = document.createElement("button");
        button.textContent = "Add to Cart";

        computerBox.appendChild(image);
        computerBox.appendChild(heading);
        computerBox.appendChild(description);
        computerBox.appendChild(price);
        computerBox.appendChild(button);

        computerContainer.appendChild(computerBox);
    });
});

