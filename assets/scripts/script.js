let test = document.querySelector(".cart-count"); // default textCeontent is 0
const addCartButton = document.querySelector(".add-cart");
const removeCartButton = document.querySelector(".remove-cart");
const quantity = document.querySelector(".quantity select");

addCartButton.addEventListener('click', () => {
    test.textContent = parseInt(test.textContent) + parseInt(quantity.value);
})
removeCartButton.addEventListener('click', () => {
    test.textContent = parseInt(test.textContent) - parseInt(quantity.value);
})

class Items {
    constructor(image, name, rating, feedbackNum, price) {
        this.image = image,
            this.name = name,
            this.rating = rating,
            this.feedbackNum = feedbackNum,
            this.price = price
    }
}
const Item1 = new Items("\\assets\\images\\HelloIMG1637838582380.jpeg","Cat Toy Laser Pointers, 3 Pack Laser Pointer Cat Toys for Indoor Cats Interactive P...", 4.5, 179, '$16.99');
//console.log(Item1);
const carousel = document.querySelectorAll(".image img");
console.log(carousel);

function insertItems(location, item) {
    for (let i=0 ; i<location.length ; i++) {
        console.log(i)
        location[i].src = item.image;
    }
    location.src = item.image;
    console.log(`${location.src}`)
}

console.log(insertItems(carousel, Item1))