/*
    Navbar menu toggling for mobile
*/
const toggle_btn = document.getElementById('menu_toggle_btn');
 
toggle_btn.addEventListener ('click', () => {
    const nav_menu = document.getElementById('nav_area');   
    nav_menu.classList.toggle('display_nav_area')
});