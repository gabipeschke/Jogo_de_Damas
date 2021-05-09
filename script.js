let input_j1 = document.querySelector("input#txtname_j1")
let input_j2 = document.querySelector("input#txtname_j2")
input_j1.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        input_j2.focus()
    }
})
/*
input_j2.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        
    }
})
*/

//para não ser possível selecionar um único jogador selecionar duas cores
function removeChecked_j1White(){
    document.getElementById("j1_white").checked = false;
}
function removeChecked_j1Black(){
    document.getElementById("j1_black").checked = false;
}
function removeChecked_j2White(){
    document.getElementById("j2_white").checked = false;
}
function removeChecked_j2Black(){
    document.getElementById("j2_black").checked = false;
}