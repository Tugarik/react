import "../styles/settings.css";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

export default function Settings() {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [param, setParam] = useState(); 

  useEffect(() => {
    setToggle(true);
    try {
      axios
        .get(`http://localhost:5000/brands`)
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error.message);
    }
  }, [setData]);

  return (
  <div className="settings">
    <p>Category:</p>
    <button className="blueBtn" id="addCategoryBtn">Add Category</button>
    <form>
      <input name="categoryName"/>
      <input name="categoryImage" type="file"/>
      <input type="button" value="Create"/>
    </form>
    <p>Brands:</p>
  
      {toggle && (
        <div className="cardBox d-flex flex-wrap">
          {data &&
            data.map((data, index) => {
              return (
                <Card className="card" key={index}>
                  <Card.Img
                    variant="top"
                    src={`${data.image}`}
                    className="cardImage"
                  />
                  <Card.Body>
                    <button
                      key={index}
                      className="menuBtn menuBtn-active"
                      onClick={(e) => {
                        e.preventDefault();
                        setToggle(false);
                        setShow(true);
                        setParam(data.brandName);
                      }}
                    >
                      {data.brandName}
                    </button>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      )}
      {show && <ByBrand param={param} />}
  


  </div>
  );
}
