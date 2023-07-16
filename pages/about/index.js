import React from "react";
import Layout from "../../components/Layout";
import Circle from "../../components/canvas/circle";
import Link from "next/link";
import TextAnimation from "../../components/animation/text_animation";

const Index = () => {
  return (
    <Layout page="about">
      <div className="aboutpage">
        <span style={{ top: "0", left: "10px" }}>{"<body>"}</span>
        <div className="text">
          <p className="tag">{"<h1>"}</p>
          <TextAnimation text="About me" />
          {/* <h1>About me</h1> */}
          <p className="tag">{"</h1>"}</p>
          <p className="bio">
            I am a Nigeria-based Frontend Developer with substantial experience
            in the software and information technology industry.
          </p>
          <p className="bio">
            Throughout my professional journey, I have actively engaged with
            various aspects of this field, consistently seeking opportunities to
            enhance my knowledge and expertise.
          </p>
          <p className="bio">
            I dedicate a significant portion of my time to exploring new ways to
            challenge and push the boundaries of web development.
          </p>

          <p className="bio">
            As a well-organized individual, I excel in problem-solving and
            possess a keen eye for detail. Additionally, I am an avid enthusiast
            of gaming, outdoor activities, and have recently ventured into
            content creation.
          </p>

          <p className="bio">
            My interests includes the entirety of the web spectrum, but more
            specialized on the front-end and I am committed to continuously
            improving my{" "}
            <Link href="/skills">
              <a>skills</a>
            </Link>{" "}
            while collaborating on ambitious projects alongside like-minded and
            positive individuals.
          </p>
        </div>
        <div className="image">
          <img src={require("../../public/assets/potrait.png")} />
        </div>

        <span style={{ bottom: "0", left: "10px" }}>{"</body>"}</span>
      </div>
    </Layout>
  );
};

export default Index;
