import "./Card.css";
//{ id, name, sprites, types }
export default function Card({ name, number, sprites, handleCardClick }) {
  const imageUrl = sprites.other.dream_world.front_default;
  return (
    <div className="card">
      <p className="card__number">{number}</p>
      <img className="card__image" src={imageUrl} onClick={handleCardClick} />
      <h2 className="card__name">{name.toUpperCase()}</h2>
    </div>
  );
}
