//https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
var average = function(salary) {
    let sortt=salary.sort((a,b)=>a-b)
    let sli= sortt.slice(1,sortt.length-1)
    let sum=sli.reduce((x,y)=>(x+y))
    return sum/sli.length
};
