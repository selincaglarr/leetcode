//https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    if(x<0)
        return false
    else
       return  x==x.toString().split("").reverse().join("") ? true  :false
};
