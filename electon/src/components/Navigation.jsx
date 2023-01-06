import "./styles/navigation.css";

export default function Navigation() {
  return (
    <div className="navigation p-3">
      <div className="container-lg d-flex justify-content-between">
        <div className="left d-flex">
          <div className="logo d-flex text-white align-items-center">
            <img className="logo" src="./img/logo.svg" alt="logo" />
            <span className="brandName ms-2">Electon</span>
          </div>
          <div className="input-group align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search any things"
              aria-label="earch any things"
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
        </div>
        <div className="right d-flex">
          <img src="./img/user_icon.svg" alt="" />
          <div>Sign in</div>
          <img className="cart" src="./img/cart.svg" alt="cart" />
          <div className="counter">0</div>
        </div>
      </div>
    </div>
  );
}
