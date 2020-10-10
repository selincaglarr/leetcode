
//https://leetcode.com/problems/add-digits/
const addDigits = function(num) {
let sayiyicevir =num=>[ ...num.toString() ].map( s => Number(s) ).reduce((x,y)=>x+y)
    return sayiyicevir(sayiyicevir(num))

};


const addDigits = function(num) {
let ayir= num=>{
let yenisayi= num.toString().split("").map(x=>Number(x)).reduce((x,y)=>x+y)
        if(yenisayi>9){
            ayir(yenisayi)
        }
         else {
             return console.log(yenisayi)
        }
}
    ayir(num)
};
addDigits(39)
