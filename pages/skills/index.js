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
            The main area of my expertise is front end development (client side
            of the web).
          </p>
          <p className="bio">
            HTML, CSS, JS, building small and medium web apps with Next(React)
            js, Vue js, animations, and coding interactive layouts.
          </p>
          <p className="bio">
            I also have experience building with open source CMS like Wordpress
          </p>
          <p className="bio">
            Visit my <a href="linkedin.com">linkedIn</a> profile or just{" "}
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
