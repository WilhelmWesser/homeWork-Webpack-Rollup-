import './index.css';
import JS_IMG from './assets/JS.jpg';

console.log('Hello World!');
const body = document.querySelector('body');
const pic = document.createElement('img');
pic.className = 'picture';
pic.src = JS_IMG;

const heading = document.createElement('h1');
heading.textContent = 'I love JavaScript';

body.append(heading, pic);