let arrayAvg = (arr) =>{
    let total =0;
    for(num in arr){
        total +=arr[num];
    }
    return total/arr.length;
};
let arr = [1,2,3,4,5,6];
console.log(arrayAvg(arr));