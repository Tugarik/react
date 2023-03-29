import axios from "axios";
import { useEffect } from "react";

import { Dropdown, DropdownButton, Spinner, Table } from "react-bootstrap";
import { useDataContext } from "../context/DataContext";
import DeleteModal from "./DeleteModal";
import EditProductModal from "./EditProductModal";

export default function ProductTable() {
  const { items, setItems } = useDataContext();

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/products").then((res) => {
        setItems(res.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return !items ? (
    <Spinner animation="border" role="status" />
  ) : (
    <Table>
      <thead className="bg-secondary">
        <tr>
          <th>Зураг</th>
          <th>Барааны нэр</th>
          <th>Үнэ</th>
          <th>Үлдэгдэл</th>
          <th>Хямдрал %</th>
          <th>Категори</th>
          <th>Брэнд</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item, index) => (
            <tr key={index} id={item._id}>
              <td>
                <img
                  src={item.image}
                  alt="product"
                  width="50px"
                  height="50px"
                />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.sale}</td>
              <td>{{ ...item.category }.name}</td>
              <td>{{ ...item.brand }.name}</td>

              <td>
                <DropdownButton id="dropdown-basic-button" title="Edit">
                  <Dropdown.Item>
                    <EditProductModal items={items} itemId={item._id} />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <DeleteModal
                      label={"Бараа устгах"}
                      itemId={item.id}
                      section={"products"}
                      setItems={setItems}
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
