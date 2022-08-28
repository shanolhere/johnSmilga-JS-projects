const todoText = document.querySelector('.text');
const submitBtn = document.querySelector('.submit');

const error = document.querySelector('.error');
const todoLists = document.querySelector('.todoLists')
let todos = []
// console.log(submitBtn.innerHTML)

submitBtn.addEventListener('click', () => {
  if(!todoText.value){
      setTimeout(() => {
      error.innerHTML = "Enter a Todo list";
      error.style.background="rgb(230,107,107)";
    },1);
      setTimeout(() => {
      error.innerHTML = ""
      error.style.background="";
      },1000);
  }
  else{
      error.innerHTML = "";
      //saving todo
      let todo = {
        id:new Date().getTime().toString(),
        todoTitle: todoText.value,
      }
      todos.push(todo)
      todoText.value = "";
      //console.log(todos)

     //displaying todo
     let displayToDos = () => {
      todoLists.innerHTML = "";

      let todoMap = todos.map((todo) => {
        return `
          <li>
          <div class="heading">
          <input type="radio"/>
          <input type="text" class="title" readonly>${todo.todoTitle}/>
          </div>
          <div class="operations">
            <button class="edit"><ion-icon data-id='${todo.todoTitle}' name="create-outline"></ion-icon></button>
            <button class="delete"><ion-icon data-id='${todo.id}' name="trash-outline"></ion-icon></button>
          </div>
          </li>
        `
      })
      todoMap = todoMap.join('');
      todoLists.innerHTML = todoMap;

      //Delete ToDo
      const deleteBtn = document.querySelectorAll('.delete')
      deleteBtn.forEach(deleteEle => {
        deleteEle.addEventListener('click', (event) => {
        let idToBeDeleted = event.target.getAttribute('data-id')

        todos = todos.filter((todo) => {
          if(todo.id !== idToBeDeleted){
            return true
          }
          return false
        })
        displayToDos();
        //console.log(todos)
      });
      });

    //Edit ToDo
    const EditBtn = document.querySelectorAll('.edit')
    EditBtn.forEach(editEle => {
       editEle.addEventListener('click', (event) => {
         const title = document.querySelector('.title')
         console.log(title)
         let titleToBeEdited = event.target.getAttribute('data-id');

         //displayToDos();
         //console.log(todos)
       });

    });

  }
    displayToDos();
  }
})
