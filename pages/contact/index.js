import React from "react";
import Layout from "../../components/Layout";
import Circle from "../../components/canvas/circle";
import Link from "next/link";
import TextAnimation from "../../components/animation/text_animation";

const Index = () => {
  return (
    <Layout page="contact">
      <div className="aboutpage">
        <span style={{ top: "0", left: "10px" }}>{"<body>"}</span>
        <div className="text">
          <p className="tag">{"<h1>"}</p>
          <TextAnimation text="Contact me"/>
          
          <p className="tag">{"</h1>"}</p>
          <p className="bio">
            I am interested in frontend development opportunities – especially
            ambitious or large projects. However, if you have other request or
            question, don’t hesitate to contact me.
          </p>
          <div>
            <p className="contact-details">
              <b>Email:</b> chibuzo.madu90@gmail.com
            </p>
            <p className="contact-details">
              <b>Location:</b> Rivers State, Nigeria
            </p>
          </div>
        </div>
        <div className="maps">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="650"
                height="800"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=port%20harcourt%2C%20nigeria&t=&z=5&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <a href="https://www.whatismyip-address.com/nordvpn-coupon/"></a>
            </div>
            {/* <style>.mapouter{position:relative;text-align:right;height:800px;width:650px;}.gmap_canvas {overflow:hidden;background:none!important;height:800px;width:650px;}</style> */}
          </div>
        </div>

        <span style={{ bottom: "0", left: "10px" }}>{"</body>"}</span>
      </div>
    </Layout>
  );
};

export default Index;
