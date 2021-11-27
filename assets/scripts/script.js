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

const Item1 = new Items("\\assets\\images\\HelloIMG1637838582380.jpeg", "Cat Toy Laser Pointers, 3 Pack Laser Pointer Cat Toys for Indoor Cats Interactive P...", 3.0, "\(179\)", 'ILS 81.99');
const Item2 = new Items("\\assets\\images\\HelloIMG1637838560379.jpeg", "NPET Interactive Cat Toy, 360 Degree Rotating Automatic Toys for Indoor Cast, Elect..", 3.5, "\(14\)", 'ILS 68.16');
const Item3 = new Items("\\assets\\images\\HelloIMG1637838560033.jpeg", "3 Pack Pointer for Cats Dogs Pet Interactive Toys, (Green, Red, Violet) Cat Chase E...", 4.0, "\(44\)", 'ILS 38.29');
const Item4 = new Items("\\assets\\images\\HelloIMG1637838559308.jpeg", "Peffiti Interactive Cat Toys Laser, 360 Degree Automatic Chasing Laser Realistic Flu...", 3.5, "\(719\)", '$96.99');
const Item5 = new Items("\\assets\\images\\HelloIMG1637838563972.jpeg", "Cat Laser Toys for Cat Indoor Playing,Food Dispensing Interactive Cat Toy Tumbler Slow...", 2.0, "\(4\)", '$69.99');
const Item6 = new Items("\\assets\\images\\HelloIMG1637838564333.jpeg", "BENTOPAL Laser Cat Toys for Indoor Cats/Dogs, Interactive Cat Toys with Motion...", 4.5, "\(979\)", '$99.99');
const Item7 = new Items("\\assets\\images\\HelloIMG1637838561446.jpeg", "Potaroma Electric Flopping Fish 10.5\", Moving Cat Kicker Fish Toy, Floppy Fish Toy...", 4.5, "\(25,846\)", 'ILS 48.68');
const Item8 = new Items("\\assets\\images\\HelloIMG1637838562183.jpeg", "YOFUN Smart Interactive Cat Toy - Newest Version 360 Degree Self Rotating Ball, USB...", 4.0, "\(8,766\)", 'ILS 50.30');
const Item9 = new Items("\\assets\\images\\HelloIMG1637838561828.jpeg", "Biilaflor Interactive Cat Ball Toys with Bird Sound, Led Light, detachable Protective...", 4.0, "\(966\)", 'ILS 68.16');
const Item10 = new Items("\\assets\\images\\HelloIMG1637838564333.jpeg", "BENTOPAL Laser Cat Toys for Indoor Cats/Dogs, Interactive Cat Toys with Motion...", 4.5, "\(979\)", '$99.99');
const Item11 = new Items("\\assets\\images\\HelloIMG1637838564333.jpeg", "BENTOPAL Laser Cat Toys for Indoor Cats/Dogs, Interactive Cat Toys with Motion...", 4.5, "\(979\)", '$99.99');
const Item12 = new Items("\\assets\\images\\HelloIMG1637838564333.jpeg", "BENTOPAL Laser Cat Toys for Indoor Cats/Dogs, Interactive Cat Toys with Motion...", 4.5, "\(979\)", '$99.99');

// console.log(Item1);
// console.log(Items)

const names = document.querySelectorAll(".name a")
const items_location = document.querySelectorAll(".items")
console.log(items_location[0].children)
let itemInstances = [Item1, Item2, Item3, Item4, Item5, Item6];

//console.log(Items)
function insertAll(location, items) {
    for (let i=0 ; i<location.length ; i++) {
        items_location[i].children[0].firstElementChild.src = itemInstances[i].image

        items_location[i].children[1].lastChild.innerHTML = itemInstances[i].name;
        items_location[i].children[2].firstElementChild.innerText = itemInstances[i].rating;
        items_location[i].children[2].lastElementChild.innerText = itemInstances[i].feedbackNum;
        items_location[i].children[3].innerText = itemInstances[i].price;
    }
}
insertAll(items_location, itemInstances);

console.log(itemInstances[0])
