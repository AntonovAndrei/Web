function numberSum(num){
    num = num.toString();
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum = sum + Number(num[i]);
    }

    console.log(sum);
}

numberSum(2315);
