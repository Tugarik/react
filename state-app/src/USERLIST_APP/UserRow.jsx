export default function UserRow({ userData }) {
  return (
    <tr>
      <td>#{userData.id}</td>
      <td>{userData.name}</td>
      <td>
        <button>-</button>
        <input type="text" value={userData.score} />
        <button>+</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
}
