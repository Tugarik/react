import "./pagination.css";
import axios from "axios";
import PaginationBtn from "./PaginationBtn";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Pagination() {
  const { pageId } = useParams();
  const [currentPage, setCurrentPage] = useState(pageId ? Number(pageId) : 1);
  const [lastPage, setLastPage] = useState();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5001/pages")
        .then((res) => setLastPage(res.data[0].length));
    } catch (err) {
      console.log(err.messsage);
    }
  }, []);

  useEffect(() => {
    setCurrentPage(pageId ? Number(pageId) : 1);
  }, [pageId]);

  return (
    <div className="paginationBox">
      {currentPage >= 2 && (
        <Link
          to={`/pages/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PaginationBtn btnName={"Өмнөх"} btnClass={"page-numbers"} />
        </Link>
      )}

      {currentPage >= 5 && (
        <Link to="/pages" onClick={() => setCurrentPage(1)}>
          <PaginationBtn btnName={"1"} btnClass={"page-numbers"} />
        </Link>
      )}

      {currentPage > 5 && <span className="dots">...</span>}

      {currentPage >= 4 && (
        <Link
          to={`/pages/${currentPage - 3}`}
          onClick={() => setCurrentPage(currentPage - 3)}
        >
          <PaginationBtn btnName={currentPage - 3} btnClass={"page-numbers"} />
        </Link>
      )}
      {currentPage >= 3 && (
        <Link
          to={`/pages/${currentPage - 2}`}
          onClick={() => setCurrentPage(currentPage - 2)}
        >
          <PaginationBtn btnName={currentPage - 2} btnClass={"page-numbers"} />
        </Link>
      )}
      {currentPage >= 2 && (
        <Link
          to={`/pages/${currentPage - 1}`}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          <PaginationBtn btnName={currentPage - 1} btnClass={"page-numbers"} />
        </Link>
      )}

      <Link to={`/pages/${currentPage}`}>
        <PaginationBtn btnName={currentPage} btnClass={"page-numbers active"} />
      </Link>

      {currentPage < lastPage - 1 && (
        <Link
          to={`/pages/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PaginationBtn btnName={currentPage + 1} btnClass={"page-numbers"} />
        </Link>
      )}

      {currentPage < lastPage - 2 && (
        <Link
          to={`/pages/${currentPage + 2}`}
          onClick={() => setCurrentPage(currentPage + 2)}
        >
          <PaginationBtn btnName={currentPage + 2} btnClass={"page-numbers"} />
        </Link>
      )}

      {currentPage < lastPage - 3 && (
        <Link
          to={`/pages/${currentPage + 3}`}
          onClick={() => setCurrentPage(currentPage + 3)}
        >
          <PaginationBtn btnName={currentPage + 3} btnClass={"page-numbers"} />
        </Link>
      )}

      {currentPage < lastPage - 4 && <span className="dots">...</span>}
      {currentPage < lastPage && (
        <Link
          to={`/pages/${lastPage}`}
          onClick={() => setCurrentPage(lastPage)}
        >
          <PaginationBtn btnName={lastPage} btnClass={"page-numbers"} />
        </Link>
      )}

      {currentPage < lastPage && (
        <Link
          to={`/pages/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PaginationBtn btnName={"Дараах"} btnClass={"page-numbers"} />
        </Link>
      )}
    </div>
  );
}
