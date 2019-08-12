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
    }else {
       return helloWorld();
   }
}