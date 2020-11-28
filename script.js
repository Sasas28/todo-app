class UI {
  static addToList(data){
    const myLists = document.querySelector('#myLists');
    const li = document.createElement('li');
    li.className = `list-group-item`;
    li.innerHTML = `
    <div>${data}</div>
    <button class="done btn btn-success">Done</button>
    <button class="delete btn btn-danger">Delete</button>
    `;
    myLists.appendChild(li);
    document.querySelector('#inputFields').value = '';
    document.querySelector('#inputFields').focus();
    document.querySelector('#noTask').style.display = 'none';
  }
  
  static lineThrough(element){
      const span = element.previousElementSibling;
      span.style.textDecoration = "line-through"
  }
  
  static deleteList(element){
      element.parentElement.remove();
  }
  
  static displayNoTask(){
    if(document.querySelector('#myLists').innerHTML.length == 0){
      document.querySelector('#noTask').style.display = 'block'
    }
  }
/*end of class UI*/
}


/*When the form was submitted*/
document.querySelector('#myForm').addEventListener('submit', e => {
  e.preventDefault();
  const inputFieldsValue = document.querySelector('#inputFields').value;
  if(inputFieldsValue.length > 0){
  UI.addToList(inputFieldsValue);    
  }
});

/*When the Done & Delete button was clicked*/
document.querySelector('#myLists').addEventListener('click', e => {
  if (e.target.classList.contains('done')){
    UI.lineThrough(e.target);
  }else if(e.target.classList.contains('delete')){
    UI.deleteList(e.target);
  }
  UI.displayNoTask();
});

/*When Clear List button was clicked*/
document.querySelector('#clearList').addEventListener('click', () => {
  document.querySelector('#myLists').innerHTML = "";
  UI.displayNoTask();
});