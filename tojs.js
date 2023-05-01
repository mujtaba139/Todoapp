var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert('Please Insert a Task!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
      
    }
    inputBox.value='';
}