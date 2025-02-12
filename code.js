// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
   if (input === ''){
       return '';
   }else if(typeof input === 'string'){
       return 'Hello, ' + input +'!';
   }else if(typeof input === 'boolean'){
        return helloWorld();
    }else if(input === undefined){
       return helloWorld();
   }else{
       return false;
   }
}

function isFive(input) {
    return input == 5;
}

function isEven(input) {
   if (isNaN(input) || typeof input === 'boolean'){
       return false;
   }else if(input % 2 === 0){
       return true;
   }else{
       return false;
   }
}

function isVowel(input) {
    if (input === 'a' || input === 'A' || input === 'e' || input === 'E' || input === 'i' || input === 'I' || input === 'o' || input === 'O' || input === 'u' || input === 'U'){
        return true;
    }else {
        return false;
    }
}

function add(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || (num1 === undefined && num2 === undefined)){
        return 'NaN';
    } else {
        return +num1 + +num2;
    }
}