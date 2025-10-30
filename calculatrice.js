const fielda = document.querySelector('#fielda');
const fieldb = document.querySelector('#fieldb');
const resultField = document.querySelector('.result');


const sumButton = document.querySelector('#calculateSum');

function sum(a,b){
    return a+b;
}

function showResult(result){
    resultField.innerHTML = result;
}

sumButton.addEventListener('click',function(){
    let result = sum(parseFloat(fielda.value),parseFloat(fieldb.value));
    showResult(result);

})
