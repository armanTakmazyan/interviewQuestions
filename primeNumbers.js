function isNumber(n){
    return Object.prototype.toString.call(n).slice(8,-1) === "Number";
}

function isPrimeNumber(n){
    if(!isNumber(n)) return false;
    for(let i = 2; i<n; ++i){
      if(n % i === 0) return false;
    }
    return true;
}

function primeNumbers(limit){
    let result = [];
    for(let i = 2; i<=limit; ++i){
        if(isPrimeNumber(i)){
            result.push(i);
        }
    }

    return result;
}

function primeNumbersSum(limit){
    if(!isNumber(limit) || limit === 1) return [];
    return primeNumbers(limit).reduce((prev, next) => prev + next);
}
