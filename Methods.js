//Actions that can be  performed on a object
//Jo functions object mai perform hote hai unko Methods bolte hai

const calculator ={
    num: 55,

    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}

console.log(calculator.num);
console.log(calculator.add(5,3));
console.log(calculator.sub(8,16));
console.log(calculator.mul(4,9));

//Methods shorthand

const calc ={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}

console.log(calc.num);
console.log(calc.add(5,3));
console.log(calc.sub(8,16));
console.log(calc.mul(4,9));
