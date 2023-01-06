import "./styles/card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img className="cardImage" src={`${props.data.image}`} alt="card image" />
      <div className="cardInfo">
        <h3 className="title">{props.data.title}</h3>
        <p className="description">{props.data.description}</p>
      </div>
      <button className="readMore">READ MORE</button>
    </div>
  );
}
