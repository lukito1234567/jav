let carbrand = ["ford", "Audi", "BMW", "Toyota", "Honda", "ferrari"];
let carArray = car.length;
let num = document.querySelector(".num");
num.innerHTML = carArray;

let calc = 0;
let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let button3 = document.querySelector(".btn3");

button1.addEventListener("click", () => {
    if (calc >= 0 && calc < 10) {
        calc++;
        num.innerHTML = calc;
    }
});

button2.addEventListener("click", () => {
    calc = 0;
    num.innerHTML = calc;
});

button3.addEventListener("click", () => {
    if (calc > 0 && calc <= 10) {
        calc--;
        num.innerHTML = calc;
    }
});