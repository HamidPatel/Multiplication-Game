const num1 = Math.ceil(Math.random()*100); 
 console.log( Math.ceil(Math.random()*100)); 
const num2 = Math.ceil(Math.random()*100);
let questionE1 = document.getElementById("questions") ;
questionE1.innerText = `What is ${num1} Multiply by ${num2} ?`;
const scoreE1 = document.getElementById("score")
let score = JSON.parse(localStorage.getItem("score"));
 if(!score){
    score = 0;
 }
 scoreE1.innerText = `score: ${score}`

const formE1 = document.getElementById("form")
const inputE1 = document.getElementById("answer")
const correctAns = num1 * num2;
formE1.addEventListener("submit", ()=>{
    const userAns =inputE1.value
    if(userAns == correctAns){
        score++;
        updateLocalstorage()
    }else{
        score--;
        updateLocalstorage()
    }
});
function updateLocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
