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
    return input === 'a';
}