import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const [count, setCount] = useState(0);
  const [location, setLocation] = useState("Mumbai");
  return (
    <>
      <main>
        <Card location={location} />
      </main>
    </>
  );
}

export default App;
