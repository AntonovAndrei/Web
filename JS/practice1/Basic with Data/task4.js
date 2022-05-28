function calculator(a, operation, b){
    let result;
    if(operation == "+"){
        result = a + b;
    }
    else if(operation == "-"){
        result = a - b;
    }
    else if(operation == "*"){
        result = a * b;
    }
    else if(operation == "/"){
        result = a / b;
    }

    result = result.toFixed(2);
    result = result.toString();
    result = parseFloat(result);

    console.log(result);
}

calculator(5, '/', 7);