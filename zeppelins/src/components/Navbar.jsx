import "./styles/navbar.css";
import logo from "./img/linked_in.svg";

export default function Navbar() {
  return (
    <div className="navBar">
      <div className="left">
        <div>
          <strong>sad zeppelins</strong>
        </div>
        <div className="logoHire">
          <img src={logo} className="App-logo" alt="logo" />
          <span> Hire Me</span>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CV</a>
          </li>
          <li>
            <a href="#">STORE</a>
          </li>
          <li>
            <a href="#">FREELANCE</a>
          </li>
          <li>
            <a href="#">ABOUT ME</a>
          </li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
