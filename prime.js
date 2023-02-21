let number=15;
let count=0;
for(let i=1; i<=number; i++){
if(number%i==0){
count++;
}
}
if(count==1){
console.log("Yes, it is a prime number")
}
else{
console.log("it is not a prime number")
}
