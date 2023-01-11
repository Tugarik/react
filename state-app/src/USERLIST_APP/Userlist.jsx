import UserRow from "./UserRow";
import Users from "./Users";

export default function Userlist() {
  return (
    <div className="container-md">
      <table className="table table-striped bordered">
        <thead>
          <tr>
            <td colSpan={2}>Total players: 1</td>

            <td colSpan={2}>
              <button>by Score</button>
              <button>by Name</button>
            </td>
          </tr>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Points</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user) => {
            console.log(user);
            <UserRow userData={user} />;
          })}
        </tbody>
      </table>
      <button>Add User</button>
    </div>
  );
}
