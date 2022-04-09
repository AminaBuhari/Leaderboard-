import { ScoresList, newAPI } from './api.js';

export default () => {
  const form = document.createElement('form');

  const headerText = document.createElement('h3');
  headerText.classList.add('text-head');
  headerText.innerText = 'Add your score';
  form.appendChild(headerText);

  const bot = document.createElement('div');
  bot.classList.add('bot');
  form.appendChild(bot);

  const nameField = document.createElement('input');
  nameField.setAttribute('type', 'text');
  nameField.setAttribute('placeholder', 'Your name');
  nameField.setAttribute('name', 'name');
  nameField.classList.add('name-input');
  nameField.minLength = 3;
  nameField.required = true;
  form.appendChild(nameField);

  const scoreField = document.createElement('input');
  scoreField.setAttribute('type', 'number');
  scoreField.setAttribute('placeholder', 'Your score');
  scoreField.setAttribute('name', 'score');
  scoreField.classList.add('score-input');
  scoreField.min = '0';
  scoreField.required = true;
  form.appendChild(scoreField);

  const button = document.createElement('button');
  button.setAttribute('type', 'number');
  button.classList.add('submit-button');
  button.innerText = 'Submit';
  form.appendChild(button);

  form.onsubmit = (event) => {
    event.preventDefault();
    const score = new ScoresList({ player: nameField.value, score: scoreField.value });
    bot.innerText = '';
    newAPI.enterForm(score.tojson()).then(
      (response) => {
        bot.innerText = `${response.result} \n Click refresh button`;
        form.reset();
      },
      (error) => {
        bot.innerText = error;
      },
    );
  };
  return form;
};