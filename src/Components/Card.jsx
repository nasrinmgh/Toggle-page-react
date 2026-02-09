import React from "react";
import Button from "./Button";

export default function Card() {
  return (
    <div className="card">
      <h3>Buttons</h3>
      <Button buttonType={"Primary Action"} className="button-primary" />
      <Button buttonType={"Secondary"} className="button-outline" />
      <Button buttonType={" With Icon"} className="button-ghost" />
    </div>
  );
}
