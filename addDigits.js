
//https://leetcode.com/problems/add-digits/
const addDigits = function(num) {
let sayiyicevir =num=>[ ...num.toString() ].map( s => Number(s) ).reduce((x,y)=>x+y)
    return sayiyicevir(sayiyicevir(num))

};

const addDigits = function(num) {
const toArray= num=>{
let newnum= num.toString().split("").map(x=>Number(x)).reduce((x,y)=>x+y)
    if(newnum>9){
        toArray(newnum)
    }
    else {
        
        return console.log(newnum)
    }
}
 toArray(num)
};


var addDigits = function(num) {
  return num < 10 ? num : num % 9 === 0 ? 9 : num % 9;  
};
