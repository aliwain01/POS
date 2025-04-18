import aalo_anda from '../assets/images/aalo_anda.jpg';
import aanda_shaami from '../assets/images/aanda_shaami.png';
import bbq_platter from '../assets/images/bbq_platter.jpg';
import beef_aalo_qeema from '../assets/images/beef_aalo_qeema.jpg';
import channa_daal from '../assets/images/channa_daal.jpg';
import chicken_green_chili from '../assets/images/chicken_green_chili.jpg';
import chicken_grilled_burger from '../assets/images/chicken_grilled_burger.png';
import chicken_jalfrezi from '../assets/images/chicken_jalfrezi.jpg';
import chicken_patty_burger from '../assets/images/chicken_patty_burger.jpg';
import chicken_shashlik from '../assets/images/chicken_shashlik.jpg';

export const popularDishes = [
    {
        id: 1,
        image: aalo_anda,
        name: "Aalo Anda",
        numberOfOrders: 250,
    },

    {
        id: 2,
        image: aanda_shaami,
        name: "Aanda Shaami",
        numberOfOrders: 200,
    },

    {
        id: 3,
        image: bbq_platter,
        name: "BBQ Platter",
        numberOfOrders: 150,
    },

    {
        id: 4,
        image: beef_aalo_qeema,
        name: "Beef Aalo Qeema",
        numberOfOrders: 120,
    },

    {
        id: 5,
        image: channa_daal,
        name: "Channa Daal",
        numberOfOrders: 100,
    },

    {
        id: 6,
        image: chicken_green_chili,
        name: "Chicken Green Chili",
        numberOfOrders: 90,
    },

    {
        id: 7,
        image: chicken_grilled_burger,
        name: "Chicken Grilled Burger",
        numberOfOrders: 80,
    },

    {
        id: 8,
        image: chicken_jalfrezi,
        name: "Chicken Jalfrezi",
        numberOfOrders: 70,
    },

    {
        id: 9,
        image: chicken_patty_burger,
        name: "Chicken Patty Burger",
        numberOfOrders: 60,
    },

    {
        id: 10,
        image: chicken_shashlik,
        name: "Chicken Shashlik",
        numberOfOrders: 50,
    },

];

export const tables = [
    { id: 1, name: "Table 1", status: "Booked", initial: "AM" },
    { id: 2, name: "Table 2", status: "Available", initial: "MB" },
    { id: 3, name: "Table 3", status: "Booked", initial: "JS" },
    { id: 4, name: "Table 4", status: "Available", initial: "HR" },
    { id: 5, name: "Table 5", status: "Booked", initial: "PL" },
    { id: 6, name: "Table 6", status: "Available", initial: "RT" },
    { id: 7, name: "Table 7", status: "Booked", initial: "LC" },
    { id: 8, name: "Table 8", status: "Available", initial: "DP" },
    { id: 9, name: "Table 9", status: "Booked", initial: "NK" },
    { id: 10, name: "Table 10", status: "Available", initial: "SB" },
];

export const chickenItem = [
    {
      id: 1,
      name: "Chicken Karahi",
      price: 320,
      category: "Non-Vegetarian"
    },

    {
      id: 2,
      name: "Chicken Qorma",
      price: 320,
      category: "Non-Vegetarian"
    },

    {
      id: 3,
      name: "Chicken Jalfrezi",
      price: 350,
      category: "Non-Vegetarian"
    },

    {
      id: 4,
      name: "Chicken Boneless",
      price: 350,
      category: "Non-Vegetarian"
    },
    
    {
      id: 5,
      name: "Chicken Biryani",
      price: 350,
      category: "Non-Vegetarian"
    },

    {
      id: 6,
      name: "Chicken Pulawo + Shami",
      price: 350,
      category: "Non-Vegetarian"
    },

    {
      id: 7,
      name: "Chinese Gravy with Egg Fried Rice",
      price: 550,
      category: "Non-Vegetarian"
    },
];

export const beefItem = [
    {
      id: 1,
      name: "Beef Karahi",
      price: 350,
      category: "Non-Vegetarian"
    },

    {
      id: 2,
      name: "Beef Aloo Qeema",
      price: 320,
      category: "Non-Vegetarian"
    },
];

