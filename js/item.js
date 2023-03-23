let url = new URL(window.location.href);
console.log(url);
let searchParams = new URLSearchParams(url.search);
let id = searchParams.get('id');  

fetch('https://my-json-server.typicode.com/LoickLeBorgne/todo-back-end/todolist/'+ id).then(response => response.json()).then(data => {

console.log(data);
    document.getElementById('title').innerHTML = data.text;
  });

// Récupération des données JSON depuis l'API
fetch('https://my-json-server.typicode.com/LoickLeBorgne/todo-back-end/todolist/' + id)
  .then(response => response.json())
  .then(todo => {
    console.log(todo);
    // Création de la div pour contenir les éléments de la liste
    const listDiv = document.createElement('div');
    listDiv.id = 'list';
    
    // Parcours des éléments de la liste et ajout dans la div
    
      // Création de la div pour chaque élément de la liste
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');
      
      // Ajout du texte de la tâche / couleur
      const textElement = document.createElement('span');
      textElement.innerHTML = todo.text;
      textElement.textContent = "Tâche : " + todo.text;
      textElement.classList.add('title');
      todoDiv.appendChild(textElement);
      
      // Ajout de l'état de la tâche
      const isCompleteElement = document.createElement('span');
      isCompleteElement.innerHTML = todo.is_complete ? 'Status : Réalisé' : 'Status : À faire';
      isCompleteElement.classList.add(todo.is_complete ? 'done' : 'not-done');
      todoDiv.appendChild(isCompleteElement);
      
      // Ajout des tags de la tâche
      const tagsElement = document.createElement('span');
      tagsElement.innerHTML = todo.Tags;
      tagsElement.textContent = "Tags : " + todo.Tags;
      tagsElement.classList.add('tags');

      todoDiv.appendChild(tagsElement);
      
      // Ajout des boutons pour la suppression et la fin de la tâche
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Retirer';
      deleteButton.classList.add('delete');


  
      deleteButton.onclick = () => {
        if (isCompleteElement.classList.contains('done')) {
          listDiv.removeChild(todoDiv);
        } else {
          alert("L'élément doit être réalisé pour être supprimé.");
        }
      };
      
      todoDiv.appendChild(deleteButton);

       // Ajout du bouton de modification


       const updateButton = document.createElement('button');
       updateButton.innerHTML = 'Modifier';
       updateButton.classList.add('update');
 
 
   
       updateButton.onclick = () => {
         
       };
       
       todoDiv.appendChild(updateButton);

      
      // Ajout de la div de la tâche dans la div de la liste
      listDiv.appendChild(todoDiv);
    
    
    // Ajout de la div de la liste dans le DOM
    const appElement = document.getElementById('app');
    appElement.appendChild(listDiv);
  })
  .catch(error => console.error(error));

  // Le bouton de suppression de la tâche


  
  
  
  
  
   // On modifie la valeur du status 
   






  