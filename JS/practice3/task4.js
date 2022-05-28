function loading(percent){
    if(percent === 100){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
        return;
    }

    let loadingString = "[";
    let symbol = '%';
    for(let i = 0; i < 100; i += 10){
        if(i === percent){
            symbol = '.';
        }
        loadingString += symbol;
    }
    loadingString += "]";

    console.log(percent + " " + loadingString);
    console.log("Still loading...");
}

loading(-1324);