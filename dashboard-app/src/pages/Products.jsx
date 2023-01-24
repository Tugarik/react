import "../styles/products.css";
import MonitorSvg from "../svg/MonitorSvg";
import { DATA } from "../utils/data";

export default function Products() {
  return (
    <div className="products">
      <div className="d-flex">
        <MonitorSvg color="#003585" />
        <span className="productsTitle ms-2">Бүтээгдхүүнүүд</span>
      </div>
      <hr />
      <button className="addBtn">+ Бараа нэмэх</button>
      <div className="d-flex justify-content-between">
        <div>Dropdown</div>
        <div className="searchProduct">
          <img src="../img/ds_search_grey.svg" alt="" />
          <input type="text" placeholder="Хайх... " />
        </div>
      </div>
      <div>Table</div>
    </div>
  );
}
