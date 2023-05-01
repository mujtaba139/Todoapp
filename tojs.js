var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert('Please Insert a Task!');
    }
    else{
        let li = document.createElement('li');
        li.setAttribute("content_editable", true);
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        
        li.setAttribute('id', 'task_statement');
        li.appendChild(span);
        li.addEventListener('click',function(e){
            let new_task = prompt('edit task');
            if(new_task){
            e.target.innerText=new_task;
             li.appendChild(span);
             localStorage.setItem("data", listContainer.innerHTML);
            }
            });
    }
    inputBox.value ='';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
   
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}
show();