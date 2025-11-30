import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import NextPortfolioSiteImage from "../../../public/images/next-portfolio-site.png";
import ReactTodoListImage from "../../../public/images/react-todo-list.png";
import NextBlogAppImage from "../../../public/images/next-blog-app.png";
import PhotoSearchAppImage from "../../../public/images/photo-search-app.png";
import Link from 'next/link'


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
      <br/>
      <div className="works-app-box">
        <div className="works-app" ref={ref2}>
          <motion.div initial="hidden" animate={inView2 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <Image src={NextPortfolioSiteImage} alt="works-image" />
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
        <div className="works-app" ref={ref}>
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }} >
            <div className="works-img sample7">
              <Image src={ReactTodoListImage} alt="works-image" width={500} height={300} loading="lazy" />
              {/* <Link href="/components/pages">
                <div class="mask">
                  <div class="caption">詳細を見る</div>
                </div>
              </Link> */}
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
        <div className="works-app" ref={ref3}>
          <motion.div initial="hidden" animate={inView3 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <Image src={NextBlogAppImage} alt="works-image" />
            </div>
            <div className="button-link">
              {/* <a href="https://shin-next-blog-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>Blog App</span>
              </a> */}
              <a href="https://github.com/shin-tc-10/next-blog-app" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>ソースコード</span>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="works-app" ref={ref4}>
          <motion.div initial="hidden" animate={inView4 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <Image src={PhotoSearchAppImage} />
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
