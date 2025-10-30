const fielda = document.querySelector('#fielda');
const fieldb = document.querySelector('#fieldb');
const resultField = document.querySelector('.result');

const substractButton = document.querySelector('#calculateSubstract');
const sumButton = document.querySelector('#calculateSum');
const multiplyButton = document.querySelector('#calculateMultiply');

function substract(a,b){
    return a-b;
}

function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function showResult(result){
    resultField.innerHTML = result;
}

substractButton.addEventListener('click',function(){
    let result = substract(parseFloat(fielda.value),parseFloat(fieldb.value));
    showResult(result);

})
sumButton.addEventListener('click',function(){
    let result = sum(parseFloat(fielda.value),parseFloat(fieldb.value));
    showResult(result);
})

multiplyButton.addEventListener('click',function(){
    let result = multiply(parseFloat(fielda.value),parseFloat(fieldb.value));
    showResult(result);
})

