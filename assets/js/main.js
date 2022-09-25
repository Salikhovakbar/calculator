const input = document.querySelector("input");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");
const number0 = document.getElementById("number0");
const quarter = document.getElementById("quarter");
const times = document.getElementById("times");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const delete1 = document.getElementById("delete");
const divide = document.getElementById("divided");
const equale = document.getElementById("equale");
number1.addEventListener("click", () => {
    input.value +="1"
})
number2.addEventListener("click", () => {
    input.value +="2"
})
number3.addEventListener("click", () => {
    input.value +="3"
})
number4.addEventListener("click", () => {
    input.value +="4"
})
number5.addEventListener("click", () => {
    input.value +="5"
})
number6.addEventListener("click", () => {
    input.value +="6"
})
number7.addEventListener("click", () => {
    input.value +="7"
})
number8.addEventListener("click", () => {
    input.value +="8"
})
number9.addEventListener("click", () => {
    input.value +="9"
})
number0.addEventListener("click", () => {
    input.value +="0"
})
quarter.addEventListener("click", () => {
    input.value += input.value**2

})
plus.addEventListener("click", () => {
    input.value +="+"
})
times.addEventListener("click", () => {
    input.value +="*"
})
minus.addEventListener("click", () => {
    input.value +="-"
})
delete1.addEventListener("click", () => {
    input.value =""
})
divide.addEventListener("click", () => {
    input.value +="/"
})
equale.addEventListener("click", () => {
    input.value = eval(input.value)
})
