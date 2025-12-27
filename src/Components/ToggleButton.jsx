import React from "react";
import { useState } from "react";

export default function ToggleButton() {
  const [isLightMode, setIsLightMode] = useState(true);

  function changeMode() {
    setIsLightMode(!isLightMode);
  }
  return (
    <>
      <label htmlFor="">
        <input type="checkbox" onChange={changeMode} />
        <span className=""></span>
      </label>
      <p>{isLightMode ? "LIGHT" : "DARK"} MODE</p>
    </>
  );
}
