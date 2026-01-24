import React from "react";

export default function ToggleButton({ isLightMode, setIsLightMode }) {
  function changeMode() {
    setIsLightMode(!isLightMode);
  }
  return (
    <>
      <div className="toggle-btn">
        <input type="checkbox" onChange={changeMode} id="toggle-input" />
        <span className="slider"></span>
      </div>
      <p>{isLightMode ? "LIGHT" : "DARK"} MODE</p>
    </>
  );
}
