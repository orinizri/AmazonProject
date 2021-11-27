let test = document.querySelector(".cart-count"); // default textCeontent is 0
const addCartButton = document.querySelector(".add-cart");
const removeCartButton = document.querySelector(".remove-cart");
const quantity = document.querySelector(".quantity select");

addCartButton.addEventListener ('click' , () => {
    test.textContent = parseInt(test.textContent) + parseInt(quantity.value);
})
removeCartButton.addEventListener ('click' , () => {
    test.textContent = parseInt(test.textContent) - parseInt(quantity.value);
})

class Items {
    constructor(name,rating,feedbackNum, price) {
    this.name = name,
    this.rating =rating,
    this.feedbackNum=feedbackNum,
    this.price = price
    }
}
const Item1 = new Items("Cat Toy Laser Pointers, 3 Pack Laser Pointer Cat Toys for Indoor Cats Interactive P...",4.5,179,'$16.99');
//console.log(Item1);
const carousel = document.querySelector("#name");
console.log(carousel.innerHTML)

function insertItem (location, item) {
    console.log(`location.innerHTML is getting replaced`);
        location.innerHTML = item.name;
        console.log(`${location.innerHTML}`)
}

console.log(insertItem(carousel, Item1))