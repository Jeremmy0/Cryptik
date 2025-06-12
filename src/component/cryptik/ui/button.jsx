"use client";
import { useState } from "react";

const Button = ({ classNa }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      type="button"
      className={`
        rounded-full bg-green-400 py-2 px-4 shadow-green-400 shadow-md border border-[#6fffd4a9]
        transition-all duration-150
        hover:bg-green-500 hover:shadow-lg
        active:bg-green-600 active:scale-95
        ${isPressed ? "bg-green-600 scale-95" : ""}
        ${classNa}
      `}
      style={{ outline: "none" }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <span className="text-black font-medium">Get Started Now</span>
    </button>
  );
};

export default Button;