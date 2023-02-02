import { createContext, useContext, useState } from "react";

const AllContexts = createContext(null);

export function useDataContext() {
  return useContext(AllContexts);
}

export default function DataContext({ children }) {
  const [role, setRole] = useState("admin");
  const [items, setItems] = useState();
  const [users, setUsers] = useState();

  return (
    <AllContexts.Provider
      value={{
        role,
        setRole,
        items,
        setItems,
        users,
        setUsers,
      }}
    >
      {children}
    </AllContexts.Provider>
  );
}
