

// Start Here: Create a reference to the ".menu" class
const menu = $(".menu");
const menuButton = $(".menu-button");
// create a reference to the ".menu-button" class
// const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence.
//   menu.classList.toggle("menu--open");
// };

// menuButton.addEventListener('click', toggleMenu);

menuButton.click(() => {
  menu.toggle("menu--open");
});

//Making menu background change colors on menu item click.

$(".menu ul li").click(() => {

  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  menu.css({backgroundColor:randomColor});

  console.log("Menu background is now ", randomColor);
});

menu.css("color", "white");








