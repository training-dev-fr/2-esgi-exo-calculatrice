const fielda = document.querySelector('#fielda');
const fieldb = document.querySelector('#fieldb');


const resultField = document.querySelector('.result');


const substractButton = document.querySelector('#calculateSubstract');

function substract(a,b){
    return a-b;
}

function showResult(result){
    resultField.innerHTML = result;
}

substractButton.addEventListener('click',function(){
    let result = substract(parseFloat(fielda.value),parseFloat(fieldb.value));
    showResult(result);

})