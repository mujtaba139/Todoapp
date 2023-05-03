var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
var tasks =[]; 
function addTask(){tasks
    if(inputBox.value === ''){
        alert('Please Insert a Task!');
    }
    else {
        let newTask = inputBox.value;
        tasks.push(newTask);
        let li = document.createElement('li');
        li.setAttribute('contenteditable', true); 
        li.textContent = newTask; 
        listContainer.appendChild(li);
       
        let button = document.createElement('button');
        button.textContent = 'Edit';
        li.appendChild(button);  
        button.addEventListener('click', function(e) {
            
            let index = tasks.indexOf(newTask);
            let liText = li.textContent.replace('Edit×', ''); 
            let newTaskText = prompt('Edit task', liText);
            
            if (newTaskText !== null && newTaskText !== '') {
                tasks[index] = newTaskText;
                li.textContent = newTaskText ; 
                li.removeAttribute('contenteditable');
                li.appendChild(button);
                li.appendChild(span); 
            }
        });
             
            
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        
    }
   
    inputBox.value ='';
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