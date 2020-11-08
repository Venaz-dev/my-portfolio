import React from "react";
import Layout from "../../components/Layout";
import Circle from "../../components/canvas/circle";
import Link from "next/link";

const Index = () => {
  return (
    <Layout page="contact">
      <div className="aboutpage">
        <span style={{ top: "0", left: "10px" }}>{"<body>"}</span>
        <div className="text">
          <p className="tag">{"<h1>"}</p>
          <h1>Contact me</h1>
          <p className="tag">{"</h1>"}</p>
          <p className="bio">
            I am interested in frontend development opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to contact me.
          </p>
         <div>
            <p className="contact-details"><b>Email:</b> chibuzo.madu90@gmail.com</p>
         </div>
        </div>
        <div className="circle"></div>

        <span style={{ bottom: "0", left: "10px" }}>{"</body>"}</span>
      </div>
    </Layout>
  );
};

export default Index;
