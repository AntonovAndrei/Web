function solve(arr){
    let sum1 = 0;
    let sum2 = 0;
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum1 += arr[j][i];            
        }

        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < arr[i].length; k++) {
                sum2 += arr[j][k];
            }

            if(sum1 !== sum2){
                result = false;
                break;
            }

            sum2 = 0;
        }
        if(result === false){
            break;
        }
        sum1 = 0;
    }

    console.log(result);
}

solve([[1,0,0],[0,0,1],[0,1,0]]);