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