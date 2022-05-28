function shop(reserve, order){
    reserveArr = new Array();
    for(let i = 0; i < reserve.length; i = i + 2){
        let res = {product: reserve[i], count: Number(reserve[i + 1])};
        reserveArr.push(res);
    }

    orderArr = new Array();
    for(let i = 0; i < order.length; i = i + 2){
        let ord = {product: order[i], count: Number(order[i + 1])};
        orderArr.push(ord);
    }

    for(let i = 0; i < reserveArr.length; i++){
        for(let j = 0; j < orderArr.length; j++){
            if(reserveArr[i].product === orderArr[j].product){
                reserveArr[i].count += orderArr[j].count;
                orderArr.splice(j, 1);
            }
        }
    }

    reserveArr = reserveArr.concat(orderArr);

    for(let i = 0; i < reserveArr.length; i++){
        console.log(reserveArr[i].product + " -> " + reserveArr[i].count);
    }
}

shop(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
        ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);