import React, { useState } from 'react';
import './App.css';
// import Card from "./components/Card/Card"
// import deck from "./scripts/deck.mjs"

function App() {

  const [deckId, setDeckId] = useState(false);
  const [card, setCard] = useState(false);

  const getDeckId = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(response => setDeckId(response.deck_id));
  }

  const getCards = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then(response => setCard(response.cards[0]));
  }
  
  return (
    <div className="App">
      <button onClick={getDeckId}>Get a New Deck</button>
      {!deckId && <p>No Deck Found</p>}
      {deckId && <p>DeckID: {deckId}</p>}
      {deckId && <button onClick={getCards}>Get Cards</button>}
      {card && <p>{card.code}</p>}
    </div>
  );
}

export default App;
// https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1
// https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1