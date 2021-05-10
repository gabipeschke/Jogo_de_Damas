var input_j1 = document.getElementById("txtname_j1")
let input_j2 = document.querySelector("input#txtname_j2")
let j1_color = document.getElementsByName("radj1")
let j2_color = document.getElementsByName("radj2")
/*

index page

*/ 
let startButton = document.querySelector("input#startButton")


//Dar enter no input no jogador1 dá um focus() no input do jogador2
/*
input_j1.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        input_j2.focus()
    }
})

//Dar enter no input no jogador2 apertará o startButton*
input_j2.addEventListener("keyup", function(event){
    if(event.keyCode ===13){
        event.preventDefault();
        startButton.click();
    }
})
*/ 
function startGame(){
    alert("value inside:"+ input_j1.value)
}

//para não ser possível selecionar um único jogador selecionar duas cores
function j1Black_Checked(){
    document.getElementById("j2_black").checked = false;
    document.getElementById("j2_white").checked = true;

}
function j1White_Checked(){
    document.getElementById("j2_white").checked = false;
    document.getElementById("j2_black").checked = true;
}
function j2Black_Checked(){
    document.getElementById("j1_black").checked = false;
    document.getElementById("j1_white").checked = true;
}
function j2White_Checked(){
    document.getElementById("j1_white").checked = false;
    document.getElementById("j1_black").checked = true;
}
