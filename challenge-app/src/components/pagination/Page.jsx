import { useParams } from "react-router-dom";

export default function Page() {
  const { pageId } = useParams();
  return (
    <div className="page">
      <h3>Page: {pageId ? pageId : 1}</h3>

      <div className="itemBox">
        <div className="item">Item-{pageId ? pageId * 5 - 4 : 1}</div>
        <div className="item">Item-{pageId ? pageId * 5 - 3 : 2}</div>
        <div className="item">Item-{pageId ? pageId * 5 - 2 : 3}</div>
        <div className="item">Item-{pageId ? pageId * 5 - 1 : 4}</div>
        <div className="item">Item-{pageId ? pageId * 5 : 5}</div>
      </div>
    </div>
  );
}
