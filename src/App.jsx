import Player from './components/Player';

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name="Player 1" symbol="X" />
                    <Player name="Player 2" symbol="O" />
                </ol>
                GAME BOARD WILL GO HERE
            </div>
            GAMES LOG WILL GO HERE
        </main>
    );
}

export default App;
