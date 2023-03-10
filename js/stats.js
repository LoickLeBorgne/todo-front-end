// Récupération des données JSON depuis l'API
fetch('https://my-json-server.typicode.com/LoickLeBorgne/todo-back-end/todolist')
  .then(response => response.json())
  .then(data => {
    // Création du tableau HTML
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const textHeader = headerRow.insertCell();
    textHeader.innerHTML = 'Chose à faire';
    const isCompleteHeader = headerRow.insertCell();
    isCompleteHeader.innerHTML = ' Status';
    const Tags = headerRow.insertCell();
    Tags.innerHTML = 'Tags';
    const deleteHeader = headerRow.insertCell();
    deleteHeader.innerHTML = 'Action';
    const finishHeader = headerRow.insertCell();
    finishHeader.innerHTML = 'Finition';
    // Parcours des éléments de la liste et ajout dans le tableau HTML
    data.forEach(todo => {
      const row = table.insertRow();
      const textCell = row.insertCell();
      textCell.innerHTML = todo.text;
      const isCompleteCell = row.insertCell();
      isCompleteCell.innerHTML = todo.is_complete ? 'Réalisé' : 'À faire';

      // Ajout des classes CSS
      isCompleteCell.classList.add(todo.is_complete ? 'done' : 'not-done'); 
      textHeader.classList.add('blue');
      isCompleteHeader.classList.add('blue');
      Tags.classList.add('blue');
      deleteHeader.classList.add('blue');
      finishHeader.classList.add('blue');
      textCell.classList.add('todo');
      const tagsCell = row.insertCell();
      tagsCell.innerHTML = todo.Tags;
      
      // Ajout d'un bouton de suppression
      const deleteCell = row.insertCell();
      const finishCell = row.insertCell();
      const deleteButton = document.createElement('button');
      const finishButton = document.createElement('button');
      deleteButton.innerHTML = 'Retirer';
      finishButton.innerHTML = 'Fini';
      deleteButton.onclick = () => {
        if (isCompleteCell.classList.contains('done')) {
          table.deleteRow(row.rowIndex);
        } else {
          alert("L'élément doit être réalisé pour être supprimé.");
        }
      };
      deleteCell.appendChild(deleteButton);
      finishCell.appendChild(finishButton);
    });
    
    // Ajout du tableau dans le DOM
    const appElement = document.getElementById('app');
    appElement.appendChild(table);
  })
  .catch(error => console.error(error));
