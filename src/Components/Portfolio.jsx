/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My New Data Structures & Algorithms Video Lessons",
    description:
      "This will be beneficial for your work, as I focus on and create informative videos on a subject that I enjoy working on and thinking about.",
    url: "https://www.youtube.com/channel/UCM8vr78iMpGIvCfAQz7kAWA",
  },
  {
    title: "My Latest Medium Articles",
    description:
      "My Medium articles, prepared on various detailed topics, will open up new horizons for you.",
    url: "https://medium.com/@cankrs",
  },
  {
    title: "My Unity Game",
    description:
      "While playing this beautiful and enjoyable game, you might find it a bit challenging. However, once you finish it, you will experience joy.",
    url: "https://play.unity.com/mg/other/webgl-builds-336347",
  },
  {
    title: "My Resume Site",
    description:
    "To access detailed information about me, you can refer to my Resume.",
    url: "https://docs.google.com/document/d/1zvShuwVBK7xsK4qxxAwtUIWsvDhzHVC8/edit?usp=sharing&ouid=110481057169125212180&rtpof=true&sd=true",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
