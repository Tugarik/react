import axios from "axios";
import { useEffect } from "react";

import { Dropdown, DropdownButton, Table } from "react-bootstrap";
import { useDataContext } from "../context/DataContext";
import DeleteModal from "./DeleteModal";
import EditUserModal from "./EditUserModal";

export default function UserTable() {
  const { users, setUsers } = useDataContext();
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/users/test").then((res) => {
        setUsers(res.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <Table>
      <thead className="bg-secondary">
        <tr>
          <th>User name</th>
          <th>First name</th>
          <th>Last name</th>

          <th>E-mail</th>
          <th>Phone</th>
          <th>Orders</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user, index) => (
            <tr key={index} id={user.id}>
              <td>{user.userName}</td>
              <td>{user.firstName || "-"}</td>
              <td>{user.lastName || "-"}</td>
              <td>{user.email || "-"}</td>
              <td>{user.phone || "-"}</td>
              <td>{user.orders ? user.orders.length : 0}</td>
              <td>
                <DropdownButton id="dropdown-basic-button" title="Edit">
                  <Dropdown.Item>
                    <EditUserModal users={users} userId={user.id} />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <DeleteModal
                      label={"Хэрэглэгч устгах"}
                      section={"users"}
                      itemId={user.id}
                      setItems={setUsers}
                    />
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
