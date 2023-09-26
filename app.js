// Function for responsive hanburger menu
const toggleMenu = () => {
    const { classList: menuClassList } = document.querySelector('.menu-links');
    const { classList: iconClassList } = document.querySelector('.hamburger-icon');

    menuClassList.toggle('open');
    iconClassList.toggle('open');
};
