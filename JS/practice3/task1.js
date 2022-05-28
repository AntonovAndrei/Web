function solve(a, b, c){
    let min = 0;
    a <= b ? min = a : min = b;
    min <= c ? min = min : min = c;
    console.log(min);
}

solve(600,342,123);