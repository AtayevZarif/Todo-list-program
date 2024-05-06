let form = document.querySelector("form")
let input = document.querySelector("#todo-input")
let submit = document.querySelector("#submit")
let section = document.querySelector(".todo-sect")


let makeFunction = (event) =>{
    event.preventDefault()

    let container = document.createElement("div")
    container.className = "todo-container"
    section.appendChild(container)
    
    let todoText = document.createElement("input")
    todoText.value = input.value
    let length = todoText.value.length
    todoText.classList = "todo-text"
    container.appendChild(todoText)
    
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
}


form.addEventListener("submit", makeFunction)