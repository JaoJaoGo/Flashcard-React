import { useState } from 'react'

import './App.css';

import Cards from './components/Cards';
import ChangeCards from './components/ChangeCards';

function App() {
  const getCards = () => {
    const cards = [
      { front: "Hello", back: "Olá" },
      { front: "Welcome", back: "Bem-vindo" },
      { front: "Goodbye", back: "Tchau" },
    ]

    return cards
  }

  const cartas = getCards()
  const [index, setIndex] = useState(0)
  const [side, setSide] = useState("front")

  const changeIndex = e => {
    let newIndex = index;

    if(e.target.id === 'esquerdo') {
      if(index === 0) {
        newIndex = 2;
      } else {
        newIndex -= 1;
      }
    }
    if(e.target.id === 'direito') {
      if(index === 2) {
        newIndex = 0;
      } else {
        newIndex += 1;
      }
    }

    setIndex(newIndex);
  }

  const flip = () => {
    if(side === "front") {
      setSide("back");
    } else {
      setSide("front");
    }
  }

  return (
    <div onClick={flip} className="App">
      <h1>React Flashcard</h1>

      <div className="cards">
        <Cards cartas={cartas} index={index} changeIndex={changeIndex} side={side} />
      </div>
      
      <ChangeCards changeIndex={changeIndex} />
    </div>
  );
}

export default App;