export const vegetablesItem = [
    {
      id: 1,
      name: "Vegetable",
      price: 220,
      category: "Vegetarian"
    },

    {
      id: 2,
      name: "Alu Anda Bhujia",
      price: 220,
      category: "Vegetarian"
    },

];

export const daalItem = [
    {
      id: 1,
      name: "Daal Chana Fried",
      price: 200,
      category: "Vegetarian"
    },

    {
      id: 2,
      name: "Daal Mash",
      price: 250,
      category: "Vegetarian"
    },

    {
      id: 3,
      name: "Mix Daal",
      price: 200,
      category: "Vegetarian"
    },

    {
      id: 4,
      name: "Kari Pakora",
      price: 250,
      category: "Vegetarian"
    },
    
    {
      id: 5,
      name: "White Rice with Daal Shami",
      price: 260,
      category: "Non-Vegetarian"
    },
];

export const tandoorItem = [
    {
      id: 1,
      name: "Roti",
      price: 15,
      category: "Vegetarian"
    },

    {
      id: 2,
      name: "Kulcha",
      price: 50,
      category: "Vegetarian"
    },

    {
      id: 3,
      name: "Sada Naan/Khameeri Roti",
      price: 30,
      category: "Vegetarian"
    },

    {
      id: 4,
      name: "Garlic Naan",
      price: 80,
      category: "Vegetarian"
    },
    
    {
      id: 5,
      name: "Kalwanji Naan",
      price: 80,
      category: "Non-Vegetarian"
    },

    {
      id: 6,
      name: "Achari Naan",
      price: 80,
      category: "Non-Vegetarian"
    },

    {
      id: 7,
      name: "Roghni Naan",
      price: 80,
      category: "Vegetarian"
    },
];

export const bbqItem = [
    {
      id: 1,
      name: "Seekh Kabab 1pc",
      price: 150,
      category: "Non-Vegetarian"
    },

    {
      id: 2,
      name: "Malai Boti 5pc",
      price: 300,
      category: "Non-Vegetarian"
    },

    {
      id: 3,
      name: "1/4 Chicken Piece Grilled",
      price: 300,
      category: "Non-Vegetarian"
    },

    {
      id: 4,
      name: "Chapli Kabab",
      price: 200,
      category: "Non-Vegetarian"
    },
    
    {
      id: 5,
      name: "Fish 1pc",
      price: 200,
      category: "Non-Vegetarian"
    },
];

export const fastItem = [
    {
      id: 1,
      name: "Grilled Beef Burger (Bufalo Cream)",
      price: 699,
      category: "Non-Vegetarian"
    },

    {
      id: 2,
      name: "Grilled Beef Buger (Tangi Sauce)",
      price: 699,
      category: "Non-Vegetarian"
    },

    {
      id: 3,
      name: "Grilled Chicken Burger (Bufalo Cream)",
      price: 649,
      category: "Non-Vegetarian"
    },

    {
      id: 4,
      name: "Grilled Chicken Burger (Tangi Sauce)",
      price: 649,
      category: "Non-Vegetarian"
    },
    
    {
      id: 5,
      name: "Chicken Patty Burger",
      price: 449,
      category: "Non-Vegetarian"
    },

    {
      id: 6,
      name: "Zinger Wrap",
      price: 449,
      category: "Non-Vegetarian"
    },

    {
      id: 7,
      name: "Grilled Wrap",
      price: 449,
      category: "Non-Vegetarian"
    },

    {
      id: 8,
      name: "Zinger Burger",
      price: 549,
      category: "Non-Vegetarian"
    },

    {
      id: 9,
      name: "Anda Shami Burger",
      price: 299,
      category: "Non-Vegetarian"
    },

    {
      id: 10,
      name: "Club Sandwich",
      price: 499,
      category: "Non-Vegetarian"
    },
    
    {
      id: 11,
      name: "Loaded Fries",
      price: 399,
      category: "Non-Vegetarian"
    },

    {
      id: 12,
      name: "Beef Patty",
      price: 200,
      category: "Non-Vegetarian"
    },

    {
      id: 13,
      name: "Chicken Fillet",
      price: 200,
      category: "Non-Vegetarian"
    },
];

