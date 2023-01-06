import "./styles/navigation.css";

export default function Navigation() {
  return (
    <div className="navigation p-3">
      <div className="container d-flex flex-wrap justify-content-sm-between justify-content-center text-center">
        <div className="left d-flex flex-wrap text-white align-items-center justify-content-center justify-content-md-start">
          <img className="logo" src="./img/logo.svg" alt="logo" />
          <span className="brandName ms-2">Electon</span>
        </div>
        <div className="middle d-flex ms-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search any things"
            aria-label="Search any things"
            aria-describedby="button-navsearch"
          />
          <button
            className="btn btn-warning"
            type="button"
            id="button-navsearch"
          >
            Search
          </button>
        </div>
        <div className="right d-flex align-items-center justify-content-end ms-auto mt-3">
          <img
            className="user_icon pe-1"
            src="./img/user_icon.svg"
            alt="user_icon"
          />
          <div className="pe-3">Sign in</div>
          <img className="cart pe-3" src="./img/cart.svg" alt="cart" />
          <div className="counter">0</div>
        </div>
      </div>
    </div>
  );
}
