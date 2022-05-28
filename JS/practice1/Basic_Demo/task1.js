function ageIdentify(age){
    if(age >= 0 && age <=2)
    {
        console.log("младенец");
    }
    else if(age >= 3 && age <= 13)
    {
        console.log("ребенок");
    }
    else if(age >= 14 && age <= 19)
    {
        console.log("подросток");
    }
    else if(age >= 20 && age <= 65)
    {
        console.log("взрослый");
    }
    else if(age >= 66)
    {
        console.log("пожилой");
    }
    else
    {
        console.log("неправильный возраст");
    }

}

ageIdentify(77);