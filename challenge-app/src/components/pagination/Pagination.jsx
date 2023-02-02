import PaginationBtn from "./PaginationBtn";
import "./pagination.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(6);
  const [lastPage, setLastPage] = useState();
  useEffect(() => {
    try {
      axios
        .get("http://localhost:5001/pages")
        .then((res) => setLastPage(res.data));
    } catch (err) {
      console.log(err.messsage);
    }
  }, []);

  return (
    <div className="paginationBox">
      {currentPage >= 2 && (
        <Link
          to={`/pages/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PaginationBtn btnName={"Өмнөх"} btnClass={"inactive"} />
        </Link>
      )}

      {currentPage >= 5 && (
        <Link to="/pages/1" onClick={() => setCurrentPage(1)}>
          <PaginationBtn btnName={"1"} btnClass={"inactive"} />
        </Link>
      )}

      {currentPage > 5 && <span className="dots">...</span>}
      {currentPage >= 4 && (
        <Link
          to={`/pages/${currentPage - 3}`}
          onClick={() => setCurrentPage(currentPage - 3)}
        >
          <PaginationBtn btnName={currentPage - 3} btnClass={"inactive"} />
        </Link>
      )}
      {currentPage >= 3 && (
        <Link
          to={`/pages/${currentPage - 2}`}
          onClick={() => setCurrentPage(currentPage - 2)}
        >
          <PaginationBtn btnName={currentPage - 2} btnClass={"inactive"} />
        </Link>
      )}
      {currentPage >= 2 && (
        <Link
          to={`/pages/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PaginationBtn btnName={currentPage - 1} btnClass={"inactive"} />
        </Link>
      )}

      <Link to={`/pages/${currentPage}`}>
        <PaginationBtn btnName={currentPage} btnClass={"active"} />
      </Link>

      {currentPage < lastPage - 1 && (
        <Link
          to={`/pages/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PaginationBtn btnName={currentPage + 1} btnClass={"inactive"} />
        </Link>
      )}

      {currentPage < lastPage - 2 && (
        <Link
          to={`/pages/${currentPage + 2}`}
          onClick={() => setCurrentPage(currentPage + 2)}
        >
          <PaginationBtn btnName={currentPage + 2} btnClass={"inactive"} />
        </Link>
      )}

      {currentPage < lastPage - 3 && (
        <Link
          to={`/pages/${currentPage + 3}`}
          onClick={() => setCurrentPage(currentPage + 3)}
        >
          <PaginationBtn btnName={currentPage + 3} btnClass={"inactive"} />
        </Link>
      )}

      {currentPage < lastPage - 4 && <span className="dots">...</span>}
      {currentPage < lastPage && (
        <Link
          to={`/pages/${lastPage}`}
          onClick={() => setCurrentPage(lastPage)}
        >
          <PaginationBtn btnName={lastPage} btnClass={"inactive"} />
        </Link>
      )}

      {currentPage < lastPage && (
        <Link
          to={`/pages/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PaginationBtn btnName={"Дараах"} btnClass={"inactive"} />
        </Link>
      )}
    </div>
  );
}
