import React from "react";
import Layout from "../../components/Layout";
import TextAnimation from "../../components/animation/text_animation";
import portfolio from "../../shared/works";
import Link from "next/link";

const Index = () => {
  return (
    <Layout page="works">
      <div className="workspage">
        <div className="text">
          <TextAnimation text="My Projects" />
        </div>
        <div className="projects">
          {portfolio.map((item) => (
            <div className="project-item">
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="text-holder">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="tools">
                {item.tags.map((tool) => (
                  <p key={tool.id} className="tool">
                    {tool.name}
                  </p>
                ))}
              </div>
              <div>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <div className="visit-link">
                    <p>Visit Project</p>
                    <div className="link-arrow">
                      <img
                        src={require("../../public/assets/external_link.svg")}
                      />
                      <img
                        src={require("../../public/assets/external_link_hover.svg")}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
