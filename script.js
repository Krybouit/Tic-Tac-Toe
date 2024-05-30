const gameBoard = (() => {
    let board = [[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]];
    
    return board;
})();

const printBoard = () => {
    for (let element of gameBoard) {
        const rowString = element.join(" ")
        console.log(rowString);
      }
}

const gameController = () => {
    let turn = 0;
    let currentPlayer = "player one"
    let winner = "";
    let isOver = false;

    const switchPlayers = () => {
        if (currentPlayer === "player one") {
         currentPlayer = "player two";
         console.log("Player two's turn (O)")
    
     } else if (currentPlayer === "player two") {
         currentPlayer = "player one";
         console.log("Player one's turn (X)")
        }
     };


      const playRound = (cell) => {
        if(cell === "cell-1" & currentPlayer === "player one" & gameBoard[0][0] === 1) {
            gameBoard[0][0] = "X"
            printBoard()
            switchPlayers()
            turn++
        } else if(cell === "cell-1" & currentPlayer === "player two" & gameBoard[0][0] === 1) {
            gameBoard[0][0] = "O"
            printBoard()
            switchPlayers()
            turn++
        } 
        
        else if(cell === "cell-2" & currentPlayer === "player one" & gameBoard[0][1] === 2) {
            gameBoard[0][1] = "X"
            printBoard()
            switchPlayers()
            turn++
        } else if(cell === "cell-2" & currentPlayer === "player two" & gameBoard[0][1] === 2) {
            gameBoard[0][1] = "O"
            printBoard()
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
            printBoard()
            switchPlayers()
            turn++
        } 
        
        else if(cell === "cell-4" & currentPlayer === "player one" & gameBoard[1][0] === 4) {
            gameBoard[1][0] = "X"
            printBoard()
            switchPlayers()
            turn++
        } else if(cell === "cell-4" & currentPlayer === "player two" & gameBoard[1][0] === 4) {
            gameBoard[1][0] = "O"
            printBoard()
            switchPlayers()
            turn++
        } 
        
        else if(cell === "cell-5" & currentPlayer === "player one" & gameBoard[1][1] === 5) {
            gameBoard[1][1] = "X"
            printBoard()
            switchPlayers()
            turn++
        } else if(cell === "cell-5" & currentPlayer === "player two" & gameBoard[1][1] === 5) {
            gameBoard[1][1] = "O"
            printBoard()
            switchPlayers()
            turn++
        }

        else if(cell === "cell-6" & currentPlayer === "player one" & gameBoard[1][2] === 6) {
            gameBoard[1][2] = "X"
            printBoard()
            switchPlayers()
            turn++
        } else if(cell === "cell-6" & currentPlayer === "player two" & gameBoard[1][2] === 6) {
            gameBoard[1][2] = "O"
            printBoard()
            switchPlayers()
            turn++
        }

        else if(cell === "cell-7" & currentPlayer === "player one" & gameBoard[2][0] === 7) {
            gameBoard[2][0] = "X"
            printBoard()
            switchPlayers()
            turn++
        } else if(cell === "cell-7" & currentPlayer === "player two" & gameBoard[2][0] === 7) {
            gameBoard[2][0] = "O"
            printBoard()
            switchPlayers()
            turn++
        }

        else if(cell === "cell-8" & currentPlayer === "player one" & gameBoard[2][1] === 8) {
            gameBoard[2][1] = "X"
            printBoard()
            switchPlayers()
            turn++
        } else if(cell === "cell-8" & currentPlayer === "player two" & gameBoard[2][1] === 8) {
            gameBoard[2][1] = "O"
            printBoard()
            switchPlayers()
            turn++
        }

        else if(cell === "cell-9" & currentPlayer === "player one" & gameBoard[2][2] === 9) {
            gameBoard[2][2] = "X"
            printBoard()
            switchPlayers()
            turn++
        } else if(cell === "cell-9" & currentPlayer === "player two" & gameBoard[2][2] === 9) {
            gameBoard[2][2] = "O"
            printBoard()
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
            currentTurn = 0
            isOver = true
            winner = "Player one Won!!"
        } else if(gameBoard[1][0] === "X" & gameBoard[1][1] === "X" & gameBoard[1][2] === "X") {;
            currentTurn = 0
            isOver = true
            winner = "Player one Won!!"
        } else if(gameBoard[2][0] === "X" & gameBoard[2][1] === "X" & gameBoard[2][2] === "X") {
            currentTurn = 0
            isOver = true
            winner = "Player one Won!!"
    
        } else if(gameBoard[0][0] === "X" & gameBoard[1][0] === "X" & gameBoard[2][0] === "X") {
            currentTurn = 0
            isOver = true
            winner = "Player one Won!!"
        } else if(gameBoard[0][1] === "X" & gameBoard[1][1] === "X" & gameBoard[2][1] === "X") {
            currentTurn = 0
            isOver = true
            winner = "Player one Won!!"
        } else if(gameBoard[0][2] === "X" & gameBoard[1][2] === "X" & gameBoard[2][2] === "X") {
            currentTurn = 0
            isOver = true
            winner = "Player one Won!!"
        }
        else if(gameBoard[0][0] === "X" & gameBoard[1][1] === "X" & gameBoard[2][2] === "X") {
            currentTurn = 0
            isOver = true
            winner = "Player one Won!!"
        } else if(gameBoard[0][2] === "X" & gameBoard[1][1] === "X" & gameBoard[2][0] === "X") {
            currentTurn = 0
            isOver = true
            winner = "Player one Won!!"
        }
    

    
        if(gameBoard[0][0] === "O" & gameBoard[0][1] === "O" & gameBoard[0][2] === "O") {
            currentTurn = 0
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[1][0] === "O" & gameBoard[1][1] === "O" & gameBoard[1][2] === "O") {
            currentTurn = 0
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[2][0] === "O" & gameBoard[2][1] === "O" & gameBoard[2][2] === "O") {
            currentTurn = 0
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[0][0] === "O" & gameBoard[1][0] === "O" & gameBoard[2][0] === "O") {
            currentTurn = 0
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[0][1] === "O" & gameBoard[1][1] === "O" & gameBoard[2][1] === "O") {
            currentTurn = 0
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[0][2] === "O" & gameBoard[1][2] === "O" & gameBoard[2][2] === "O") {
            currentTurn = 0
            isOver = true
            winner = "Player two Won!!"
        }  
        else if(gameBoard[0][0] === "O" & gameBoard[1][1] === "O" & gameBoard[2][2] === "O") {
            currentTurn = 0
            isOver = true
            winner = "Player two Won!!"
        } else if(gameBoard[0][2] === "O" & gameBoard[1][1] === "O" & gameBoard[2][0] === "O") {
            currentTurn = 0
            isOver = true
            winner = "Player two Won!!"
        } 
    } 

    const getIsOver = () => {
        return isOver;
    };
    
    const getWinner = () => {
        return winner;
    }
    
    const getCurrentPlayer = () => {
        return currentPlayer;    
    }

    const getTurn = () => {
        return turn;
    }
    return {getIsOver, getWinner, playRound, getCurrentPlayer, getTurn}
};

