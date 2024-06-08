const gameBoard = (() => {
    let board = [[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]];
    
    return board;
})();

const gameController = () => {
    let turn = 0;
    let currentPlayer = "player one"
    let winner = "";
    let isOver = true;

    const switchPlayers = () => {
        if (currentPlayer === "player one") {
         currentPlayer = "player two";   
        } else if (currentPlayer === "player two") {
         currentPlayer = "player one";
        }
     };

      const playRound = (cell) => {
        if(cell === "cell-1" & currentPlayer === "player one" & gameBoard[0][0] === 1) {
            gameBoard[0][0] = "X"
            switchPlayers()
            turn++
        } else if(cell === "cell-1" & currentPlayer === "player two" & gameBoard[0][0] === 1) {
            gameBoard[0][0] = "O"
            switchPlayers()
            turn++
        }

        else if(cell === "cell-2" & currentPlayer === "player one" & gameBoard[0][1] === 2) {
            gameBoard[0][1] = "X"
            switchPlayers()
            turn++
        } else if(cell === "cell-2" & currentPlayer === "player two" & gameBoard[0][1] === 2) {
            gameBoard[0][1] = "O"
            switchPlayers()
            turn++
        }   

        else if(cell === "cell-3" & currentPlayer === "player one" & gameBoard[0][2] === 3) {
            gameBoard[0][2] = "X"
            printBoard()
            switchPlayers()
            turn++
        } else if(cell === "cell-3" & currentPlayer === "player two" & gameBoard[0][2] === 3) {
            gameBoard[0][2] = "O"
            switchPlayers()
            turn++
        }   

        else if(cell === "cell-4" & currentPlayer === "player one" & gameBoard[1][0] === 4) {
            gameBoard[1][0] = "X"
            switchPlayers()
            turn++
        } else if(cell === "cell-4" & currentPlayer === "player two" & gameBoard[1][0] === 4) {
            gameBoard[1][0] = "O"
            switchPlayers()
            turn++
        }    

        else if(cell === "cell-5" & currentPlayer === "player one" & gameBoard[1][1] === 5) {
            gameBoard[1][1] = "X"
            switchPlayers()
            turn++
        } else if(cell === "cell-5" & currentPlayer === "player two" & gameBoard[1][1] === 5) {
            gameBoard[1][1] = "O"
            switchPlayers()
            turn++
        }

        else if(cell === "cell-6" & currentPlayer === "player one" & gameBoard[1][2] === 6) {
            gameBoard[1][2] = "X"
            switchPlayers()
            turn++
        } else if(cell === "cell-6" & currentPlayer === "player two" & gameBoard[1][2] === 6) {
            gameBoard[1][2] = "O"
            switchPlayers()
            turn++
        }

        else if(cell === "cell-7" & currentPlayer === "player one" & gameBoard[2][0] === 7) {
            gameBoard[2][0] = "X"
            switchPlayers()
            turn++
        } else if(cell === "cell-7" & currentPlayer === "player two" & gameBoard[2][0] === 7) {
            gameBoard[2][0] = "O"
            switchPlayers()
            turn++
        }

        else if(cell === "cell-8" & currentPlayer === "player one" & gameBoard[2][1] === 8) {
            gameBoard[2][1] = "X"
            switchPlayers()
            turn++
        } else if(cell === "cell-8" & currentPlayer === "player two" & gameBoard[2][1] === 8) {
            gameBoard[2][1] = "O"
            switchPlayers()
            turn++
        }

        else if(cell === "cell-9" & currentPlayer === "player one" & gameBoard[2][2] === 9) {
            gameBoard[2][2] = "X"
            switchPlayers()
            turn++
        } else if(cell === "cell-9" & currentPlayer === "player two" & gameBoard[2][2] === 9) {
            gameBoard[2][2] = "O"
            switchPlayers()
            turn++
        } 
        
        else if(cell === null) {
            return;
        }

        checkWinner()
    } 

    const checkWinner = () => {
        if(gameBoard[0][0] === "X" & gameBoard[0][1] === "X" & gameBoard[0][2] === "X") {
            isOver = true
            winner = "Player one Won!!"
        } else if(gameBoard[1][0] === "X" & gameBoard[1][1] === "X" & gameBoard[1][2] === "X") {;
            isOver = true
            winner = "Player one Won!!"
        } else if(gameBoard[2][0] === "X" & gameBoard[2][1] === "X" & gameBoard[2][2] === "X") {
            isOver = true
            winner = "Player one Won!!"
    
        } else if(gameBoard[0][0] === "X" & gameBoard[1][0] === "X" & gameBoard[2][0] === "X") {
            isOver = true
            winner = "Player one Won!!"
        } else if(gameBoard[0][1] === "X" & gameBoard[1][1] === "X" & gameBoard[2][1] === "X") {
            isOver = true
            winner = "Player one Won!!"
        } else if(gameBoard[0][2] === "X" & gameBoard[1][2] === "X" & gameBoard[2][2] === "X") {
            isOver = true
            winner = "Player one Won!!"
        }
        else if(gameBoard[0][0] === "X" & gameBoard[1][1] === "X" & gameBoard[2][2] === "X") {
            isOver = true
            winner = "Player one Won!!"
        } else if(gameBoard[0][2] === "X" & gameBoard[1][1] === "X" & gameBoard[2][0] === "X") {
            isOver = true
            winner = "Player one Won!!"
        }
    
        if(gameBoard[0][0] === "O" & gameBoard[0][1] === "O" & gameBoard[0][2] === "O") {
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[1][0] === "O" & gameBoard[1][1] === "O" & gameBoard[1][2] === "O") {
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[2][0] === "O" & gameBoard[2][1] === "O" & gameBoard[2][2] === "O") {
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[0][0] === "O" & gameBoard[1][0] === "O" & gameBoard[2][0] === "O") {
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[0][1] === "O" & gameBoard[1][1] === "O" & gameBoard[2][1] === "O") {
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[0][2] === "O" & gameBoard[1][2] === "O" & gameBoard[2][2] === "O") {
            isOver = true
            winner = "Player two Won!!"
        }  
        else if(gameBoard[0][0] === "O" & gameBoard[1][1] === "O" & gameBoard[2][2] === "O") {
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[0][2] === "O" & gameBoard[1][1] === "O" & gameBoard[2][0] === "O") {
            isOver = true
            winner = "Player two Won!!"
        } 
    } 

    const getIsOver = (event) => {
        if (event === "start") {
            isOver = false
        } else if (event === "reset") {
            isOver = true
        } else {
            return isOver;
        }
    };
    
    const getWinner = (event) => {
        if (event === "reset") {
            winner = ""
        } else {
            return winner;
        }
    }
    
    const getCurrentPlayer = (event) => {
        if (event === "reset") {
            currentPlayer = "player one"
        } else {
            return currentPlayer;
        }    
    }

    const getTurn = (event) => {
        if (event === "reset") {
            turn = 0
        } else {
            return turn;
        }
    }
    return {getIsOver, getWinner, playRound, getCurrentPlayer, getTurn}
};

