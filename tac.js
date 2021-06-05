// Globally keep track of current player 
let currentPlayer = "null";
document.getElementById("currentPlayer").innerHTML = `<img src="./assets/${currentPlayer}.jpg" width="100%" height="100%" />`;
function switchPlayer(){
    if(currentPlayer === "null"){
        currentPlayer = "default";
    }else if(currentPlayer === "default"){
        currentPlayer = "null";
    }else throw new Error(`Unknown player type "${currentPlayer}"`);
    document.getElementById("currentPlayer").innerHTML = `<img src="./assets/${currentPlayer}.jpg" width="100%" height="100%" />`;
    return;
}

// Iterate over all 9 boxes and add them to object
let boxes = {};
for(i = 0; i < 9; i++){
    let id = i + 1;
    boxes[`b${i + 1}`] = {
        element: document.getElementById(i + 1),
        takenBy: false
    };
}

// Individually handle click event on each box
for(i = 0; i < 9; i++){
    let id = `b${i + 1}`;
    let box = boxes[id];
    box.element.addEventListener("click", (e) =>{
        if(box.takenBy === false){
            box.takenBy = currentPlayer;
            box.element.innerHTML = `<img src="./assets/${currentPlayer}.jpg" width="100%" height="100%" />`
            switchPlayer(); 
        }
    });
}
