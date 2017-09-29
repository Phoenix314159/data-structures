//sum all primes up to and included number

function sumPrimes(num) {

    function isPrime(num) {
        for(var i=2; i<num; i++){
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }
    var arr = [];

    for(var j=2; j<=num; j++) {

        if(isPrime(j)){
            arr.push(j);
        }
    }
    return arr.reduce(function(a,b){
        return a + b;
    });

}

sumPrimes(10);



console.log(sumPrimes(5))