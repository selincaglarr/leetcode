//https://leetcode.com/problems/arranging-coins/submissions/

let sum=[]
var arrangeCoins = function(n) {
    if(n==0)return 0
   for (let i =1;i<=n;i++){
      sum.push((i*(i+1))/2)
}
  for (let i =1;i<=n;i++){
    if(sum[i-1]<=n && sum[i]>=n)
        if(sum[i]==n)return i+1
        else return i
       
    }
};
