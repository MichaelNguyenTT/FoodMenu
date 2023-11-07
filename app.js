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


    if (menuValue == "drinks") {
        //populate with drinks
        addToListBox(menu.drinks)
    }else if (menuValue == "entrees") {
        //populate with entrees
        addToListBox(menu.entrees)
    }
    else if (menuValue == "desserts") {
        //populate with desserts
        addToListBox(menu.desserts)
    }

};

function addToListBox(_category) {
    const itemListbox = document.getElementById('itemListbox');
    itemListbox.innerHTML = '' // clears the options

    let categoryMenu = _category;
    categoryMenu.forEach((item) => {
        let itemOptions = new Option(item, item)
        itemListbox.appendChild(itemOptions);
        // console.log(itemListbox);
    })
};


window.onload = init;

function init() {

    const onMenuSelectChange = document.getElementById('menuCategory');
    updateMenuItems();
    onMenuSelectChange.onchange = updateMenuItems;

};














