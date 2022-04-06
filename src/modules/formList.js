export default () => {
    const listHolder = document.createElement('div');
    listHolder.classList.add('list-wrap');

    const listHeading = document.createElement('div')
    listHeading.classList.add('list-heading')

    const listHeader = document.createElement('h2')
    listHeader.innerHTML = 'Recent scores'
    listHeader.classList.add('list-head')
    listHeading.appendChild(listHeader);

    const refreshButton = document.createElement('button')
    refreshButton.classList.add('list-button')
    refreshButton.innerText = 'Refresh'
    listHeading.appendChild(refreshButton)

    const scoreDetails = document.createElement('ul')
    scoreDetails.classList.add('scores')
    scoreDetails.innerHTML = `<li class="score"> Name: 100</li>
                             <li class="score"> Name: 100</li>
                             <li class="score"> Name: 100</li>
                             <li class="score"> Name: 100</li>
                             <li class="score"> Name: 100</li>`

    listHolder.appendChild(listHeading)
    listHolder.appendChild(scoreDetails)
   
    return listHolder;
}

