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
  const [value, setValue] = useState(Array(9).fill(null))
  function handleClick(i){
    const nextValue = value.slice();
    nextValue[i] = 'X';
    setValue(nextValue);
  }
  return (
    <>
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