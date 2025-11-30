import React from "react";
import Image from "next/image";
import RubyImg from "../../../public/images/ruby.svg";
import RailsImg from "../../../public/images/rails.svg";
import GitHubImg from "../../../public/images/github-icon.svg";
import LinuxImg from "../../../public/images/linux-tux.svg";
import TypeScriptImg from "../../../public/images/typescript-icon.svg";
import NextJsImg from "../../../public/images/nextjs-icon.svg";
import NestJsImg from "../../../public/images/nestjs.svg";
import HtmlImg from "../../../public/images/html.svg";
import CssImg from "../../../public/images/css.svg";
import JavaScriptImg from "../../../public/images/javascript.svg";
import JavaImg from "../../../public/images/java.svg";
import JqueryImg from "../../../public/images/jquery.svg";
import OracleImg from "../../../public/images/oracle.svg";
import ReactImg from "../../../public/images/react.svg";
import SpringImg from "../../../public/images/spring.svg";
import VueJsImg from "../../../public/images/vuejs.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="skills" id="skills" ref={ref}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.0 }}>
        <h2>Skills</h2>
        <br/>
        <div className="skills-box">
          <div className="skill">
            <p>HTML</p>
            <div className="skill-img">
              <Image src={HtmlImg} />
            </div>
            <p>実務経験5年</p>
          </div>
          <div className="skill">
            <p>CSS</p>
            <div className="skill-img">
              <Image src={CssImg} alt="works-image" />
            </div>
            <p>実務経験5年</p>
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <div className="skill-img">
              <Image src={JavaScriptImg} alt="works-image" />
            </div>
            <p>実務経験5年</p>
          </div>
          <div className="skill">
            <p>TypeScript</p>
            <div className="skill-img">
              <Image src={TypeScriptImg} alt="works-image" />
            </div>
            <p>実務経験3年</p>
          </div>
          <div className="skill">
            <p>Vue.js</p>
            <div className="skill-img">
              <Image src={VueJsImg} alt="works-image" />
            </div>
            <p>実務経験1.9年</p>
          </div>
          <div className="skill">
            <p>jQuery</p>
            <div className="skill-img">
              <Image src={JqueryImg} alt="works-image" />
            </div>
            <p>実務経験2年</p>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="skill-img">
              <Image src={ReactImg} alt="works-image" />
            </div>
            <p>独学7ヶ月</p>
          </div>
          <div className="skill">
            <p>Next.js</p>
            <div className="skill-img">
              <Image src={NextJsImg} alt="works-image" />
            </div>
            <p>独学7ヶ月</p>
          </div>
          <div className="skill">
            <p>Nest.js</p>
            <div className="skill-img">
              <Image src={NestJsImg} alt="works-image" />
            </div>
            <p>独学1ヶ月</p>
          </div>
          <div className="skill">
            <p>Java</p>
            <div className="skill-img">
              <Image src={JavaImg} alt="works-image" />
            </div>
            <p>実務経験3.7年</p>
          </div>
          <div className="skill">
            <p>SpringBoot</p>
            <div className="skill-img">
              <Image src={SpringImg} alt="works-image" />
            </div>
            <p>実務経験1.6年</p>
          </div>
          <div className="skill">
            <p>SQL</p>
            <div className="skill-img">
              <Image src={OracleImg} alt="works-image" />
            </div>
            <p>実務経験3年</p>
          </div>
          <div className="skill">
            <p>Ruby</p>
            <div className="skill-img">
              <Image src={RubyImg} alt="works-image" />
            </div>
            <p>独学3ヶ月</p>
          </div>
          <div className="skill">
            <p>Rails</p>
            <div className="skill-img">
              <Image src={RailsImg} alt="works-image" />
            </div>
            <p>独学3ヶ月</p>
          </div>
          <div className="skill">
            <p>Git/GitHub</p>
            <div className="skill-img">
              <Image src={GitHubImg} alt="works-image" />
            </div>
            <p>実務経験3年</p>
          </div>
          <div className="skill">
            <p>Linux</p>
            <div className="skill-img">
              <Image src={LinuxImg} alt="works-image" />
            </div>
            <p>実務経験5年</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
