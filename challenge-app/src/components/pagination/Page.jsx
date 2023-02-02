import { useParams } from "react-router-dom";

export default function Page() {
  const { pageId } = useParams();

  return <div className="page">Page: {pageId}</div>;
}
