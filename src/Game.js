import Board from './Board'
import './Game.css'

const Game = () => {
  const [squareHistory, setsquareHistory] = useState({
    history: [{
      squares: Array(9).fill(null),
    }],
    xIsNext: true,
  })
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    
  }

  export default Game;
  