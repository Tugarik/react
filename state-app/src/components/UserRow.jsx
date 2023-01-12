import { useState } from "react";
import "./userrow.css";

export default function UserRow({
  userData,
  index,
  removeRow /*, passScore*/,
}) {
  const [score, setScore] = useState(userData.score);

  const increment = () => {
    setScore(Number(score) + 1);
    console.log(userData);
  };

  const decrement = () => {
    setScore(Number(score) - 1);
    console.log(userData);
  };

  return (
    <tr>
      <td className="ps-4"># {Number(index) + 1}</td>
      <td>{userData.name}</td>
      <td className="scoreSet">
        <button className="btn btn-outline-warning" onClick={decrement}>
          -
        </button>
        <input
          className="mx-2"
          type="text"
          value={score}
          // onChange={passScore(score, index)}
        />
        <button className="btn btn-outline-success" onClick={increment}>
          +
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => removeRow(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
