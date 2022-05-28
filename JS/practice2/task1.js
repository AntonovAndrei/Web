function solve(arr){
    let startSum = 0;
    for(let i = 0; i < arr.length; i++){
        startSum += arr[i];
    }

    let endSum = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            arr[i] = arr[i] + i;
        }
        else{
            arr[i] = arr[i] - i;
        }

        endSum += arr[i];
    }

    console.log(arr);
    console.log(startSum);
    console.log(endSum);
}

solve([-5,11,3,0,2]);