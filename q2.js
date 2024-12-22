//fibancoii series


//0,1,1,2,3,5

var fibancoii=function(val){
    const arr=[0,1];

    for (let i=2;i<=val;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr;
}

var a=fibancoii(5);
console.log(a);