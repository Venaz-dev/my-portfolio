import React from "react";
import Layout from "../../components/Layout";
import TextAnimation from "../../components/animation/text_animation";
import portfolio from "../../shared/works";


const Index = () => {
  return (
    <Layout page="works">
      <div className="workspage">
        <div className="text">
          <TextAnimation text="My projects" />
        </div>
        <div className="projects">
          {portfolio.map((item) => (
            <div className="project-item">
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="text-holder">
                <h2>{item.title}</h2>
                <p>
                 {item.description}
                </p>
              </div>
              <div>
                <a href={item.url}>
                <button>Visit site</button>
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
