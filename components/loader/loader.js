import React, { useEffect, useRef } from "react";

const Loader = ({ loading }) => {
  const loaderRef = useRef();
  const barRef = useRef();

  const showLoader = () => {
    if (loading) {
      loaderRef.current.style.transform = "translateX(0)";
      barRef.current.style.backgroundPosition = "0 100%";
    } else {
      loaderRef.current.style.transform = "translateX(-100vw)";
      setTimeout(() => {
        barRef.current.style.backgroundPosition = "right";
      }, 2000);
    }
  };

  useEffect(() => {
     showLoader()
  }, [loading]);
  return (
    <div ref={loaderRef} className="loader">
      <div ref={barRef} className="loading-bar"></div>
    </div>
  );
};

export default Loader;
