function changeTheme(){
    let themeColor = document.body
    let iconTheme = document.getElementById("iconTheme")
    
    themeColor.classList.toggle("dark-mode")

    if(iconTheme.innerHTML == "nightlight"){
        iconTheme.innerHTML = "light_mode"
    }else{
        iconTheme.innerHTML = "nightlight"
    }
}

const listItems = document.querySelector("#items-list") 
const textBox = document.querySelector("#text-input")
const addButton = document.querySelector("#submit-button")
const listOptions = document.querySelector("#listOptions")

addButton.addEventListener('click', () => {
    const textToList = textBox.value

    if(textToList == ""){
        swal.fire({
            title: 'Não foi possível adicionar', 
            text: 'Digite algo para adicionar na sua lista',
            icon: 'error' 
        })
    }else{
        textBox.value = ''
        listItems.appendChild(addTask(textToList))
        textBox.focus()
    }
})

function addTask(textToList){
    const elementLi = document.createElement('li')
    const elementSpan = document.createElement('span')
    
    elementSpan.setAttribute('id','task')
    elementSpan.textContent = textToList
    
    elementLi.className = 'toDo'
    elementLi.appendChild(elementSpan)
    elementLi.appendChild(removeButton())

    elementSpan.addEventListener('click',function(){
        if(this.id === 'task'){
            if(this.parentNode.className === 'toDo'){
                this.parentNode.className = 'done'
            }else{
                this.parentNode.className = 'toDo'
            }
        }
    })

    return elementLi;
}

function removeButton(){
    const removeButton = document.createElement('button')
    removeButton.setAttribute('id','delete')
    removeButton.textContent = '✘'

    removeButton.addEventListener('click', function(){

        if(confirm("Deseja excluir essa tarefa?") == true){
            listItems.removeChild(this.parentNode)
        }
    })
    //https://www.toptal.com/designers/htmlarrows/math/
    return removeButton;
}

function showListOptions(){
    const elementSpan = document.querySelector('#task')

    if(elementSpan === null){
        listOptions.setAttribute('hidden','hidden')
    }else{
        listOptions.removeAttribute('hidden')
    }
}
