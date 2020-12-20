let answerOne;
let answerTwo;
let answerThree;

let button = document.getElementById("btn");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let oneYes = document.getElementById("q1Yes");
let twoYes = document.getElementById("q2Yes");
let threeYes = document.getElementById("q3Yes");
let firstQuestion = document.getElementById("firstQ");
let secondQuestion = document.getElementById("secondQ");
let thirdQuestion = document.getElementById("thirdQ");
let brachys = document.getElementById("brachys");
let goodEnding = document.getElementById("good-ending");
let badEnding = document.getElementById("bad-ending");

button.addEventListener("click", ()=> {
    if(oneYes.checked){
        alert("You could be a brachy!")
        answerOne = true;
    }
    firstQuestion.style.display = "none";
    secondQuestion.style.display = "block";
}, false);

button2.addEventListener("click", ()=> {
    if(twoYes.checked){
        alert("Brachy senses...tingling.")
        answerTwo = true;
    }
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "block";
}, false);

button3.addEventListener("click", ()=> {
    if(threeYes.checked){
        answerThree = true;
    }
    if(answerOne && answerTwo && answerThree){
        goodEnding.style.display = "block"
    } else {
        badEnding.style.display = "block"
    }
    brachys.style.display = "block";
}, false);