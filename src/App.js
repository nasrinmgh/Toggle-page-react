import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Title from "./Components/Title";
import ToggleButton from "./Components/ToggleButton";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <div className={isLightMode ? "light" : "dark"}>
      <Header />
      <ToggleButton isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <Title />
    </div>
  );
}

export default App;
