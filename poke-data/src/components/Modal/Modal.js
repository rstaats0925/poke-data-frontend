import "./Modal.css";

export default function Modal({ data }) {
  const imageUrl = data.sprites.other.dream_world.front_default;
  const attacks = data.attacks.map((a) => (
    <li>
      <p className="modal__attack">{a}</p>
    </li>
  ));

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__intro">
          <img className="modal__image" src={imageUrl} alt={data.name}></img>
          <h2 className="modal__name">{data.name.toUpperCase()}</h2>
        </div>
        <div className="modal__data">
          <div className="modal__general-info">
            <p className="modal__number">No. {data.id}</p>
            <p className="modal__types">type(s): {data.types.join(" • ")}</p>
            <p className="modal__leader">gym leader: {data.leader}</p>
            <p className="modal__level">level: {data.level}</p>
          </div>
          <div>
            <p className="modal__attacks">Attacks:</p>
            <ul className="modal__moves">{attacks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// tasks
// modal is not responsive
// cards need background
