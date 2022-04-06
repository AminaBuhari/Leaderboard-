export default () => {
const form = document.createElement('form');

const headerText = document.createElement('h3');
headerText.classList.add('text-head')
headerText.innerText = 'Add your score';
form.appendChild(headerText);

const nameField = document.createElement('input');
nameField.setAttribute('type', 'text');
nameField.setAttribute('placeholder', 'Your name')
nameField.setAttribute('name', 'name');
nameField.classList.add('name-input')
form.appendChild(nameField);

const scoreField = document.createElement('input');
scoreField.setAttribute('type', 'number');
scoreField.setAttribute('placeholder', 'Your score')
scoreField.setAttribute('name', 'score');
scoreField.classList.add('score-input')
form.appendChild(scoreField);

const button = document.createElement('button');
button.setAttribute('type', 'number');
button.classList.add('submit-button');
button.innerText = 'Submit'
form.appendChild(button);

return form;

}