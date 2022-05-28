function holidays(peopleNum, category, day){
    let price = 0;
    let discount = 1;
    let bill = 0;

    if(category == "Students"){
        if(day == "Friday"){
            price = 8.45;
        }
        else if(day == "Saturday"){
            price = 9.80;
        }
        else if(day == "Sunday"){
            price = 10.46;
        }

        if(peopleNum >= 30){
            discount = 0.85;
        }

        bill = price * peopleNum * discount;
    }
    else if(category == "Corporate"){
        if(day == "Friday"){
            price = 10.90;
        }
        else if(day == "Saturday"){
            price = 15.60;
        }
        else if(day == "Sunday"){
            price = 16;
        }

        if(peopleNum >= 100){
            peopleNum = peopleNum - 10;
        }

        bill = price * peopleNum * discount;
    }
    else if(category == "Regular"){
        if(day == "Friday"){
            price = 15;
        }
        else if(day == "Saturday"){
            price = 20;
        }
        else if(day == "Sunday"){
            price = 22.50;
        }

        if(peopleNum >= 10 && peopleNum <= 20){
            discount = 0.95;
        }

        bill = price * peopleNum * discount;
    }

    console.log('Total price: ' + bill);
}

holidays(40, "Regular", "Saturday")