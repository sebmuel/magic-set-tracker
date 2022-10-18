import React from "react";

export default function Button({ onClickRef, children }) {
  return (
    <button
      type="button"
      onClick={onClickRef}
      className="font-medium rounded-lg text-sm px-5
    py-2.5 text-center mr-2 mb-2"
    >
      {children}
    </button>
  );
}
