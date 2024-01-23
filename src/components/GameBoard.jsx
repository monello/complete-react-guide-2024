const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function GameBoard({ onSelectSquare, activeSymbol }) {
    // const [gameBoard, setGameboard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameboard((currGameBoard) => {
    //         // We need to use this functional form to update the state, because we are dependent on the current (guaranteed latest version)
    //         //  of the state-managed value
    //         // Make a deep-copy of the board before applying changes
    //         const updatedBoard = [...currGameBoard.map((row) => [...row])];
    //         updatedBoard[rowIndex][colIndex] = activeSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() =>
                                        handleSelectSquare(rowIndex, colIndex)
                                    }
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;
