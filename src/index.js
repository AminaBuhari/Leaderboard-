import form from './modules/form.js';
import listHolder from './modules/formList.js';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.classList.add('container');

  element.appendChild(listHolder());
  element.appendChild(form());

  return element;
}

document.body.appendChild(component());
