const toggleSwitch = document.querySelector('input[type="checkbox"]');
const textBox = document.querySelector('#text-box');
const toggleIcon = document.querySelector('#toggle-icon');
const { image1, image2, image3 } = images();

function images() {
    const image1 = document.querySelector('#image1');
    const image2 = document.querySelector('#image2');
    const image3 = document.querySelector('#image3');
    return { image1, image2, image3 };
}

// template string function
function toggleImg(col) {
    image1.src = `img/undraw_inspiration_re_ivlv_${col}.svg`;
    image2.src = `img/undraw_programmer_re_owql_${col}.svg`;
    image3.src = `img/undraw_personal_info_re_ur1n_${col}.svg`;

}

//clean up by create toggle lightdark
function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isLight ? toggleImg('light') : toggleImg('dark');
}

/* // dark mode styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    toggleImg('dark');
}

// light mode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    toggleImg('light');
}
 */

// switch theme dynamically
function switchTheme(event) {
    // if checked is true: dark mode
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(false);
    } 
    // if checked is false: light mode
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(true);
    }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);

// check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    }
}
