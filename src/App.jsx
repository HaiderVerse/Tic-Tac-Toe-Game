import { useState } from "react"
export default function App() {
  return (
    <>
      <Board/>
    </>
  )
}
function Sqaure({value, onSquareClick}){
  return (
    <button 
      className="square"
      onClick={onSquareClick}
    >{value}</button>
  )
}
function Board(){
  const [xIsNext, setXIsNext] = useState(true);
  const [value, setValue] = useState(Array(9).fill(null));

  function handleClick(i){
    if(value[i] || calculateWinner(value)) {
      return;
    }
    const nextValue = value.slice();
    nextValue[i] = xIsNext ? 'X' : 'O';
    setValue(nextValue);
    setXIsNext(!xIsNext);
  }
  
  const winner = calculateWinner(value);
  let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Sqaure value={value[0]} onSquareClick={() => {handleClick(0)}}/>
        <Sqaure value={value[1]} onSquareClick={() => {handleClick(1)}}/>
        <Sqaure value={value[2]} onSquareClick={() => {handleClick(2)}}/>
      </div>
      <div className="board-row">
        <Sqaure value={value[3]} onSquareClick={() => {handleClick(3)}}/>
        <Sqaure value={value[4]} onSquareClick={() => {handleClick(4)}}/>
        <Sqaure value={value[5]} onSquareClick={() => {handleClick(5)}}/>
      </div>
      <div className="board-row">
        <Sqaure value={value[6]} onSquareClick={() => {handleClick(6)}}/>
        <Sqaure value={value[7]} onSquareClick={() => {handleClick(7)}}/>
        <Sqaure value={value[8]} onSquareClick={() => {handleClick(8)}}/>
      </div>
    </>
  )
}
function calculateWinner(value) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (value[a] && value[a] === value[b] && value[a] === value[c]) {
      return value[a];
    }
  }
  return null;
}