import React from "react";
import Layout from "../components/Layout";
import Circle from "../components/canvas/circle";
import TextAnimation from "../components/animation/text_animation";
import Link from "next/link";

const Index = () => {
  return (
    <Layout page="home">
      <div className="homepage">
        <span style={{ top: "20px", left: "10px" }}>{"<body>"}</span>
        <div>
          <div className="text">
            <span style={{ top: "0", left: "10px" }}>{"<div>"}</span>
            {/* <h1>
              Hi, I'm Chibuzo,
              <br />
              web developer.
            </h1> */}
            <div>
              <TextAnimation text="Hi, I'm Chibuzo" />
              <TextAnimation text="web developer" />
            </div>
            <p>front end web developer</p>
            <span style={{ bottom: "0", left: "10px" }}>{"</div>"}</span>
          </div>
          <div className="contact">
            <Link href="/about">
              <button className="link">About me!</button>
            </Link>
          </div>
        </div>
        <div className="circle">
          {/* <img src="https://media.giphy.com/media/ZYPdh6bDo8GgNvcR3w/source.gif"/> */}
          <Circle />
        </div>

        {/* <h1>H e l l o W o r l d</h1> */}

        <span style={{ bottom: "20px", left: "10px" }}>{"</body>"}</span>
      </div>
    </Layout>
  );
};

export default Index;
