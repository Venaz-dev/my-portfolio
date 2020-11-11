import React, { useRef, useEffect } from "react";

const MenuIcon = ({active}) => {

    const firstLine = useRef()
    const secondLine = useRef()

    const changePosition = () =>{
        if(active){
            firstLine.current.style.transform = "rotate(40deg)"
            secondLine.current.style.transform = "translateY(25px) rotate(-40deg)"
        }else{
            firstLine.current.style.transform = "rotate(0deg)"
            secondLine.current.style.transform = "translateY(15px) "
        }
        
    }
    useEffect(() => {
       changePosition
    }, [active])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 16"
    >
      <g
        id="Component_1_2"
        data-name="Component 1 – 2"
        transform="translate(0 1)"
        // style={{transform: "rotate(20deg)"}}
      >
        <g id="Group_2" data-name="Group 2">
          <line
            id="Line_1"
            data-name="Line 1"
            x2={!active ? "40" : "50"}
            fill="none"
            stroke="#8957FF"
            stroke-width="2"
            ref={firstLine}
            // style={{transform: "rotate(40deg)"}}
          />
          <line
            id="Line_2"
            data-name="Line 2"
            x2={!active ? "40" : "50"}
            transform="translate(0 14)"
            fill="none"
            stroke="#8957FF"
            stroke-width="2"
            ref={secondLine}
            // style={{transform: " translateY(25px) rotate(-40deg)"}}
          />
        </g>
      </g>
    </svg>
  );
};

export default MenuIcon;
