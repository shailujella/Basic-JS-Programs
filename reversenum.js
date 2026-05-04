let num = 1234;
let rev = 0;
for(;num>0;num=Math.floor(num/10)){
    let digit =num%10;
    rev=rev*10+digit;
}
console.log(rev)