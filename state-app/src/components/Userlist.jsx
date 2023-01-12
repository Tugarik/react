import { useState } from "react";
import AddUser from "./AddUser";
import UserRow from "./UserRow";
import Users from "./Users";

export default function UserList() {
  const [data, setData] = useState(Users);

  const removeHandler = (index) => {
    data.splice(index, 1);
    setData([...data]);
  };

  const addHandler = (newName, newScore) => {
    setData([...data, { name: newName, score: newScore }]);
  };

  const filterScore = () => {
    data.sort((a, b) => a.score - b.score);
    setData([...data]);
    console.log(data);
  };

  const filterName = () => {
    data.sort();
    setData([...data]);
    console.log(data);
  };

  const scoreHandler = (n, index) => {
    data[index].score = n.toString(); //no-toi heseg
    console.log(data);
  };

  return (
    <div className="userList container-sm mt-5">
      <table className="table table-dark table-striped bordered">
        <thead>
          <tr>
            <td className="align-items-center" colSpan={2}>
              <span>Total players:</span>
              <strong className="players bg-warning ms-2">{data.length}</strong>
            </td>
            <td colSpan={2}>
              <span>Sort: </span>
              <button className="btn btn-primary ms-2" onClick={filterScore}>
                by Score
              </button>
              <button className="btn btn-success ms-2" onClick={filterName}>
                by Name
              </button>
            </td>
          </tr>
          <tr>
            <th className="ps-4">No.</th>
            <th>Name</th>
            <th className="ps-5">Points</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <UserRow
                key={index}
                index={index}
                userData={user}
                removeRow={removeHandler}
                // passScore={scoreHandler}
              />
            );
          })}
        </tbody>
      </table>
      <AddUser addNew={addHandler} />
    </div>
  );
}
