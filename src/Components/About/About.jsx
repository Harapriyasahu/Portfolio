import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";



const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  
  return (
    <div
      className={styles.container}
      style={{boxShadow: `3px 3px 5px ${newTheme.line}`}}
    >
      <div className={styles.first}>
        <img
          src={
            // "https://github.com/Swapnil1296/portfolio_images/blob/main/images/developer.gif?raw=true"
            "https://www.linkpicture.com/q/photo-1569012871812-f38ee64cd54c.jfif"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{color: `${newTheme.title}`}} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{color: `${newTheme.para}`}} className={styles.aboutMe}>
          Hello! My name is Harapriya Sahu and I enjoy creating things that
          live on the internet.<br/>
          Enjoys working on dynamic web projects and writing easy-to-read code.. <br />
          <br /> Fast Forwarding to today, I built a number of web applications
          and major projects. Learned a great deal about teamwork, leadership,
          and communication. After months of rigorous training, here I am
          <span style={{color: `#00a0a0`}}>
            {" "}
            looking for an opportunity as a full stack web developer<br/>
          </span>
          
            <br/>
            Apart from coding, some other activities that I love to do!
            <ul>
            <li className="about-activity">
               Cooking
            </li>
            <li className="about-activity">
               Reading Blogs
            </li>
            <li className="about-activity">
               Travelling
            </li>
          </ul>
          
        </p>
      </div>
    </div>
  );
};

export default About;