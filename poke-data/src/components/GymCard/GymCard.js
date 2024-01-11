import "./GymCard.css";

function GymCard({ gym }) {
  return (
    <div className="gymCard">
      <h2 className="gymCard__header">Gym #{gym.number}</h2>
      <ul className="gymCard__summary">
        <li className="gymCard__fact">Leader: {gym.leader}</li>
        <li className="gymCard__fact">Specialy: {gym.specialty}</li>
        <li className="gymCard__fact">City: {gym.city}</li>
        <li className="gymCard__fact">Badge: {gym.badge}</li>
        <li className="gymCard__fact">
          Pokemon:
          <ul className="gymCard__pokemon-list">{gym.team}</ul>
        </li>
        <li className="gymCard__fact">
          Rewards:
          <ul className="gymCard__rewards-list">
            <li className="gymCard__reward">Payout: {gym.rewards.payout}</li>
            <li className="gymCard__reward">Machine: {gym.rewards.machine}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default GymCard;
