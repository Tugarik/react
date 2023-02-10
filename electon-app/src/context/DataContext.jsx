import { createContext, useContext, useState } from "react";

const AllContexts = createContext(null);

export function useDataContext() {
  return useContext(AllContexts);
}

export default function DataContext({ children }) {
  const [role, setRole] = useState();
  const [basketItems, setBasketItems] = useState();
  const [products, setProducts] = useState();

  return (
    <AllContexts.Provider
      value={{
        role,
        setRole,
        products,
        setProducts,
        basketItems,
        setBasketItems,
      }}
    >
      {children}
    </AllContexts.Provider>
  );
}
