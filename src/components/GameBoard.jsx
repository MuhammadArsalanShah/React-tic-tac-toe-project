import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {

  const[gameBoard, setGameBoard] = useState(initialGameBoard)

  // console.log('initial',initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {

    setGameBoard((prevGameboard) => {
      const updatedBoard = [...prevGameboard.map((innerArray) => [...innerArray])]
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    });
  }

  // console.log('updated',gameBoard);

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
