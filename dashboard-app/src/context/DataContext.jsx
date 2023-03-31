import { createContext, useContext, useState } from "react";

const AllContexts = createContext(null);

export function useDataContext() {
  return useContext(AllContexts);
}

export default function DataContext({ children }) {
  const [role, setRole] = useState("admin");
  const [items, setItems] = useState();
  const [users, setUsers] = useState();
  const [data, setData] = useState();
  const [isDesc, setIsDesc] = useState();
  const [portion, setPortion] = useState(1);
  const [current, setCurrent] = useState(localStorage.getItem("menu") || 0);

  return (
    <AllContexts.Provider
      value={{
        role,
        setRole,
        data,
        setData,
        isDesc,
        setIsDesc,
        portion,
        setPortion,
        items,
        setItems,
        users,
        setUsers,
        current,
        setCurrent,
      }}
    >
      {children}
    </AllContexts.Provider>
  );
}
