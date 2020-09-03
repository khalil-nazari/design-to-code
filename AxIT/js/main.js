


/* menu toggling */
var nav_toggle_btn = document.getElementById('nav_toggle_btn'); 
var menu_area = document.getElementById('menu_area'); 

nav_toggle_btn.addEventListener('click', () => {

    console.log(menu_area)
    menu_area.classList.toggle('display_menu_area')
})