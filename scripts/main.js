import {addTask, getAllTasks} from './firebase.js'



const button = document.getElementById('submit-button')
button.addEventListener('click', (e)=> clickForm(e))

let tasks = await getAllTasks() //Retorna lo que mandamos a la db con la funcion
displayTasks();

function displayTasks(){
const taskContainer = document.getElementById('tasks-container')

taskContainer.innerHTML= '';

tasks.forEach((task => {  //por cada tarea que se envíe, que cree un elemento texto en forma de lista
  const taskElement = document.createElement('li');
  taskElement.textContent = task.title;

  taskContainer.appendChild(taskElement); //para agregar al display del html la nueva tarea que se creó
}))
}


async function clickForm(e){
  e.preventDefault()  
  console.log('prevent event')
  const title = document.getElementById('taskTitle').value
  const description = document.getElementById('taskDescription').value

  //Para añadir las tareas
  await addTask(title, description)
  //Este es para actualizarlas (por eso el await)
  tasks = await getAllTasks() 
  displayTasks()
}