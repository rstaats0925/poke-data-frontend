import "./Modal.css";
import v from "voca";

export default function Modal({ data }) {
  const imageUrl = data.sprites.other.dream_world.front_default;
  const types = [];

  for (const type of data.types) {
    const typeName = v.capitalize(type.type.name);
    types.push(typeName);
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__name">{data.name.toUpperCase()}</h2>
        <img className="modal__image" src={imageUrl} alt={data.name} />
        <p className="modal__number">{`#${data.id}`}</p>
        <p className="modal__types">{types.join(" • ")}</p>
      </div>
    </div>
  );
}

// tasks
// modal is not responsive
// cards need background
