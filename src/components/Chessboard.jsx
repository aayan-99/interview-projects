// src/App.js
import { useState } from 'react';

const Chessboard = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (row, col) => {
    console.log(row, col,);
    setSelectedBox({ row, col });
  };

  const isDiagonal = (box, selectedBox) => {
    const dx = Math.abs(box.col - selectedBox.col);
    const dy = Math.abs(box.row - selectedBox.row);
    return dx === dy;
  };

  return (
    <div className='h-screen w-full flex flex-col gap-5 justify-center items-center px-5 pt-[100px]'>
    <div className="grid grid-cols-8 w-full max-w-[800px] aspect-square">
      {[...Array(64)].map((_, index) => {
        const row = Math.floor(index / 8);
        const col = index % 8;
        const isEvenRow = row % 2 === 0;
        const isEvenCol = col % 2 === 0;
        const isEvenSquare = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol);
        const boxColor = isEvenSquare ? 'bg-gray-300' : 'bg-gray-500';
        const isSelected =
          selectedBox && selectedBox.row === row && selectedBox.col === col;
        const isHighlighted =
          isSelected || (selectedBox && isDiagonal({ row, col }, selectedBox));

        return (
          <div
            key={index}
            className={`w-full h-full cursor-pointer ${boxColor} `}
            style={{ backgroundColor: isHighlighted ? '#4469d1' : ''}}
            onClick={() => handleBoxClick(row, col)}
          ></div>
        );
      })}
    </div>
    <button onClick={() => setSelectedBox(null)} className='bg-red-800 px-5 py-1 rounded-[5px] text-white flex justify-center items-center pt-[1px] active:scale-95 transition-all duration-200 ease-in-out'>reset</button>
    </div>
  );
};

export default Chessboard;
