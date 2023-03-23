// Récupération du nom d'utilisateur
const prenom = localStorage.getItem('prenom');

// On affiche le nom d'utilisateur
const usernameElement = document.getElementById('username');
usernameElement.innerHTML = 'Bonjour ' + prenom + ' !';

// On donne du style au nom d'utilisateur
usernameElement.style.color = "black";
usernameElement.style.fontSize ="37px";
usernameElement.style.marginTop ="40px";

// Récupération des données JSON depuis l'API
fetch('https://my-json-server.typicode.com/LoickLeBorgne/todo-back-end/todolist')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Création de la div pour contenir les éléments de la liste
    const listDiv = document.createElement('div');
    listDiv.id = 'list';
    
    // Parcours des éléments de la liste et ajout dans la div
    data.forEach(todo => {
      // Création de la div pour chaque élément de la liste
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');
      
      // Ajout du texte de la tâche / couleur
      const textElement = document.createElement('span');
      textElement.innerHTML = todo.text;
      todoDiv.appendChild(textElement);
      
      // Ajout de l'état de la tâche
      const isCompleteElement = document.createElement('span');
      isCompleteElement.innerHTML = todo.is_complete ? 'Réalisé' : 'À faire';
      isCompleteElement.classList.add(todo.is_complete ? 'done' : 'not-done');
      todoDiv.appendChild(isCompleteElement);
      
      // Ajout des tags de la tâche
      const tagsElement = document.createElement('span');
      tagsElement.innerHTML = todo.Tags;
      todoDiv.appendChild(tagsElement);
      
      // Ajout des boutons pour la suppression et la fin de la tâche
      const deleteButton = document.createElement('button');
      const detailButton = document.createElement('a');
      
      detailButton.href = 'item.html?id=' + todo.id; 
      detailButton.innerHTML = 'Détails';
      todoDiv.appendChild(detailButton);

   
      
     
      
      // Ajout de la div de la tâche dans la div de la liste
      listDiv.appendChild(todoDiv);
    });
    
    // Ajout de la div de la liste dans le DOM
    const appElement = document.getElementById('app');
    appElement.appendChild(listDiv);
  })
  .catch(error => console.error(error));