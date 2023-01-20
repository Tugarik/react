import { createContext, useContext, useEffect, useState } from "react";

const CurrentUserContext = createContext(null);
const SampleContext = createContext(null);
const SecondContext = createContext(null);
const ThirdContext = createContext(null);

function useSampleContext() {
  return useContext(SampleContext);
}
function useThirdContext() {
  return useContext(ThirdContext);
}
export default function App() {
  const [test, setTest] = useState("first");
  const [c, setC] = useState("c");
  const a = "a";
  const [currentUser, setCurrentUser] = useState(null);
  const b = "b";

  return (
    <ThirdContext.Provider value={{ c, setC }}>
      <SecondContext.Provider value={{ a, b }}>
        <SampleContext.Provider value={{ test, setTest }}>
          <CurrentUserContext.Provider
            value={{
              currentUser,
              setCurrentUser,
            }}
          >
            <Form />
          </CurrentUserContext.Provider>
        </SampleContext.Provider>
      </SecondContext.Provider>
    </ThirdContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Login />
      <Section1>Section 1a</Section1>
    </Panel>
  );
}

function Login() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { c, setC } = useThirdContext();
  useEffect(() => {
    setC("CC");
  }, []);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Tuga" });
      }}
    >
      Log in as Tuga
    </Button>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
      {/* Log in as Tuga */}
    </button>
  );
}

function Section1({ children }) {
  const { test, setTest } = useSampleContext();
  const { a, b } = useContext(SecondContext);
  const { c } = useContext(ThirdContext);
  useEffect(() => {
    setTest("third");
  }, []);

  console.log(test);
  console.log(a);
  console.log(c);
  // console.log(d);
  return (
    <section className="section1">
      <p>{children}</p>
      <p>Section 1b</p>
      <p>
        {a}, {b}, {c}
      </p>
    </section>
  );
}
