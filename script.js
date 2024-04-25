let  myNumbers = [1, 7, 5, 3, 2, 6, 10, 16, 26, 22, 8, 9];
let sum = 0;
myNumbers.forEach((item)=>{
    sum +=item;
})
console.log(sum);


const filetered = myNumbers.filter(num => num > 2);
console.log(filetered);
 


let newArray = [7, 12, "orange", "cherry", 23, 15, "pineapple", "apple", 5];
let stringArray = [];
let numArray = [];

newArray.forEach((item) => {
if (typeof item === "string") {
stringArray.push(item);
} else {
numArray.push(item);
}
});

console.log(stringArray); 
console.log(numArray); 



let ulElement = document.createElement("ul");
stringArray.forEach((item)=>{
    let liElement = document.createElement("li");
    liElement.innerHTML = item;
    ulElement.appendChild(liElement);
});
document.body.appendChild(ulElement);
