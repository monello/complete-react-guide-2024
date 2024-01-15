import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initialName="Player 2" symbol="O" />
                    <Player initialName="Player 1" symbol="X" />
                </ol>
                <GameBoard />
            </div>
            GAMES LOG WILL GO HERE
        </main>
    );
}

export default App;
