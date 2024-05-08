let form = document.querySelector("form")
let input = document.querySelector("#todo-input")
let submit = document.querySelector("#submit")
let section = document.querySelector(".todo-sect")


let makeFunction = (event) =>{
    event.preventDefault()

    let container = document.createElement("div")
    container.className = "todo-container"
    section.appendChild(container)
    
    let todoText = document.createElement("textarea") 
    todoText.classList = "todo-text"
    container.appendChild(todoText)

    let todoTextValue = todoText.value = input.value
    let todoTextLength = todoText.value.length
    todoText.maxLength = 51
    todoText.cols = 17
    todoText.rows = 1

    let rowsOninput = () =>{
        let todoTextLength = todoText.value.length

        if (todoTextLength > 34){
            todoText.rows = 3
            console.log(todoTextLength);
        }
        else if (todoTextLength > 17){
            todoText.rows = 2
            console.log(todoTextLength);
        }
        else if (todoTextLength > 1){
            todoText.rows = 1
            console.log(todoTextLength);
        }
    }

    rowsOninput()
    
    todoText.addEventListener("input", rowsOninput)
    
    let buttonsContainer = document.createElement("div")
    buttonsContainer.classList = "buttons"
    container.appendChild(buttonsContainer)
    
    let trashBtn = document.createElement("button")
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashBtn.classList = "button"
    buttonsContainer.appendChild(trashBtn)
    
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList = "button"
    buttonsContainer.appendChild(checkbox)
    
    let delet = (event) =>{
        event.preventDefault()
    
        container.remove()
    }
    
    trashBtn.addEventListener("click", delet)

    checkbox.addEventListener("change", let = function () {
        container.classList.toggle("completed-container", checkbox.checked)
        todoText.classList.toggle("completed-text", checkbox.checked)
    })
}


form.addEventListener("submit", makeFunction)