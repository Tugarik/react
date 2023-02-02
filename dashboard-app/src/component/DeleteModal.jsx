import axios from "axios";

export default function DeleteModal({ label, itemId, section, setItems }) {
  const removeElement = (itemId) => {
    console.log(itemId);
    console.log(`http://localhost:5000/${section}/${itemId}`);
    try {
      axios.delete(`http://localhost:5000/${section}/${itemId}`).then((res) => {
        if (res.data.success) {
          setItems(res.data.data);
        } else {
          console.log(res.data.success);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <button className="btn delBtn" onClick={() => removeElement(itemId)}>
        {label}
      </button>
    </>
  );
}
