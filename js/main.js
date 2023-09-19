function quiz(){
    let select = document.getElementById("quiz-select");
    let result = document.getElementById("quiz-result");

    result.innerHTML = "<p class='text-"+select.value+"'+ select.value >" + select.value + "</p>"
}  

function showModal(){
    let modal = document.getElementById("exampleModal");
    modal.classList.add("d-block","show","bg-dark","bg-opacity-50")
}

function closeModal(){
    let modal = document.getElementById("exampleModal");
    modal.classList.remove("d-block","show","bg-dark","bg-opacity-50")
}

function theme(){
    let result = document.getElementById("toggleResult");
    result.classList.toggle("bg-dark");

}

function changeColor(btn){
    let result = document.getElementById("thisResult");
    result.innerHTML = btn.innerText
    let smallChars = btn.innerText.toLowerCase();
    result.classList = "bg-"+smallChars +" p-5 rounded border mt-3 text-white"
}