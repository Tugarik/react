import AddProductModal from "../component/AddProductModal";
import ProductTable from "../component/ProductTable";
import "../styles/products.css";
import MonitorSvg from "../svg/MonitorSvg";

export default function Products({ items, setItems }) {
  return (
    <div className="products">
      <div className="d-flex">
        <MonitorSvg color="#003585" />
        <span className="productsTitle ms-2">Бүтээгдхүүнүүд</span>
      </div>
      <hr />

      <AddProductModal />
      <div className="d-flex justify-content-between py-4">
        <div>Dropdown</div>
        <div className="searchProduct">
          <img src="../img/ds_search_grey.svg" alt="" />
          <input type="text" placeholder="Хайх... " />
        </div>
      </div>
      <div>
        <ProductTable items={items} setItems={setItems} />
      </div>
    </div>
  );
}
