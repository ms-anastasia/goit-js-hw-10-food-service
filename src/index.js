import './sass/main.scss';
import '../styles.css';
import products from '../menu.json';
import productCardTmpl from './templates/menu-elements.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = productCardTmpl(products);
menuRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    body: document.querySelector('body'),
    themeSwitch : document.querySelector ('#theme-switch-toggle')
}
themeDefault();

refs.themeSwitch.addEventListener('change', onThemeToggle);
function onThemeToggle() {
    refs.body.classList.toggle(Theme.DARK);

    if (refs.body.classList.contains(Theme.DARK)) {
        localStorage.setItem('theme', Theme.DARK)
        
    }
    else { localStorage.setItem('theme', Theme.LIGHT) };
}
function themeDefault() {
    if (!localStorage.length) {
      localStorage.setItem('theme', Theme.LIGHT)  
    };
    refs.body.classList.add(localStorage.getItem('theme'));
    if (refs.body.classList.contains(Theme.DARK)) {
       refs.themeSwitch.checked = true; 
    }
}

