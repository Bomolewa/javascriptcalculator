//accept operand  1
const number1 = parseFloat(prompt('Enter first number: '));
// accept operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');
//accept operand  2
const number2 = parseFloat(prompt('Enter second number: '));

// declaration of the variable.  
  let result;

// Using the switch conditional statement
  switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(number1 + number2);
        break;

        case '-':
        result = number1 - number2;
        console.log(number1 - number2);
        break;
            
        case '*':
        result = number1 * number2;
        console.log(number1 * number2);
         break;
         
         case '/':
        result = number1 / number2;
        console.log(number1 / number2);
        break;

        default:
            console.log('invalid operator');
            break;
}

// display the result of the Calculator  
window.alert(" Result = " + result);  