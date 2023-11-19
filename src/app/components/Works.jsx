import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import PortfolioWebsiteImg from "../../../public/images/portfolio-website.png";
import TodoApp from "../../../public/images/react-todo-app.png";
import NextSnsAppImg from "../../../public/images/next-sns-app.png";
import PhotoSearchAppImg from "../../../public/images/photo-search-app.png";


function Works() {
  const [ref, inView] = useInView({ triggerOnce: true, });
  const [ref2, inView2] = useInView({ triggerOnce: true, });
  const [ref3, inView3] = useInView({ triggerOnce: true, });
  const [ref4, inView4] = useInView({ triggerOnce: true, });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="works" id="works">
      <h2>Works</h2>
      <p>ReactまたはNext.jsで制作したWebアプリです。</p>
      <br/>
      <div className="works-app-box">
        <div className="works-app" ref={ref}>
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }} >
            <div className="works-img">
              <Image src={TodoApp} alt="works-image" />
            </div>
            <div className="button-link">
                <a href="https://react-first-todo.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                  <span>Todo App</span>
                </a>
                <a href="https://github.com/shin-tc-10/react-first-todo" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                  <span>ソースコード</span>
                </a>
            </div>
          </motion.div>
        </div>
        <div className="works-app" ref={ref2}>
          <motion.div initial="hidden" animate={inView2 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <Image src={PortfolioWebsiteImg} alt="works-image" />
            </div>
            <div className="button-link">
              <a href="https://shin-react-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>Portfolio Site</span>
              </a>
              <a href="https://github.com/shin-tc-10/shin-react-portfolio" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>ソースコード</span>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="works-app" ref={ref3}>
          <motion.div initial="hidden" animate={inView3 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <Image src={NextSnsAppImg} alt="works-image" />
            </div>
            <div className="button-link">
              <a href="https://next-sns-client-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>SNS App</span>
              </a>
              <a href="https://github.com/shin-tc-10/next-sns-client" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>ソースコード</span>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="works-app" ref={ref4}>
          <motion.div initial="hidden" animate={inView4 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <Image src={PhotoSearchAppImg} />
            </div>
            <div className="button-link">
              <a href="https://next-photo-search-blond.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>Photo Search</span>
              </a>
              <a href="https://github.com/shin-tc-10/next-photo-search" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>ソースコード</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Works;