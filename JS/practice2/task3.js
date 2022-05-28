function solve(arr, spinsNum){
    let buffer;
    for(let i = 0; i < spinsNum; i++){
        buffer = arr.shift();
        arr.push(buffer);
    }

    console.log(arr);
}

solve([2,4,15,31],5);