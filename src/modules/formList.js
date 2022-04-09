import { newAPI } from './api.js';

export default () => {
  const listHolder = document.createElement('div');
  listHolder.classList.add('list-wrap');

  const listHeading = document.createElement('div');
  listHeading.classList.add('list-heading');

  const listHeader = document.createElement('h2');
  listHeader.innerHTML = 'Recent scores';
  listHeader.classList.add('list-head');
  listHeading.appendChild(listHeader);

  const refreshButton = document.createElement('button');
  refreshButton.classList.add('list-button');
  refreshButton.innerText = 'Refresh';
  listHeading.appendChild(refreshButton);
  refreshButton.onclick = () => { window.location.reload(); };

  const scoreDetails = document.createElement('ul');
  scoreDetails.classList.add('scores');
  listHolder.appendChild(listHeading);
  scoreDetails.innerHTML = 'Hold on a second';
  newAPI.scoreValue().then(
    (leaderscores) => {
      scoreDetails.innerHTML = '';
      leaderscores.result.forEach((leaderscore) => {
        scoreDetails.innerHTML += `<li class="score"> ${leaderscore.user}: ${leaderscore.score}</li>`;
      });
    },
  ).catch(() => {
    scoreDetails.innerHTML = 'Problem loading page';
  });

  listHolder.appendChild(scoreDetails);
  return listHolder;
};
