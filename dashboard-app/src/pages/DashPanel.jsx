import { Spinner } from "react-bootstrap";
import "../styles/dashPanel.css";

export default function DashPanel() {
  return (
    <div className="dashPanel">
      <div className="panel">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}
