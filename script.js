for (let i = 0; i < 12; i++) {
 console.log(i);
}
for(let sum = 1; sum <= 5; sum++){
    console.log(sum);
}
let test = 1;
do{
    console.log(test);
    test++;
}while(test <= 5);

let num = 0;
while(num < 3){
    console.log(`Number:${num}`);
    num++;
} 
for(let i =1;i<=5;i++){
    if(i==3){
        continue
    }console.log(i); 
}
function mytest(test){
    if(test>=18){
        return true;
    }
    }
    const celsius = (fahrenheit) =>{
        
        return (fahrenheit - 32) * 5/9;
    }
    console.log(celsius(69))
    
 