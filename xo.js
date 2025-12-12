const boardEl = document.getElementById("board");
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");

const turnPlayer = document.getElementById("turnPlayer");
const themeToggle = document.getElementById("themeToggle");

const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");
const scoreDraw = document.getElementById("scoreDraw");

const restartBtn = document.getElementById("restartBtn");
const overlay = document.getElementById("overlay");

let board = ["","","","","","","","",""];
let current = "X";
let vsAI = false;

const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

document.getElementById("pvpBtn").onclick = () => start(false);
document.getElementById("aiBtn").onclick = () => start(true);

function start(ai){
    vsAI = ai;
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    resetBoard();
}

function resetBoard(){
    board = ["","","","","","","","",""];
    current = "X";
    turnPlayer.textContent = current;
    boardEl.innerHTML = "";
    for(let i=0;i<9;i++){
        const c = document.createElement("div");
        c.className = "cell";
        c.onclick = () => clickCell(i);
        boardEl.appendChild(c);
    }
}

function clickCell(i){
    if(board[i] !== "") return;

    board[i] = current;
    updateBoard();

    if(checkEnd()) return;

    current = current === "X" ? "O" : "X";
    turnPlayer.textContent = current;

    if(vsAI && current === "O"){
        aiMove();
    }
}

function aiMove(){
    let empty = board.map((v,i)=>v===""?i:null).filter(v=>v!==null);
    let choice = empty[Math.floor(Math.random()*empty.length)];
    
    setTimeout(()=>{
        board[choice] = "O";
        updateBoard();
        if(checkEnd()) return;

        current = "X";
        turnPlayer.textContent = "X";
    }, 400);
}

function updateBoard(){
    document.querySelectorAll(".cell").forEach((c,i)=>{
        c.textContent = board[i];
        c.classList.remove("x","o");
        if(board[i]==="X") c.classList.add("x");
        if(board[i]==="O") c.classList.add("o");
    });
}

function showOverlay(color){
    overlay.className = "overlay show " + color;
    setTimeout(()=>{ overlay.className = "overlay"; },400);
}

function checkEnd(){
    for(const w of wins){
        const [a,b,c] = w;
        if(board[a] && board[a]===board[b] && board[b]===board[c]){
            if(board[a]==="X") scoreX.textContent = Number(scoreX.textContent)+1;
            else scoreO.textContent = Number(scoreO.textContent)+1;

            document.querySelectorAll(".cell").forEach((cell,i)=>{
                if(w.includes(i)) cell.classList.add("win");
            });

            showOverlay("green"); // flash green for win
            setTimeout(resetBoard,1000);
            return true;
        }
    }

    if(board.every(v=>v!=="")){
        scoreDraw.textContent = Number(scoreDraw.textContent)+1;
        showOverlay("red"); // flash red for draw
        setTimeout(resetBoard,1000);
        return true;
    }

    return false;
}

restartBtn.onclick = resetBoard;

themeToggle.onclick = () => {
    document.body.classList.toggle("light");
};
const homeBtn = document.getElementById("homeBtn");

homeBtn.onclick = () => {
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
};
