import React, { useState } from "react";

const Linkedin = () => {
    const [color , setColor] = useState("#444444")
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      on
      version="1.1"
      width="25"
      height="25"
      x="0"
      y="0"
      viewBox="0 0 512 512"
    //   style="enable-background:new 0 0 512 512"
     
      onMouseOver={() => setColor("#8957FF")}
      onMouseLeave={() => setColor("#444444")}
    >
      <g>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0"
          fill={color}
          data-original="#000000"
          
        />
      </g>
    </svg>
  );
};

export default Linkedin;
