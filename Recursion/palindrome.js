// const palindrome=(num)=>{
//     let rev=0
//     let n=num
//     if(num<0){
//         return false
//     }
//     while(num>0){
//         rev=rev*10+num%10;
//         num=Math.floor(num/10)
//     }
//     return n===rev
// }
function pali(num , rev=0 ,temp=num){
    if(temp == 0) return num == rev
    rev = rev*10 + (temp%10)
    return pali(num,rev,Math.floor(temp/10))
}
console.log(pali(1211));