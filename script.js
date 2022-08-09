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

function addItems(){
    let checkIcon = document.getElementById("checkbox")
    let deleteIcon = document.getElementById("delete")

    let itemList = document.getElementById("items-list")//article    
    let itemPrinted = document.getElementById("item-list")//parágrafo
    let inputText = document.getElementById("text-input").value
    
    if(inputText == ""){
        swal({
            title: "Não foi possível adicionar", 
            text: "Digite algo para adicionar em sua lista",
            icon: "error" 
        })
    }else{
        checkIcon.innerText = "check_box_outline_blank"
        deleteIcon.innerText = "delete_forever"   
        
        //Gerar um novo article
        //Colocar os ícones e o conteúdo de texto
        //\n pra quebrar linha?
        //Você consegue...
        
    }
}

function checkItem(){
    let checkIcon = document.getElementById("checkbox")
    let itemPrinted = document.getElementById("item-list")
    let inputText = document.getElementById("text-input").value

    itemPrinted.innerHTML = inputText
    checkIcon.innerHTML = "done"
}

function deleteItem(){
    let deleteItem = document.getElementById("item-list")
    let deleteIcon = document.getElementById("delete")
    let checkIcon = document.getElementById("checkbox")
    
    let confirmation = confirm("Tem certeza que deseja excluir essa tarefa?")   

    if(confirmation){
        deleteItem.innerHTML = ""
        deleteIcon.innerHTML = ""
        checkIcon.innerHTML = ""
    }
}
