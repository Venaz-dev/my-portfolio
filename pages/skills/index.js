import React from "react";
import Layout from "../../components/Layout";
import Language from "../../components/canvas/language"

const Index = () => {
  return (
    <Layout page="skills">
      <div className="skillspage">
        <span style={{ top: "0", left: "10px" }}>{"<body>"}</span>
        <div className="text">
          <p className="tag">{"<h1>"}</p>
          <h1>Skills & Experience</h1>
          <p className="tag">{"</h1>"}</p>
          <p className="bio">
            The main area of my expertise is front end development (client side
            of the web).
          </p>
          <p className="bio">
            HTML, CSS, JS, building small and medium web apps with
            Next(React) js, Vue js, animations, and coding
            interactive layouts.
          </p>
          <p className="bio">
            I also have experience building with open source CMS like Wordpress
          </p>
        </div>
        <div className="circle">
            <Language />
        </div>

        <span style={{ bottom: "0", left: "10px" }}>{"</body>"}</span>
      </div>
    </Layout>
  );
};

export default Index;