export const sweetsItem = [
    {
      id: 1,
      name: "Gurr Rice",
      price: 100,
      category: "Sweet"
    },

    {
      id: 2,
      name: "Firni",
      price: 100,
      category: "Sweet"
    },

    {
      id: 3,
      name: "Rus Gulla 1pc",
      price: 60,
      category: "Sweet"
    },

    {
      id: 4,
      name: "Zarda",
      price: 100,
      category: "Sweet"
    },
    
    {
      id: 5,
      name: "Chocolate Cup Cake",
      price: 80,
      category: "Sweet"
    },

    {
      id: 6,
      name: "Banana Bread",
      price: 100,
      category: "Sweet"
    },

    {
      id: 7,
      name: "Brownie",
      price: 120,
      category: "Sweet"
    },

    {
      id: 8,
      name: "Cookies",
      price: 60,
      category: "Sweet"
    },

    {
      id: 9,
      name: "Strawberry Yogurt Delight",
      price: 200,
      category: "Sweet"
    },
];

export const extrasItem = [
    {
      id: 1,
      name: "Raita",
      price: 60,
      category: "Vegetarian"
    },

    {
      id: 2,
      name: "Fresh Salad",
      price: 60,
      category: "Vegetarian"
    },

    {
      id: 3,
      name: "White Rice",
      price: 200,
      category: "Vegetarian"
    },

    {
      id: 4,
      name: "Shami Kebab",
      price: 70,
      category: "Non-Vegetarian"
    },

    {
      id: 5,
      name: "Cheese Slice",
      price: 70,
      category: "Vegetarian"
    },

    {
      id: 6,
      name: "Fries",
      price: 150,
      category: "Vegetarian"
    },

    {
      id: 7,
      name: "Side Dish",
      price: 100,
      category: "Non-Vegetarian"
    },

    {
        id: 8,
        name: "Dip Sauce",
        price: 50,
        category: "Vegetarian"
    },
];

export const beveragesItem = [
    {
      id: 1,
      name: "Coke (350ml)",
      price: 120,
      category: "Cold"
    },

    {
      id: 2,
      name: "Sprite (350ml)",
      price: 120,
      category: "Cold"
    },

    {
      id: 3,
      name: "Coke-Zero (350ml)",
      price: 120,
      category: "Cold"
    },

    {
      id: 4,
      name: "Fanta (350ml)",
      price: 120,
      category: "Cold"
    },

    {
      id: 5,
      name: "Sprite-Zero (350ml)",
      price: 120,
      category: "Cold"
    },

    {
      id: 6,
      name: "Water",
      price: 80,
      category: "Cold"
    },

    {
      id: 7,
      name: "Coke (1l)",
      price: 200,
      category: "Cold"
    },

    {
        id: 8,
        name: "Coke-Zero (1l)",
        price: 200,
        category: "Cold"
    },

    {
        id: 9,
        name: "Sprite (1l)",
        price: 200,
        category: "Cold"
    },
  
    {
        id: 10,
        name: "Sprite-Zero (1l)",
        price: 200,
        category: "Cold"
    },
  
    {
        id: 11,
        name: "Fanta (1l)",
        price: 200,
        category: "Cold"
    },
  
    {
        id: 12,
        name: "Tea",
        price: 80,
        category: "Hot"
    },
  
    {
        id: 13,
        name: "Kashmiri Tea",
        price: 150,
        category: "Hot"
    },

    {
        id: 14,
        name: "Special Tea",
        price: 90,
        category: "Hot"
    },
];

