import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import PortfolioWebsiteImg from "../images/portfolio-website.png";
import TodoApp from "../images/todo-app.png";
import SampleImg from "../images/sample.png";

function Works() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
  });
  const [ref6, inView6] = useInView({
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="works" id="works">
      <h2>Works</h2>
      <div className="works-app-box">
        <div className="works-app" ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 2.5 }}
          >
            <p>React Todo App</p>
            <div className="works-img">
              <img src={TodoApp} alt="works-image" />
            </div>
            <a
              href="https://react-todo-app-delta-silk.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              URL：https://react-todo-app-delta-silk.vercel.app/
            </a>
          </motion.div>
        </div>
        <div className="works-app" ref={ref2}>
          <motion.div
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 2.5 }}
          >
            <p>React Web Site</p>
            <div className="works-img">
              <a href="/react-portfolio/WebSite">
                <img src={PortfolioWebsiteImg} alt="works-image" />
              </a>
            </div>
            <a
              href="https://shin-tc-10.github.io/react-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              URL：https://shin-tc-10.github.io/react-portfolio/
            </a>
          </motion.div>
        </div>
        <div className="works-app" ref={ref3}>
          <motion.div
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 2.5 }}
          >
            <p>Next.js SNS App</p>
            <div className="works-img">
              <a href="/react-portfolio/NextSnsApp">
                <img src={SampleImg} alt="works-image" />
              </a>
            </div>
            <p>URL：comming soon</p>
          </motion.div>
        </div>
        <div className="works-app" ref={ref4}>
          <motion.div
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 2.5 }}
          >
            <p>チャットアプリ</p>
            <div className="works-img">
              <img src={SampleImg} alt="works-image" />
            </div>
            <p>使用技術：React</p>
          </motion.div>
        </div>
        <div className="works-app" ref={ref5}>
          <motion.div
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 2.5 }}
          >
            <p>ブログアプリ</p>
            <div className="works-img">
              <a href="/react-portfolio/BlogApp">
                <img src={SampleImg} />
              </a>
            </div>
            <p>使用技術：React</p>
          </motion.div>
        </div>
        <div className="works-app" ref={ref6}>
          <motion.div
            initial="hidden"
            animate={inView6 ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 2.5 }}
          >
            <p>サンプルアプリ</p>
            <div className="works-img">
              <img src={SampleImg} alt="works-image" />
            </div>
            <p>使用技術：React</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Works;
