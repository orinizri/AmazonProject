let test = document.querySelector(".cart-count"); // Default textCeontent is 0
const addCartButton = document.querySelector(".add-cart");
const removeCartButton = document.querySelector(".remove-cart");
const quantityButton = document.querySelector(".quantity select");

// Bonus! Use the Quantity button to add also 2 and 3 to the cart
addCartButton.addEventListener('click', () => {
    test.textContent = parseInt(test.textContent) + parseInt(quantityButton.value);
})
removeCartButton.addEventListener('click', () => {
    test.textContent = parseInt(test.textContent) - parseInt(quantityButton.value);
})

// Building objects through class
class Items {
    constructor(image, name, rating, feedbackNum, price) {
        this.image = image,
        this.name = name,
        this.rating = rating,
        this.feedbackNum = feedbackNum,
        this.price = price
    }
}
// Construction of new items
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

// Location of the items in the html document
const items_location = document.querySelectorAll(".items")
// Construction of items in array for looping (I would add it into the constractor if I had more time)
let itemInstances = [Item1, Item2, Item3, Item4, Item5, Item6,Item7, Item8, Item9, Item10, Item11, Item12];
// A Function that assigns the items to the HTML using html_location, items array and index
function insertAll(location, items, index) {
    for (let i=index, j=0 ; j<location.length ; i++, j++) {
        items_location[j].children[0].firstElementChild.src = itemInstances[i].image
        items_location[j].children[1].lastChild.innerHTML = itemInstances[i].name;
        items_location[j].children[2].firstElementChild.innerText = itemInstances[i].rating;
        items_location[j].children[2].lastElementChild.innerText = itemInstances[i].feedbackNum;
        items_location[j].children[3].innerText = itemInstances[i].price;
    }
    return index;
}
// Setting starting index at 0
let index = 0;
insertAll(items_location, itemInstances,index);
// A function that adds to the carousel the next six items using items' index by clicking on more-items button
let MoreItemsBtn = document.querySelector(".more-items"); // Next items button location in HTML
MoreItemsBtn.addEventListener("click", function() {
    console.log("click");
    index += 6;
    console.log(index);
    insertAll(items_location, itemInstances, index);
    console.log("arrived");
    return index;
})
// A function that adds to the carousel the six previous items using items' index by clicking on the previous items button
let PreviousItemsBtn = document.querySelector(".previous-items"); // Previous items button location in HTML
PreviousItemsBtn.addEventListener("click", function() {
    console.log("click");
    index -= 6;
    console.log(index);
    insertAll(items_location, itemInstances, index);
    console.log("arrived");
})