function staffParser(staff){
    let staffArr = new Array();

    for(let i = 0; i < staff.length; i++){
        staffArr.push({name: staff[i], personalNum: staff[i].length});
    }

    for(let i = 0; i < staffArr.length; i++){
        console.log(`Name: ${staffArr[i].name} - Personal Number: ${staffArr[i].personalNum}`);
    }
}

staffParser(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);