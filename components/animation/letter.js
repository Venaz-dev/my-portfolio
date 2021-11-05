import React, { useRef } from "react";

const Letter = ({ letter }) => {
  const letterRef = useRef();
  const animate = () => {
    letterRef.current.style.animation = "rubber linear 0.7s";
    setTimeout(() => {
      //   letterRef.current?.style?.animation = "none"
      letterRef.current.style.animation = "none";
    }, 1000);
  };

  return (
    <h1 className="letter" ref={letterRef} onMouseEnter={animate}>
      {letter.value === " " ? `${"\u00A0"}` : letter.value}
    </h1>
  );
};

export default Letter;
