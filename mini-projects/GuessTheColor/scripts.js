const colorContainer = document.getElementById("color-code");
const optionContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score");
let randomColor = null;
let score = 0;
function generateRandomNumBetween(min, max){
    return min + Math.floor(Math.random() * (max - min + 1));
}
function generateRandomColor(){
    const red = generateRandomNumBetween(0,255);
    const green = generateRandomNumBetween(0,255);
    const blue = generateRandomNumBetween(0,255);

    return `rgb(${red}, ${green}, ${blue})`;
}
function incrementScore(){
    score += 1;
    scoreContainer.innerText=score;
}
function divClick(el){
    let selectedColor = el.target.style.backgroundColor;
    console.log(selectedColor + randomColor);
    if(selectedColor == randomColor){
        incrementScore();

    }
    else{
        score=0;
    }
    window.localStorage.setItem("score",score);
    optionContainer.innerHTML='';
    startGame();
}
function startGame(){
    score = Number(window.localStorage.getItem("score")) ?? 0 ;
    scoreContainer.innerText = score;
    randomColor = generateRandomColor();
    const ansIndex = generateRandomNumBetween(0,5);
    colorContainer.innerText = randomColor;
    for(let i=0; i<6; i++){
        const div = document.createElement("div");
        div.addEventListener("click",divClick);
        div.style.backgroundColor = (i===ansIndex ? randomColor :generateRandomColor());
        optionContainer.appendChild(div);
    }
}

window.addEventListener("load",() => startGame());

