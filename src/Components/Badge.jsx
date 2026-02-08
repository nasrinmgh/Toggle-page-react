import React from "react";

export default function Badge({ buttonType }) {
  return (
    <div className="badge">
      <p>{buttonType}</p>
    </div>
  );
}
