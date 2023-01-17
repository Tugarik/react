import { Button, Form, InputGroup } from "react-bootstrap";
import LogInModal from "./LogInModal";

export default function HomeNav({ loginRole }) {
  return (
    <div className="HomeNav d-flex">
      <div className="left">
        <img src="./img/logo_white.svg" alt="logo" />
        <span className="brandName">Electon</span>
      </div>
      <div className="middle">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search any things"
            aria-label="Search any things"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-light" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="right">
        <LogInModal loginRole={loginRole} />
        <button className="btn">
          <img src="./img/cart_white.svg" alt="" />
          <span className="shoppingCart">0</span>
        </button>
      </div>
    </div>
  );
}
