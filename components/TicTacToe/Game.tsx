import React, {useState} from "react"
import Square from './Square'
import styles from '../../styles/Game.module.css'
export default function Game() {
  //<div className="button button_space" onClick={() => setValue(0)}>
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(board)
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let line = 0; line < lines.length; line++) {
      const [a, b, c] = lines[line]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }
  const handleClick = (i) => {
    console.log('player click cell')
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "x" : "o";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }
  const play = [
    {
      id: 0,
      state: "x"
    },
    {
      id: 1,
      state: "x"
    },
    {
      id: 2,
      state: ""
    },
    {
      id: 3,
      state: "o"
    },
    {
      id: 4,
      state: "x"
    },
    {
      id: 5,
      state: "x"
    },
    {
      id: 6,
      state: ""
    },
    {
      id: 7,
      state: "o"
    },
    {
      id: 8,
      state: ""
    }
  ]
  return (
    <div>
      <div className={styles.board}>
        {play.map(item => (
          <Square data={item} key={item.id} />
        ))}
      </div>
      <p>
        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
      <div className="button button_space">
        <i className="button_icon fa-solid fa-xmark"></i>
        <span className="button_label">Reset</span>
      </div>
    </div>
  )
}
