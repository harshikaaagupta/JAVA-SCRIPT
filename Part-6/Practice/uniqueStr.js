let str = "abcdabcdefjnvnj";
function getUnique(str){
    let ans = "";
    for(let i = 0 ;i<str.length;i++){
        let curr = str[i];
        if(ans.indexOf(curr) == -1){
            ans = ans+curr;
        }
    }
    return ans;
}
console.log(getUnique(str));