//1. deposit some money
//2. determine number of lines to bet on
//3. collect a bet amount
//4. spin a slot machine 
//5. check if any user won
//6. give user their winnings
//7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    A:2,
    B:4,
    C:6,
    D:8
}
const SYMBOL_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2
}

function deposit(){
    while(true){
    let temp = prompt("Enter Deposit amount: ");
    const depositAmt = parseFloat(temp);
    if(isNaN(depositAmt) || depositAmt<=0){
        console.log("Invalid Deposit Amount entered -- ");
    }
    else{
        return depositAmt;
    }
}
}

function noOfLineToBet(){
    while(true){
    const lineCount = Number(prompt("Enter Number of lines to bet on (1-3) : "));
    if(isNaN(lineCount) || lineCount<=0 || lineCount>=4){
        console.log("Invalid Line Count -- ");
    }
    else{
        return lineCount;
    }}
}


function Bet(deposit, lines){
    while(true){
    const betAmt = Number(prompt("Enter bet amount per line: "));
    
        if(isNaN(deposit) || betAmt*lines > deposit){
            console.log("Invalid bet Amount -- ");
        }
        else{
            return betAmt;
        }
    }
}

function spin(){
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOL_COUNT)){
        for(let i=0; i<count; i++){
            symbols.push(symbol);
        }
    }
    const reels =[[],[],[]];
    for(let i=0;i<COLS ;i++){
        const reelSymbols = [...symbols];
        for(let j=0;j<ROWS;j++){
            const randomIndex = Math.floor(Math.random()*reelSymbols.length);
            reels[i].push(reelSymbols[randomIndex]);
            reelSymbols.splice(randomIndex,1);
        }
    }
    return reels;
}

function transpose(reels){
    const rows =[];
    for(let i=0;i<ROWS;i++){
        rows.push([]);
        for(let j=0;j<COLS;j++){
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
}

function printRows(rows){
    for(let row of rows){
        let rowString ="";
        for(const [i, symbol] of row.entries()){
            rowString+=symbol
            if(i!=row.lenght-1){
                rowString+=" | ";
            }
        }
        console.log(rowString);
    }
}

function countWinnings(transposereel,lines,bet){
    let winnings =0;
    for(let i=0;i<lines;i++){
        const  row = transposereel[i];
        let flag  = true;
        for(const symbol of row){
            if(symbol != row[0]){
                flag = false;
                break;
            }
        }

        if(flag){
            winnings += bet * SYMBOL_VALUES[row[0]];
        }
    }
    return winnings;
}

function game(){
    let depositAmt = deposit();
    while(true){
        console.log("You have a balance of $",depositAmt);
        const noOfLine = noOfLineToBet();
        const bet = Bet(depositAmt,noOfLine);
        const reels = spin();
        const transposeReel = transpose(reels);
        printRows(transposeReel);
        const winnings = countWinnings(transposeReel,noOfLine,bet);
        console.log("You won $",winnings);
        if(depositAmt<=0){
            console.log("You ran out of Money!! ")
        }

        const playAgain = prompt("wnat to play again (Y/N) : ");
        if(playAgain != "Y") break; 
    }
}
game();