export const pizzaItem = [
    {
      id: 1,
      name: "Cheesy Lover (S)",
      price: 550,
      category: "Vegetarian"
    },

    {
      id: 2,
      name: "Cheesy Lover (M)",
      price: 950,
      category: "Vegetarian"
    },

    {
      id: 3,
      name: "Cheesy Lover (L)",
      price: 1250,
      category: "Vegetarian"
    },

    {
      id: 4,
      name: "Chicken Tikka (S)",
      price: 599,
      category: "Non-Vegetarian"
    },
    
    {
      id: 5,
      name: "Chicken Tikka (M)",
      price: 999,
      category: "Non-Vegetarian"
    },

    {
      id: 6,
      name: "Chicken Tikka (L)",
      price: 1299,
      category: "Non-Vegetarian"
    },

    {
      id: 7,
      name: "Chicken Fajita (S)",
      price: 599,
      category: "Non-Vegetarian"
    },

    {
      id: 8,
      name: "Chicken Fajita (M)",
      price: 999,
      category: "Non-Vegetarian"
    },

    {
      id: 9,
      name: "Chicken Fajita (L)",
      price: 1299,
      category: "Non-Vegetarian"
    },

    {
      id: 10,
      name: "Chicken Supreme (S)",
      price: 599,
      category: "Non-Vegetarian"
    },

    {
      id: 11,
      name: "Chicken Supreme (M)",
      price: 999,
      category: "Non-Vegetarian"
    },
    
    {
      id: 12,
      name: "Chicken Supreme (L)",
      price: 1299,
      category: "Non-Vegetarian"
    },

    {
      id: 13,
      name: "Beef Pepperoni (S)",
      price: 599,
      category: "Non-Vegetarian"
    },

    {
      id: 14,
      name: "Beef Pepperoni (M)",
      price: 999,
      category: "Non-Vegetarian"
    },

        {
      id: 15,
      name: "Beef Pepperoni (L)",
      price: 1299,
      category: "Non-Vegetarian"
    },

    {
      id: 16,
      name: "Seekh Kebab (S)",
      price: 599,
      category: "Non-Vegetarian"
    },

    {
      id: 17,
      name: "Seekh Kebab (M)",
      price: 999,
      category: "Non-Vegetarian"
    },

    {
      id: 18,
      name: "Seekh Kebab (L)",
      price: 1299,
      category: "Non-Vegetarian"
    },
    
    {
      id: 19,
      name: "Pasha's Special (S)",
      price: 625,
      category: "Non-Vegetarian"
    },

    {
      id: 20,
      name: "Pasha's Special (M)",
      price: 1025,
      category: "Non-Vegetarian"
    },

    {
      id: 21,
      name: "Pasha's Special (L)",
      price: 1325,
      category: "Non-Vegetarian"
    },
];

export const specialsItem = [
    {
      id: 1,
      name: "Lunch-Chicken + 2 Roti + Salad",
      price: 350,
      category: "Non-Vegetarian"
    },

    {
      id: 2,
      name: "Lunch-Pulawo/Biryani + Raita + Salad",
      price: 350,
      category: "Non-Vegetarian"
    },

    {
      id: 3,
      name: "Lunch-Daal + 2 Roti + Salad",
      price: 220,
      category: "Vegetarian"
    },

    {
      id: 4,
      name: "Lunch-Vegetable + 2 Roti + Salad",
      price: 220,
      category: "Vegetarian"
    },
    
    {
      id: 5,
      name: "Lunch-Zinger + Fries",
      price: 480,
      category: "Non-Vegetarian"
    },

    {
      id: 6,
      name: "Lunch-Wrap + Fries",
      price: 410,
      category: "Non-Vegetarian"
    },

    {
      id: 7,
      name: "Lunch-Chicken Patty Burger + Fries",
      price: 410,
      category: "Non-Vegetarian"
    },

    {
      id: 8,
      name: "Lunch-Seekh Kebab 2pc",
      price: 330,
      category: "Non-Vegetarian"
    },

    {
      id: 9,
      name: "Lunch-Malai Boti 5pc",
      price: 330,
      category: "Non-Vegetarian"
    },

    {
      id: 10,
      name: "Lunch-Chicken Piece + 2 Roti + Raita + Salad",
      price: 330,
      category: "Non-Vegetarian"
    },

    {
      id: 11,
      name: "Lunch-Kebab Masala",
      price: 350,
      category: "Non-Vegetarian"
    },
    
    {
      id: 12,
      name: "Lunch-Chicken Macroni",
      price: 250,
      category: "Non-Vegetarian"
    },

    {
      id: 13,
      name: "Special Menu-Cold Drink",
      price: 100,
      category: "Non-Vegetarian"
    },

    {
      id: 14,
      name: "Dinner",
      price: 1200,
      category: "Non-Vegetarian"
    },
];

