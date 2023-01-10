

export default function Userlist() {
  return (
    <div className="container-md">
    <table className="table table-dark table-striped bordered">
      <thead>
        <tr>
          <th>#</th>
          <th className="btn btn-dark">Name</th>
          <th>Points</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
