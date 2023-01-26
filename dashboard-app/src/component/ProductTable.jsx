import { Table } from "react-bootstrap";

export default function ProductTable({ items }) {
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
          items.map((item, index) => {
            return (
              <tr key={index}>
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
                  <button className="modifyBtn">Edit</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
