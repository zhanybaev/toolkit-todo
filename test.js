let arr = [2,5,6,0,89];
let res = 0;
arr.reduce((prev, cur)=>{
    if(cur===0){
        res=prev
    }else{
        return prev+cur
    }
}, 0)
console.log(res);