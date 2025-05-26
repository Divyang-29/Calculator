const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.button');

let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;
        simulateButtonPress(value);
    });
});


        document.addEventListener('keydown',(e)=>{

            let key = e.key;

            if(key === 'Enter')key = '=';
            if(key === 'Backspace')key = 'DEL'
            if (key === 'Escape') key = 'AC';
            if (key === '*') key = '×';
            if (key === '/') key = '÷';

            const allowedKeys = '0123456789+-×÷.%=';

            if(allowedKeys.includes(key) || key === 'DEL' || key === 'AC')
            {
                simulateButtonPress(key);
            }

        })


function simulateButtonPress(value){

     if(value === 'AC'){
            result = '';
        }else if(value === 'DEL'){
            result = result.slice(0,-1);
        }else if(value === '='){
            try{
                result = eval(result);
            }
            catch{
                result = 'Error';
            }
        }else{
            if(value === '÷') value = '/';
            if(value === '×')value = '*';
            if(value === '−')value = '-';
            if(value === '+')value = '+';
            if(value === '%')value = '%';

            result += value;
        }

        display.innerText = result;

}