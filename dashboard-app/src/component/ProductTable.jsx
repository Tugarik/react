import { Table } from "react-bootstrap";
import { DATA } from "../utils/data";

export default function ProductTable() {
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
        {DATA.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <img
                  src={item.image}
                  alt="product"
                  width="50px"
                  height="50px"
                />
                Зураг
              </td>
              <td>{item.model}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.sale}</td>
              <td>{item.category}</td>
              <td>
                <button className="modifyBtn">Modify</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}