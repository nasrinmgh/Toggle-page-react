import React from "react";
import Badge from "./Badge";

export default function Card() {
  return (
    <div className="card">
      <Badge buttonType={"Primary Action"} />
      <Badge buttonType={"Secondary"} />
      <Badge buttonType={" With Icon"} />
    </div>
  );
}
