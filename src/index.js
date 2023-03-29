import './style.css';
import logoIcon from '../assets/logo.png';
import display from './modules/displayMeals.js';

const logo = document.querySelector('.logo');
logo.src = logoIcon;

display();