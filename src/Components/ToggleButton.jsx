import React from "react";
import { useState } from "react";

export default function ToggleButton() {
  const [isLightMode, setIsLightMode] = useState(true);

  function changeMode() {
    setIsLightMode(!isLightMode);
  }
  return (
    <>
      <button className="toggle-btn" onClick={changeMode}></button>
      <p>{isLightMode ? "LIGHT" : "DARK"} MODE</p>
    </>
  );
}
