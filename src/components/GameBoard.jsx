import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {

  const[gameBoard, setGameBoard] = useState(initialGameBoard)

  // console.log('initial',initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {

    setGameBoard((prevGameboard) => {
      const updatedBoard = [...prevGameboard.map((innerArray) => [...innerArray])]
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
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