const screenController = () => {
    const screenBoard = document.querySelector(".board");
    const cells = document.querySelector(".board").children;
    const showCurrentTurn = document.querySelector(".current-turn");
    const game = gameController();
    screenBoard.addEventListener("click", handler)

    function handler(e) {
        if (game.getIsOver()) {
            return;
        } else if (e.target.textContent !== "X" & e.target.textContent !== "O" & game.getCurrentPlayer() === "player one") {
            e.target.textContent = "X"
            e.target.style.color = "Red" 
            showCurrentTurn.textContent = "Player two's turn"
            game.playRound(e.target.id);
        } else if (e.target.textContent !== "X" & e.target.textContent !== "O" & game.getCurrentPlayer() === "player two") {
            e.target.textContent = "O"
            e.target.style.color = "Blue"
            showCurrentTurn.textContent = "Player one's turn"
            game.playRound(e.target.id);
        }
        displayWinner()
    }

    displayWinner = () => {
        if(game.getWinner() === "Player one Won!!") {
            showCurrentTurn.textContent = game.getWinner();
        } else if (game.getWinner() === "Player two Won!!") {
            showCurrentTurn.textContent = game.getWinner();
        } else if (game.getTurn() === 9) {
            showCurrentTurn.textContent = "It's a Tie";
        } else {
            return;
        }
    }

    /*function resetGame() {
        gameBoard.splice(-3)
        gameBoard.push([1, 2, 3], [4, 5, 6], [7, 8, 9])
        activePlayer = "player one"
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = "";
        }
    }*/
}

printBoard()
screenController()