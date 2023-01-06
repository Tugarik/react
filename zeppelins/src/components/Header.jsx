import image from "./img/header_img.png";
import twitter from "./img/twitter.svg";
import linkedin from "./img/linked_in.svg";
import medium1 from "./img/Ellipse1.svg";
import medium2 from "./img/Ellipse2.svg";
import medium3 from "./img/Ellipse3.svg";
import "./styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <div className="title">Blog Posts</div>
        <div className="subTitle">I think so, this is it. </div>
        <p>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div className="links">
          <div className="twitter">
            <img src={twitter} alt="twitter logo" />
            <span className="tw_text"> TWITTER</span>
          </div>
          <div className="linkedin">
            <img src={linkedin} alt="linkedin logo" />
            <span className="linkedin_text"> LINKEDIN</span>
          </div>
          <div className="medium">
            <div>
              <img src={medium1} alt="medium logo" />
              <img src={medium2} alt="medium logo" />
              <img src={medium3} alt="medium logo" />
            </div>
            <span className="medium_text"> MEDIUM</span>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={image} alt="header image" />
      </div>
    </div>
  );
}
