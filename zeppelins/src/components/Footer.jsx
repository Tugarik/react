import footerImage from "./img/footer_logo.svg";
import "./styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img src={footerImage} alt="footer image" />
    </div>
  );
}
