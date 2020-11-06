import React from "react";
import Layout from "../../components/Layout";
import Circle from "../../components/canvas/circle"

const Index = () => {
  return (
    <Layout page="about">
      <div className="aboutpage">
        <span style={{ top: "0", left: "10px" }}>{"<body>"}</span>
        <div className="text">
          <p className="tag">{"<h1>"}</p>
          <h1>About me</h1>
          <p className="tag">{"</h1>"}</p>
          <p className="bio">
            Professionally connected with the software  and
            information technology industry for some years.
          </p>
          <p className="bio">
            Well-organised person, problem solver, high attention to detail. Fan
            of gaming, outdoor activities and, recently, content creation.
          </p>
          <p className="bio">
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
          </p>
        </div>
        <div className="circle">

        </div>

        <span style={{ bottom: "0", left: "10px" }}>{"</body>"}</span>
      </div>
    </Layout>
  );
};

export default Index;
