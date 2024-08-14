import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Status from "./components/Status";
import Counter from "./components/Counter";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="Counter App" />
      <Content content="Welcome to my website!" />

      <Counter count={count} setCount={setCount} />

      <Status count={count} />

      <Footer year={1999} />
    </div>
  );
}

export default App;
