
//https://leetcode.com/problems/add-digits/
const addDigits = function(num) {
let sayiyicevir =num=>[ ...num.toString() ].map( s => Number(s) ).reduce((x,y)=>x+y)
    return sayiyicevir(sayiyicevir(num))

};
