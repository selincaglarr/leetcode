//https://leetcode.com/problems/assign-cookies/

var findContentChildren = function(g, s) {
    if(s==[])
        return console.log(0) 
    else if(Math.max(...g)<=Math.max(...s) && s!=[])
        return console.log(Math.max(...g))
    else if(Math.max(...g)>=Math.max(...s)  && s!=[])
        return console.log(Math.max(...s))
    
};
findContentChildren([1,2,3,4],[98])
