import React from "react";

export default function Button({ buttonType, className = "" }) {
  return <button className={`button ${className}`}>{buttonType}</button>;
}
