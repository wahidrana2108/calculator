class calculator{
    constructor(previousOperantTextElement, currentOperantTextElement){
        this.previousOperantTextElement = previousOperantTextElement
        this.currentOperantTextElement = currentOperantTextElement
    }
    
    clear(){

    }
    delete(){

    }
    appendNumber(){

    }
    chooseOperation(){

    }
    compute(){
        
    }
}



const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');
const previousOperantTextElement = document.querySelector('[data-previous-operant]');
const currentOperantTextElement = document.querySelector('[data-current-operant]');