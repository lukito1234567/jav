let Numbers = [1, 7, 5, 3, 2, 6, 10, 16, 26, 22, 8, 9];

let sum = 0;

Numbers.map((num) => {
    sum = sum + num;
});

console.log(sum);

const filt = Numbers.filter (num => num % 2 === 0 );
.
console.log(filt);

let numArray = [7, 12, 23, 15, 5];

console.log(numArray);

let wordArray = ['orange' , 'cherry', 'pineapple' , 'apple'];

let ulElement = document.createElement('ul');


wordArray.forEach ((word) =>{
    let liElement = document.createElement('li');
    liElement.textContent = word;
    ulElement.appendChild(liElement);
});

console.log(ulElement);











