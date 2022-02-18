class deck {
  constructor () {
    this._deckId = this.getNewDeck();
  }

  getNewDeck() {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(response => response.deck_id);
  }

  drawCard() {
    return fetch(`https://deckofcardsapi.com/api/deck/${this._deckId}/draw/?count=1`)
      .then(response => response.json());
  }
}

export default deck