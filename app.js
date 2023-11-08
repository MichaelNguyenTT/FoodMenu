'use strict'

// object of the menu:
let menu = {
    drinks : [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],

    entrees : [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],

    desserts: [
        "Cheesecake", 
        "Chocolate Cake", 
        "Snickerdoodle Cookie"
    ]
};
// this function runs everytime an event occurs
function updateMenuItems() {
    const menuCategory = document.getElementById('menuCategory');

    let menuValue = menuCategory.value;
    console.log(menuValue); // drinks, entrees, desserts

    // if statement to check menu value and passes the object key to addtolistbox function
    if (menuValue == "drinks") {
        addToListBox(menu.drinks);
    }else if (menuValue == "entrees") {
        addToListBox(menu.entrees);
    }else if (menuValue == "desserts") {
        addToListBox(menu.desserts);
    }

};

function addToListBox(_category) {
    const itemListbox = document.getElementById('itemListbox');

    //forEach loop to loop thru each item in the array
    let categoryMenu = _category;
    categoryMenu.forEach((item) => {
        let itemOptions = new Option(item, item)
        itemListbox.appendChild(itemOptions); // appends every mennu item into the list box
        // console.log(itemListbox);
    })
};


window.onload = init;

function init() {

    updateMenuItems();
    const onMenuSelectChange = document.getElementById('menuCategory');
    onMenuSelectChange.onchange = function () {
        const itemListbox = document.getElementById('itemListbox');
        itemListbox.innerHTML = '';
        updateMenuItems();
    }
};














