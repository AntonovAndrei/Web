function divisor(number){
    let divisor = "Не делится";
    if(number%2 == 0){
        divisor = "Число делится на 2";
    }
    if(number%3 == 0){
        divisor = "Число делится на 3";
    }
    if(number%6 == 0){
        divisor = "Число делится на 6";
    }
    if(number%10 == 0){
        divisor = "Число делится на 10";
    }

    console.log(divisor);
}

divisor(40);