import "./ErrorMessage.css";

export default function ErrorMessage() {
  return (
    <div className="error-display">
      <p className="error-display__message">
        An error has occured. Unable to fetch data at this time.
      </p>
    </div>
  );
}
