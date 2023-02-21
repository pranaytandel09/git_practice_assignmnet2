let number=15;
let count=0;
for(let i=2; i<=Math.floor(number/2); i++){
if(number%i==0){
count++;
}
}
if(count==0){

console.log("Yes, it is a prime number")
}
else{
console.log("it is not a prime number")
}

