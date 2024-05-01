
function createList() {

    let ul = document.createElement("ul");

   
    let items = ["Item 1", "Item 2", "Item 3"];

   
    items.forEach(function(itemText) {
        let li = document.createElement("li");
        li.textContent = itemText; 
        ul.appendChild(li); 
    });

  
    let container = document.getElementById("listContainer");

 
    container.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", createList);


let createdElement; 


function createAndAppendElement() {
  
    createdElement = document.createElement("p");
    createdElement.textContent = "This is item.";


    document.getElementById("container").appendChild(createdElement);
}

let remover = () =>{
    deleteButton.forEach(button =>{
        button.addEventListener('click' , () =>{
            let die = button.parentElement;
            die.remove();
        });
    });
}




