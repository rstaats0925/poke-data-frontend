import "./GymCard.css";
import v from "voca";

function GymCard({ gym }) {
  let key = 0;
  return (
    <div className="gymCard">
      <h2 className="gymCard__header">Gym #{gym.number}</h2>
      <ul className="gymCard__summary">
        <li className="gymCard__fact" key={gym.leader}>
          Leader: {gym.leader}
        </li>
        <li className="gymCard__fact" key={gym.specialty}>
          Specialy: {gym.specialty}
        </li>
        <li className="gymCard__fact" key={gym.city}>
          City: {gym.city}
        </li>
        <li className="gymCard__fact" key={gym.badge}>
          Badge: {gym.badge}
        </li>
        <li className="gymCard__fact">
          Team:
          <ul className="gymCard__team">
            {gym.team.map((pokemon) => (
              <li key={pokemon + key++}>{v.capitalize(pokemon)}</li>
            ))}
          </ul>
        </li>
        <li className="gymCard__fact">
          Rewards:
          <ul className="gymCard__rewards-list">
            <li className="gymCard__reward" key={gym.rewards.payout}>
              Payout: {gym.rewards.payout}
            </li>
            <li className="gymCard__reward" key={gym.rewards.machine}>
              Machine: {gym.rewards.machine}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default GymCard;
