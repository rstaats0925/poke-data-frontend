import "./Card.css";
//{ id, name, sprites, types }
export default function Card({ sprites }) {
  const imageUrl = sprites.other.dream_world.front_default;
  return (
    <div className="card">
      <img className="card__image" src={imageUrl} />
      <div className="card__info">
        <p className="info__name"></p>
        <p className="info__type"></p>
        <p className="info__number"></p>
      </div>
    </div>
  );
}
