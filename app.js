const AddBtn = document.querySelector('#add-btn');
var deleteBtn = document.querySelector('#del-btn');
const toDoInput = document.querySelector('#input-task');
const addToList = document.querySelector('#all-list');
const errorMsg = document.querySelector('#error-msg')

function enableAddBtn(){
    var inputTaskLength = toDoInput.value.length;
    // console.log(inputTaskLength)
    if(inputTaskLength >=3){
        AddBtn.removeAttribute('disabled')
    }else if(inputTaskLength < 3){
        AddBtn.setAttribute('disabled',true)
    }
}
var countLi =0;

function addToDoTask(){
if(toDoInput.value == ''){
    errorMsg.innerText = 'Please Enter Task to ADD'
    
}else{
    errorMsg.innerText = '';
    const newTaskList = document.createElement('li');
    newTaskList.classList.add('list-style');
    const spanForTask = document.createElement('span');
    spanForTask.classList.add('display-task')
    const delBtn = document.createElement('button')
    delBtn.classList.add('del-btn');
    delBtn.setAttribute('id','del-btn')
    const delContent = document.createTextNode('DEL')
    delBtn.appendChild(delContent);
    const content = document.createTextNode(toDoInput.value);
    spanForTask.appendChild(content);
    newTaskList.appendChild(spanForTask);
    newTaskList.appendChild(delBtn);
    newTaskList.setAttribute('value',countLi)
    delBtn.setAttribute('value',countLi)
    addToList.appendChild(newTaskList);
    toDoInput.value=''
    // deleteBtn = document.querySelector('#del-btn');
    delBtn.addEventListener('click',() =>removeTask(newTaskList,delBtn));
    countLi++
}

}



function removeTask(newTaskList,delBtn){
    console.log(delBtn);
    // console.log(dcument.querySelector('li'))
    // var liNum = delBtn.getAttribute('value');
    // console.log(liNum)
    newTaskList.style.display='none'
}


toDoInput.addEventListener('keyup',enableAddBtn);
AddBtn.addEventListener('click',addToDoTask);
