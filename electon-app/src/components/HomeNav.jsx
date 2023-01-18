import { Button, Form, InputGroup } from "react-bootstrap";
import LogInModal from "./LogInModal";

export default function HomeNav({ loginRole }) {
  return (
    <div className="HomeNav d-flex">
      <div className="left mb-2 mb-md-0 mx-auto mx-md-0 my-auto">
        <img src="./img/logo_white.svg" alt="logo" />
        <span className="brandName">Electon</span>
      </div>
      <div className="middle mx-auto mx-md-0 my-auto">
        <InputGroup className="mb-2 mb-md-0">
          <Form.Control
            placeholder="Search any things"
            aria-label="Search any things"
            aria-describedby="basic-addon1"
            id="basic-input1"
          />
          <Button variant="outline-light" id="button-addon1">
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="right mx-auto mx-md-0 my-auto">
        <LogInModal loginRole={loginRole} />
        <button className="btn">
          <img src="./img/cart_white.svg" alt="" />
          <span className="shoppingCart">0</span>
        </button>
      </div>
    </div>
  );
}
