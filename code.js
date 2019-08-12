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
    if (input == 5){
        return true;
    }else{
        return false;
    }
}