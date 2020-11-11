import React, { useEffect, useState } from "react";
import Letter from "./letter"

const TextAnimation = ({ text }) => {
  const stringT = "Hello";
  let stringCon = text.split("");
  const [textArray, setArray] = useState([]);

  const pushArr = () => {
    let tempArr = [];
    for (let i in stringCon) {
      tempArr.push({
        value: stringCon[i],
        id: i,
      });
    }
    setArray(tempArr);
    
  };

  useEffect(() => {
    pushArr();
  }, []);
  return (
      <div className="letter-holder">
          {
              textArray.map(str => (
                  <Letter letter={str} key={str.id}/>
              ))
          }
      </div>
  );
};

export default TextAnimation;
