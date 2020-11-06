import React from "react";
import Layout from "../components/Layout";
import Circle from "../components/canvas/circle";

const Index = () => {
  return (
    <Layout page="home">
      <div className="homepage">
        <span style={{ top: "20px", left: "10px" }}>{"<body>"}</span>
        <div>
          <div className="text">
            <span style={{ top: "0", left: "10px" }}>{"<div>"}</span>
            <h1>
              Hi, I'm Chibuzo,
              <br />
              web developer.
            </h1>
            <p>front end web developer</p>
            <span style={{ bottom: "0", left: "10px" }}>{"</div>"}</span>
          </div>
          <div className="contact">
            <button className="link">Contact me!</button>
          </div>
        </div>
        <div className="circle">
          <Circle />
        </div>

        <span style={{ bottom: "20px", left: "10px" }}>{"</body>"}</span>
      </div>
    </Layout>
  );
};

export default Index;
