const display = document.querySelector("#display");

function addValue(input){
    display.value += input;
};

function calculate(){
    display.value = eval(display.value);
}

function clearDisplay(){
    display.value = ''
}

function removeValue(){
    display.value = display.value.toString().slice(0,-1);
}