export const ramadanItem = [
    {
      id: 1,
      name: "Omelette",
      price: 80,
      category: "Vegetarian"
    },

    {
      id: 2,
      name: "Paratha",
      price: 50,
      category: "Vegetarian"
    },

    {
      id: 3,
      name: "Fruit Chaat",
      price: 150,
      category: "Vegetarian"
    },

    {
      id: 4,
      name: "Dahi Phulkiyan",
      price: 120,
      category: "Vegetarian"
    },

    {
      id: 5,
      name: "Pakoray (125g)",
      price: 250,
      category: "Vegetarian"
    },
    
    {
      id: 6,
      name: "Pakoray (250g)",
      price: 200,
      category: "Vegetarian"
    },

    {
      id: 7,
      name: "Pakoray (1kg)",
      price: 800,
      category: "Vegetarian"
    },

    {
      id: 8,
      name: "Samosa",
      price: 70,
      category: "Vegetarian"
    },

    {
      id: 9,
      name: "Vegetable Roll",
      price: 50,
      category: "Vegetarian"
    },

    {
      id: 10,
      name: "Iftaar Deal",
      price: 500,
      category: "Non-Vegetarian"
    },

    {
      id: 11,
      name: "Jameshiri Glass",
      price: 30,
      category: "Vegetarian"
    },

    {
      id: 12,
      name: "JameShiri Jug",
      price: 150,
      category: "Vegetarian"
    },

    {
      id: 13,
      name: "Khajoor",
      price: 10,
      category: "Vegetarian"
    },

    {
      id: 14,
      name: "Samosa Chaat",
      price: 150,
      category: "Vegetarian"
    },
];

export const dealsItem = [
    {
      id: 1,
      name: "Small Pizza + 1 Drink (350ml)",
      price: 599,
      category: "Non-Vegetarian"
    },

    {
      id: 2,
      name: "Medium Pizza + 2 Drink (350ml)",
      price: 999,
      category: "Non-Vegetarian"
    },

    {
      id: 3,
      name: "Large + 1 Drink (1l)",
      price: 1299,
      category: "Non-Vegetarian"
    },
];

export const staffItem = [
    {
      id: 1,
      name: "Staff Food",
      price: 0,
      category: "Non-Vegetarian"
    },

    {
      id: 2,
      name: "Staff Tea",
      price: 0,
      category: "Vegetarian"
    },

    {
      id: 3,
      name: "Staff Roti",
      price: 0,
      category: "Vegetarian"
    },
];

export const packagingItem = [
    {
      id: 1,
      name: "Take Away CHarges",
      price: 10,
      category: "Vegetarian"
    },

    {
      id: 2,
      name: "Delivery Charges 1",
      price: 50,
      category: "Vegetarian"
    },

    {
      id: 3,
      name: "Delivery Charges 2",
      price: 100,
      category: "Vegetarian"
    },

    {
      id: 4,
      name: "Delivery Charges 3",
      price: 150,
      category: "Vegetarian"
    },
];


export const menus = [
    { id:1, name: "Chicken", bgColor: "#b73e3e", icon: "🍗", items: chickenItem },
    { id:2, name: "Beef", bgColor: "#F40000", icon: "🐮", items: beefItem },
    { id:3, name: "Vegetables", bgColor: "#0B3817", icon: "🥕", items: vegetablesItem },
    { id:4, name: "Daal", bgColor: "#3B74BB", icon: "🍲", items: daalItem },
    { id:5, name: "Tandoor", bgColor: "#FF6400", icon: "🎛️", items: tandoorItem },
    { id:6, name: "BBQ", bgColor: "#0000EE", icon: "🍢", items: bbqItem },
    { id:7, name: "Fast Food", bgColor: "#FF00FE", icon: "🍔", items: fastItem },
    { id:8, name: "Sweets", bgColor: "#632A9F", icon: "🧁", items: sweetsItem },
    { id:9, name: "Extras", bgColor: "#652700", icon: "🤩", items: extrasItem },
    { id:10, name: "Beverages", bgColor: "#3C4855", icon: "☕", items: beveragesItem },
    { id:11, name: "Pizza", bgColor: "#12A2D6", icon: "🍕", items: pizzaItem },
    { id:12, name: "Special Menu", bgColor: "#90469B", icon: "👩🏽‍🍳", items: specialsItem },
    { id:13, name: "Ramadan Menu", bgColor: "#5450A4", icon: "🕌", items: ramadanItem },
    { id:14, name: "Deals", bgColor: "#8308FF", icon: "😋", items: dealsItem },
    { id:15, name: "Staff Food", bgColor: "#09716D", icon: "🤵", items:staffItem},
    { id:16, name: "Packaging and Delivery", bgColor: "#ED1590", icon:"📦", items:packagingItem },
];