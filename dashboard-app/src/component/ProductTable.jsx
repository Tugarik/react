import axios from "axios";

import { Dropdown, DropdownButton, Table } from "react-bootstrap";
import EditProductModal from "./EditProductModal";

export default function ProductTable({ items }) {
  const removeElement = (itemId) => {
    console.log(itemId);
    location.reload();
    try {
      axios
        .delete(`http://localhost:5000/products/${itemId}`)
        .then(() => console.log("DELETE ID sent"));
    } catch (error) {
      console.log(error.message);
    }
  };

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
                  <EditProductModal items={items} itemId={item.id} />

                  <button
                    className="btn addBtn ms-2"
                    onClick={() => removeElement(item.id)}
                  >
                    Бараа устгах
                  </button>
                </DropdownButton>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
