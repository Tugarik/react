import { Spinner } from "react-bootstrap";
import "../styles/Dash_Panel.css";

export default function Dash_Panel() {
  return (
    <div className="Dash_Panel">
      <div className="panel">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}
