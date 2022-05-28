function rounding(number, accuracy){
    if(accuracy > 15){
        accuracy = 15;
    }
    number = number.toFixed(accuracy);
    number = number.toString();
    number = parseFloat(number);
    console.log(number);
}

rounding(5.310030034, 7)