const screenController = () => {
    const screenBoard = document.querySelector(".board");
    const cells = document.querySelector(".board").children;
    const showCurrentTurn = document.querySelector(".current-turn");
    const resetBtn = document.querySelector(".reset");
    const startBtn = document.querySelector(".start");
    const playerOneName = document.querySelector(".player-one");
    const playerTwoName = document.querySelector(".player-two")
    const form = document.getElementById("form")
    const game = gameController();
    screenBoard.addEventListener("click", handler)
    resetBtn.addEventListener("click", resetGame)
    startBtn.addEventListener("click", startGame)

    function startGame() {
        game.getIsOver("start")
        form.style.display = "none"
        showCurrentTurn.style.display = "block"
        showCurrentTurn.innerHTML = playerOneName.value === "" ? "Player one's turn" : `${playerOneName.value}'s turn`
    }

    function handler(e) {
        if (game.getIsOver()) {
            return;
        } else if (e.target.textContent !== "X" & e.target.textContent !== "O" & game.getCurrentPlayer() === "player one") {
            e.target.textContent = "X"
            e.target.style.color = "Red"
            showCurrentTurn.textContent = playerTwoName.value === "" ? "Player two's turn" : `${playerTwoName.value}'s turn`;
            game.playRound(e.target.id);
        } else if (e.target.textContent !== "X" & e.target.textContent !== "O" & game.getCurrentPlayer() === "player two") {
            e.target.textContent = "O"
            e.target.style.color = "Blue"
            showCurrentTurn.textContent = playerOneName.value === "" ? "Player one's turn" : `${playerOneName.value}'s turn`
            game.playRound(e.target.id);
        }
        displayWinner()
    }

    displayWinner = () => {
        if(game.getWinner() === "Player one Won!!") {
            showCurrentTurn.textContent = playerOneName.value === "" ? "Player one Won!!" : `${playerOneName.value} Won!!`;
            showCurrentTurn.style.color = "red"
        } else if (game.getWinner() === "Player two Won!!") {
            showCurrentTurn.textContent = playerTwoName.value === "" ? "Player Two Won!!" : `${playerTwoName.value} Won!!`;
            showCurrentTurn.style.color = "blue"
        } else if (game.getTurn() === 9) {
            showCurrentTurn.textContent = "It's a Tie";
            showCurrentTurn.style.color = "green"
        } else {
            return;
        }
    }

    function resetGame() {
        showCurrentTurn.textContent = ""
        form.style.display = "flex"
        showCurrentTurn.style.display = "none"
        showCurrentTurn.style.color = "white"
        game.getIsOver("reset")
        game.getTurn("reset")
        game.getWinner("reset")
        game.getCurrentPlayer("reset")
        gameBoard.splice(-3);
        gameBoard.push([1, 2, 3], [4, 5, 6], [7, 8, 9]);
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = "";
        }
    }
}

screenController()