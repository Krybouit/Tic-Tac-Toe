const GameBoard = {
    board: [[1, 2, 3], 
            [4, 5, 6], 
            [7, 8, 9]]
};

const player1 = {
    name: "Blue"
}

const player2 = {
    name: "Red"
}


for(let row of GameBoard.board) {
    const rowString = row.join(" ");
    console.log(rowString);
}