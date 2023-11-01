/*

//--------------zaklady-----------------

function doSomething() {
     console.log("Something")
}
//možnost to zapsat takhle       
//              parametr
function funkce(vypisText){
    console.log(vypisText);
}
// jde zapsat 2 způsoby bud function nebo const a arrow funkce
const dooSomething = () =>{
    console.log("Something");
};
//zavolám tu funkci
doSomething();

dooSomething();
//       argument
funkce("ahojky");





//--------------test-----------------

function kulin(item){
    console.log("Prinesl jsem " + item);
}
//             parametry
const kuulin = (item1, item2) =>{
    console.log("Prinesl jsem " + item1 + " a " + item2);
}
kulin("bryle");
kulin("pocitac");
// muzeme zavolat i více vecí
kuulin("michalovo bačkory", "myš");
kuulin("jidlo", "piti");










//--------------test_2-----------------
function pecka(numberOne, numberTwo) {
    console.log(numberOne + numberTwo);
}
//muzeme delat i priklady a ono to vypocita
pecka(1, 2);


const helloName = (a) => {
    console.log("hello", a)
}
helloName("Pavel");






//--------------pokrocilejsi-----------------

function sum(a, b, c, d, e, f) {
    console.log(a + b + c + d + e + f);
}
sum(1, 2, 3, 4, 5, 6);

const greetings = (name1, name2, name3, name4) => {
    //console.log(" Hello " + name1 + " Hello " + name2 + " Hello " + name3 + " Hello " + name4 );
    console.log(`Hello ${name1}, Hello ${name2}, Hello ${name3}, Hello ${name4},`);
}




let firstNumber = 5;
let secondNumber = 6;
let thirdNumber = 7;
const sum = (a, b) => {
    return a+b;

}
let result = sum(firstNumber, secondNumber);
console.log(result);



function sumA(a, b){
    return a+b;

}
let resultA = sumA(firstNumber, secondNumber);
console.log(resultA)




const sume = (a, b) =>  a+b;


let resultE = sume(firstNumber, secondNumber);
console.log(resultE);










// -------vety---------
let person = "Radek";
let age = 43;

function getSentence(a, b) {
    return `Tvoje jmeno je ${a} a je ti ${b} let`
}

const createSentence = (a, b) => `Tvoje jmeno je ${a} a je ti ${b} let`
console.log(createSentence(person, age))
*/



const startButton = document.getElementById("start");
const point = document.getElementById("point");
const timeInfo = document.getElementById("timeInfo");
let gameInterval;
let timeStart;




startButton.onclick = () => {
    hideElement(startButton);
    startGameInterval(point);
    setPointclick(point);
    timeStart = performance.now();
}

const movePoint = (element, x, y) => {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
}

const hideElement = (element) => {
     element.style.display = "none"
    }

    const startGameInterval = (element) => {
        clearInterval(gameInterval);
        gameInterval = setInterval(() => {
            setSize(element, getRandomNumber(50,80));
            movePoint(element, getRandomNumber(50, window.innerWidth - parseInt(element.style.width)), getRandomNumber(50, window.innerHeight - parseInt(element.style.height)));
            
        }, 550);

    };


const getRandomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;




const setPointclick = (element) => {
   element.onclick = () => {
    element.innerText ++;
    setSize(element, getRandomNumber(40,80));
    movePoint(element, getRandomNumber(50, window.innerWidth - parseInt(element.style.width)), getRandomNumber(50, window.innerHeight - parseInt(element.style.height)));
    let timeEnd = performance.now();
    let result = timeEnd - timeStart;
    timeInfo.innerText = `Time: ${result}ms`;
    timeStart = performance.now();
   }
}

const setSize = (element, size) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;

}