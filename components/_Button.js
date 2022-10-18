import React from "react";

export default function Button({ onClickRef, children }) {
  return (
    <button
      type="button"
      onClick={onClickRef}
      className="b bg-whity border border-whity py-2 px-6 text-lg rounded-lg fo font-fuzzyBold hover:bg-grayy transition-all"
    >
      {children}
    </button>
  );
}
