let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i = 0;i<arr.length;i++){
    if(arr[i] == num){
        console.log(arr.splice(i,1));
    }
}
console.log(arr);