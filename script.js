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

addButton.addEventListener('click', () => {
    const textToList = textBox.value

    /*if(textToList == ""){
        swal({
            title: 'Não foi possível adicionar', 
            text: 'Digite algo para adicionar em sua lista',
            icon: 'error' 
        })
    }else{
    }*/

    textBox.value = ''
    listItems.appendChild(addTask(textToList))
    textBox.focus()
})

function addTask(textToList){
    const elementLi = document.createElement('li')
    const elementSpan = document.createElement('span')
    
    elementSpan.setAttribute('id','task')
    elementSpan.textContent = textToList
    
    elementLi.appendChild(elementSpan)
    return elementLi;
    
    /*else{
        checkIcon.innerText = "check_box_outline_blank"
        deleteIcon.innerText = "delete_forever"
    }*/
}
