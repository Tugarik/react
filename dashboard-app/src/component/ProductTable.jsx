import axios from "axios";
import { useEffect } from "react";

import { Dropdown, DropdownButton, Table } from "react-bootstrap";
import { addDataContext } from "../context/DataContext";
import DeleteModal from "./DeleteModal";
import EditProductModal from "./EditProductModal";

export default function ProductTable() {
  const { items, setItems } = addDataContext();
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/products").then((res) => {
        setItems(res.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <Table>
      <thead className="bg-secondary">
        <tr>
          <th>Зураг</th>
          <th>Барааны нэр</th>
          <th>Үнэ</th>
          <th>Үлдэгдэл</th>
          <th>Хямдрал %</th>
          <th>Категори</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item, index) => (
            <tr key={index} id={item.id}>
              <td>
                <img
                  src={item.image}
                  alt="product"
                  width="50px"
                  height="50px"
                />
              </td>
              <td>{item.model}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.sale}</td>
              <td>{item.category}</td>
              <td>
                <DropdownButton id="dropdown-basic-button" title="Edit">
                  <Dropdown.Item>
                    <EditProductModal items={items} itemId={item.id} />
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
