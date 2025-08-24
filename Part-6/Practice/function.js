let arr = [2,4,3,2,5,4,,6,7];
let num = 4;

function getElement(arr,num){
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElement(arr,num);