import "./Card.scss"

const Card = (props) => {
  const {currentCard} = props;
  console.log(currentCard)
  return (
    <div>
      <p>card</p>
      {/* <img src={currentCard.image} alt={currentCard.code} /> */}
    </div>
  )
}

export default Card