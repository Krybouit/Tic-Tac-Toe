const gameBoard = (function() {
    let board = [[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]];
    
    return board;
})();

let activePlayer = (() => {
    let currentPlayer = "player one";

    return currentPlayer;
    
})()
 
function gameController() {

    const switchPlayers = () => {
       if (activePlayer === "player one") {
        activePlayer = "player two";
        console.log("Player two's turn (O)")

    } else if (activePlayer === "player two") {
        activePlayer = "player one";
        console.log("Player one's turn (X)")
       }
    };

    const printBoard = () => {
        for (let element of gameBoard) {
            let rowString = element.join(" ")
            console.log(rowString);
          }
    }

   let move = prompt("Choose board place (1-9)");

      const playRound = () => {
        
        if(move === "1" & activePlayer === "player one" & gameBoard[0][0] === 1) {
            gameBoard[0][0] = "X"
            printBoard()
        } else if(move === "1" & activePlayer === "player two" & gameBoard[0][0] === 1) {
            gameBoard[0][0] = "O"
            printBoard()
        } 
        
        else if(move === "2" & activePlayer === "player one" & gameBoard[0][1] === 2) {
            gameBoard[0][1] = "X"
            printBoard()
        } else if(move === "2" & activePlayer === "player two" & gameBoard[0][1] === 2) {
            gameBoard[0][1] = "O"
            printBoard()
        } 
        
        else if(move === "3" & activePlayer === "player one" & gameBoard[0][2] === 3) {
            gameBoard[0][2] = "X"
            printBoard()
        } else if(move === "3" & activePlayer === "player two" & gameBoard[0][2] === 3) {
            gameBoard[0][2] = "O"
            printBoard()
        } 
        
        else if(move === "4" & activePlayer === "player one" & gameBoard[1][0] === 4) {
            gameBoard[1][0] = "X"
            printBoard()
        } else if(move === "4" & activePlayer === "player two" & gameBoard[1][0] === 4) {
            gameBoard[1][0] = "O"
            printBoard()
        } 
        
        else if(move === "5" & activePlayer === "player one" & gameBoard[1][1] === 5) {
            gameBoard[1][1] = "X"
            printBoard()
        } else if(move === "5" & activePlayer === "player two" & gameBoard[1][1] === 5) {
            gameBoard[1][1] = "O"
            printBoard()
        }

        else if(move === "6" & activePlayer === "player one" & gameBoard[1][2] === 6) {
            gameBoard[1][2] = "X"
            printBoard()
        } else if(move === "6" & activePlayer === "player two" & gameBoard[1][2] === 6) {
            gameBoard[1][2] = "O"
            printBoard()
        }

        else if(move === "7" & activePlayer === "player one" & gameBoard[2][0] === 7) {
            gameBoard[2][0] = "X"
            printBoard()
        } else if(move === "7" & activePlayer === "player two" & gameBoard[2][0] === 7) {
            gameBoard[2][0] = "O"
            printBoard()
        }

        else if(move === "8" & activePlayer === "player one" & gameBoard[2][1] === 8) {
            gameBoard[2][1] = "X"
            printBoard()
        } else if(move === "8" & activePlayer === "player two" & gameBoard[2][1] === 8) {
            gameBoard[2][1] = "O"
            printBoard()
        }

        else if(move === "9" & activePlayer === "player one" & gameBoard[2][2] === 9) {
            gameBoard[2][2] = "X"
            printBoard()
        } else if(move === "9" & activePlayer === "player two" & gameBoard[2][2] === 9) {
            gameBoard[2][2] = "O"
            printBoard()
        } 

        else if(move === null) {
            return;
        }
        
        else {
            alert("Spot is already taken / wrong input, please choose again")
        }
    } 

    const checkWinner = () => {
        if(gameBoard[0][0] === "X" & gameBoard[0][1] === "X" & gameBoard[0][2] === "X") {
            alert("PLAYER 1 WON!");
            console.log("PLAYER 1 WON!")
            return
        } else if(gameBoard[1][0] === "X" & gameBoard[1][1] === "X" & gameBoard[1][2] === "X") {
            alert("PLAYER 1 WON!");
            console.log("PLAYER 1 WON!")
            return
        } else if(gameBoard[2][0] === "X" & gameBoard[2][1] === "X" & gameBoard[2][2] === "X") {
            alert("PLAYER 1 WON!");
            console.log("PLAYER 1 WON!")
            return
    
        } else if(gameBoard[0][0] === "X" & gameBoard[1][0] === "X" & gameBoard[2][0] === "X") {
            alert("PLAYER 1 WON!");
            console.log("PLAYER 1 WON!")
            return
        } else if(gameBoard[0][1] === "X" & gameBoard[1][1] === "X" & gameBoard[2][1] === "X") {
            alert("PLAYER 1 WON!");
            console.log("PLAYER 1 WON!")
            return
        } else if(gameBoard[0][2] === "X" & gameBoard[1][2] === "X" & gameBoard[2][2] === "X") {
            alert("PLAYER 1 WON!");
            console.log("PLAYER 1 WON!")
            return
        }
    
        else if(gameBoard[0][0] === "X" & gameBoard[1][1] === "X" & gameBoard[2][2] === "X") {
            alert("PLAYER 1 WON!");
            console.log("PLAYER 1 WON!")
            return
        } else if(gameBoard[0][2] === "X" & gameBoard[1][1] === "X" & gameBoard[2][0] === "X") {
            alert("PLAYER 1 WON!");
            console.log("PLAYER 1 WON!")
            return
        }
    
    
    
        if(gameBoard[0][0] === "O" & gameBoard[0][1] === "O" & gameBoard[0][2] === "O") {
            alert("PLAYER 2 WON!");
            console.log("PLAYER 2 WON!")
            return
        } else if(gameBoard[1][0] === "O" & gameBoard[1][1] === "O" & gameBoard[1][2] === "O") {
            alert("PLAYER 2 WON!");
            console.log("PLAYER 2 WON!")
            return
        } else if(gameBoard[2][0] === "O" & gameBoard[2][1] === "O" & gameBoard[2][2] === "O") {
            alert("PLAYER 2 WON!");
            console.log("PLAYER 2 WON!")
            return
    
        } else if(gameBoard[0][0] === "O" & gameBoard[1][0] === "O" & gameBoard[2][0] === "O") {
            alert("PLAYER 2 WON!");
            console.log("PLAYER 2 WON!")
            return
        } else if(gameBoard[0][1] === "O" & gameBoard[1][1] === "O" & gameBoard[2][1] === "O") {
            alert("PLAYER 2 WON!");
            console.log("PLAYER 2 WON!")
            return
        } else if(gameBoard[0][2] === "O" & gameBoard[1][2] === "O" & gameBoard[2][2] === "O") {
            alert("PLAYER 2 WON!");
            console.log("PLAYER 2 WON!")
            return
        }
    
        else if(gameBoard[0][0] === "O" & gameBoard[1][1] === "O" & gameBoard[2][2] === "O") {
            alert("PLAYER 2 WON!");
            console.log("PLAYER 2 WON!")
            return
        } else if(gameBoard[0][2] === "O" & gameBoard[1][1] === "O" & gameBoard[2][0] === "O") {
            alert("PLAYER 2 WON!");
            console.log("PLAYER 2 WON!")
            return
        }
    
        else {
            switchPlayers()
        }
    }
     
    playRound()
    checkWinner()
};



(function startMessage() {
    console.log("Type gameController() in the console to start playing")
    console.log("Player one's turn (X)")
    for (let element of gameBoard) {
        let rowString = element.join(" ")
        console.log(rowString);
      }
})();