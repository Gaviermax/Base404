let city = "Cagayan de Oro";
const BIRTHYEAR = 2002;
const COUNTRY = "Philippines"

city = "Pagadian City";


console.log(`I live in ${city}, ${COUNTRY}`);


let sentence = "I was born in " + BIRTHYEAR;

console.log(`I currently reside in ${city}, which is in ${COUNTRY}`)

let a = 7;
let b = 3;

console.log(`The sum is ${a+b}`);
console.log(`The difference is ${a-b}`);
console.log(`The product is ${a*b}`);
console.log(`The quotient is ${a/b}`);

let century =200;

(BIRTHYEAR < 200) ? century = "20th Century" : century ="21st Century" ;

console.log(century);



if(century === "21st Century"){
    console.log(century);
}else if(century === "20th Century"){
    console.log(century);

}

for(i = 1; i<5; i++) {
    console.log(i);
}

let i = 10;
while (i != 0){
    console.log(i);
    i--;
}

let iteration = 1;

do{
    console.log("This is iteration number")
}while(iteration <= 3){
    console.log(`This is iteration number ${iteration}`)
}   

{
    let blockVar;
}
blockVar = 0;
;
console.log(blockVar)
