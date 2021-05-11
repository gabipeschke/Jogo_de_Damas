/*

index.html

 */

//função que cria os objetos j1 e j2 e direciona para dama.html
function startGame(){
    let input_j1 = document.querySelector("input#txtname_j1")
    let input_j2 = document.querySelector("input#txtname_j2")
    let j1_color = document.getElementsByName("radj1")

    let j1 = new Object()
    let j2 = new Object()

    j1.name = input_j1.value
    j2.name = input_j2.value

    if(j1_color[0].checked){
        j1.color = 'black'
        j2.color = 'white'
    }else{
        j1.color = 'white'
        j2.color = 'black'
    }
    j1.pieces = 12
    j2.pieces = 12
    
    /*alert(`J1: ${j1.name}  ${j1.color}  ${j1.pieces}\nJ2: ${j2.name}  ${j2.color}  ${j2.pieces = 12}`)*/
    window.location.href = "dama.html"
}


//Dar enter no input no jogador 1 dá um focus() no input do jogador2

document.querySelector("input#txtname_j1").addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault()
        document.querySelector("input#txtname_j2").focus()
    }
})

//Dar enter no input no jogador2 apertará o startButton
document.querySelector("input#txtname_j2").addEventListener("keyup", function(event){
    if(event.keyCode ===13){
        event.preventDefault();
        startButton.click()
    }
})


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

