export function SpecForm() {
  return (
    <div className="specBox" key={index}>
      <input
        className="inputAddItem mt-2"
        type="text"
        placeholder="Үзүүлэлт"
        id="specKey"
        onChange={(e) => 
          setSpecKey(e.target.value);
        }
      />
      <input
        className="inputAddItem mt-2"
        type="text"
        placeholder="Үзүүлэлтийн утга"
        id="specValue"
        onChange={(e) => setSpecValue(e.target.value)}
      />
    </div>
  );
}
