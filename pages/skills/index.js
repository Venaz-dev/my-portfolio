import React from "react";
import Layout from "../../components/Layout";
import Language from "../../components/canvas/language";
import Link from "next/link";
import TextAnimation from "../../components/animation/text_animation";

const Index = () => {
  return (
    <Layout page="skills">
      <div className="skillspage">
        <span style={{ top: "0", left: "10px" }}>{"<body>"}</span>
        <div className="text">
          <p className="tag">{"<h1>"}</p>
          <TextAnimation text="Skills & Experience" />
          {/* <TextAnimation text=" & " /> */}
          {/* <TextAnimation text="" /> */}
          {/* <h1>Skills & Experience</h1> */}
          <p className="tag">{"</h1>"}</p>
          <p className="bio">
            My primary specialization lies in front-end development, focusing on
            the client-side aspect of web development.
          </p>
          <p className="bio">
            <ul>
              <li>HTML</li>
              <li>CSS / SCSS</li>
              <li>Wordpress</li>
              <li>Javascript</li>
              <li>Typescript </li>
              <li>ReactJS & React Hooks </li>
              <li>Nextjs </li>
              <li>Vuejs </li>
              <li>Google Searching </li>
              <li>Git and Github </li>
            </ul>
          </p>

          <p className="bio">
            Visit my{" "}
            <a href="https://www.linkedin.com/in/chibuzo-madumere/">linkedIn</a>{" "}
            profile or just{" "}
            <Link href="/contact">
              <a>contact</a>
            </Link>{" "}
            me.
          </p>
        </div>
        {/* <div className="circle">
          <Language />
        </div> */}

        <span style={{ bottom: "0", left: "10px" }}>{"</body>"}</span>
      </div>
    </Layout>
  );
};

export default Index;
