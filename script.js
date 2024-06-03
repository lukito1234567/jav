


  class brand {
    constructor(name, price){
        this.name = name;
        this.price = price;
    };

    get product() {
        return `${this.name}, ${this.price}`;
    }

    set () {
        const [newName, newPrice] = brand .computer(',');
        this.name = newName;
        this.price = newPrice;
    }

    #privatebrand = '';

    getbrandInfo() {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);

        return this.#privatebrand;
    }
}
const brand = new brand('asus', '1000$');
const brandTwo = new brand('acer', '100$');


brand.asus = 'pc, 3000';

console.log(brand.getbrandInfo());
console.log(foodTwo.getbrandInfo());

const element = document.createElement('h1');
const element1 = document.createElement('h1');

document.body.appendChild(element);
document.body.appendChild(element1);

element.textContent = `${brand.name} - ${brand.price} `;
element1.textContent = `${brandTwo.name} - ${brandTwo.price}`;











