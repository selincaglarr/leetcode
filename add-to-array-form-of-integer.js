//https://leetcode.com/problems/add-to-array-form-of-integer/

var addToArrayForm = function(A, K) {
    let sayi=Number(A.join("")) + K
    return sayi.toString().split("").map(x=>Number(x))
 };
