function townLocation(towns){
    townArr = new Array();

    for(let i = 0; i < towns.length; i++){
        let town = towns[i].split(" | ");
        townArr.push({name: town[0], latitude: Number(town[1]).toFixed(2), 
            longitude: Number(town[2]).toFixed(2)});
    }

    for(let i = 0; i < townArr.length; i++){
        console.log(`{ town: '${townArr[i].name}', latitude: '${townArr[i].latitude}',` + 
        `longitude: '${townArr[i].longitude}' }`);
    }
}

townLocation(['Moscow | 55.7522 | 37.6156','Beijing | 39.913818 | 116.363625']);