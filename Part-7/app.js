const marks={
    eng:92,
    math:82,
    phy:90,
    getAvg(){
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
};

let square = (n) =>{
    console.log(n*n);
};

let id = setInterval(() =>{
    console.log("Hello World");
}, 2000);
setTimeout(() =>{
    clearInterval(id);
},10000);