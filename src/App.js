import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Title from "./Components/Title";
import ToggleButton from "./Components/ToggleButton";
import Card from "./Components/Card";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [isLightMode]);
  return (
    <div className="container">
      <Header />
      <ToggleButton isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <Title />
      <Card />
    </div>
  );
}

export default App;
