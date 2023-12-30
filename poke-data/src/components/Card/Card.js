import "./Card.css";
//{ id, name, sprites, types }
export default function Card({ name, number, sprites }) {
  const imageUrl = sprites.other.dream_world.front_default;
  return (
    <div className="card">
      <img className="card__image" src={imageUrl} />
      <div className="card__info">
        <h2 className="info__name">{name}</h2>
        {/* <p className="info__type"></p> */}
        <p className="info__number">{number}</p>
      </div>
    </div>
  );
}
