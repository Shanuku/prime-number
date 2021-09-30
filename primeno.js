console.log("helo");
isprime(24);
isprime(69);
function isprime(num){
    var i;
    var num;
    for( i=2; i<num; i++){
        if(num%i === 0){
         console.log("this " + num + " is not a prime number ");
         return false;   
        }
        console.log("this " + num + " is a prime number");
        return true;
    }
}