import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import NextPortfolioSiteImage from "../../../public/images/next-portfolio-site.png";
import PhotoSearchAppImage from "../../../public/images/photo-search-app.png";
import MeisouAppImage from "../../../public/images/meisou-app.png";
import ReactTodoListImage from "../../../public/images/react-todo-list.png";
import NextBlogAppImage from "../../../public/images/next-blog-app.png";
import Link from "next/link";

function Works() {
  const [ref, inView] = useInView({ triggerOnce: true, });
  const [ref2, inView2] = useInView({ triggerOnce: true, });
  const [ref3, inView3] = useInView({ triggerOnce: true, });
  const [ref4, inView4] = useInView({ triggerOnce: true, });
  const [ref5, inView5] = useInView({ triggerOnce: true, });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="works" id="works">
      <h2>制作物</h2>
      <p style={{ fontSize: "0.85rem", fontWeight: "normal", marginTop: "8px", marginBottom: "16px" }}>
        ReactやNext.jsを用いた制作物です。<br/>生成AI（Claude Code）を活用した制作物も含みます。
      </p>
      <div className="works-app-box">
        <div className="works-app" ref={ref}>
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <Link href="/works/portfolio-site">
              <div className="works-img">
                <Image src={NextPortfolioSiteImage} alt="works-image" />
              </div>
            </Link>
            <p style={{ fontSize: "0.75rem", fontWeight: "normal", marginBottom: "12px" }}>使用技術：Next.js</p>
            <p style={{ fontSize: "0.75rem", color: "#a78bfa", margin: "8px 0 4px" }}>使用ツール：VS Code, ChatGPT, Claude Code</p>
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
        <div className="works-app" ref={ref2}>
          <motion.div initial="hidden" animate={inView2 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <Image src={PhotoSearchAppImage} alt="works-image" />
            </div>
            <p style={{ fontSize: "0.75rem", fontWeight: "normal", marginBottom: "12px" }}>使用技術：React</p>
            <p style={{ fontSize: "0.75rem", color: "#a78bfa", margin: "8px 0 4px" }}>使用ツール：VS Code, ChatGPT</p>
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
        <div className="works-app" ref={ref3}>
          <motion.div initial="hidden" animate={inView3 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <Image src={MeisouAppImage} alt="meisou-app" />
            </div>
            <p style={{ fontSize: "1.1rem", margin: "12px 0" }}>瞑想アプリ</p>
            <p style={{ fontSize: "0.8rem", fontWeight: "normal", marginBottom: "8px" }}>
              集中・リラックスをサポートする瞑想タイマーアプリ
            </p>
            <p style={{ fontSize: "0.75rem", fontWeight: "normal", marginBottom: "12px" }}>使用技術：Next.js</p>
            <p style={{ fontSize: "0.75rem", color: "#a78bfa", margin: "4px 0 4px" }}>使用ツール：VS Code, Claude Code</p>
            <div className="button-link">
              <a href="https://serene-meditation-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>瞑想アプリ</span>
              </a>
              <a href="https://github.com/shin-tc-10/serene-meditation-app" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>ソースコード</span>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="works-app" ref={ref4}>
          <motion.div initial="hidden" animate={inView4 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <Image src={ReactTodoListImage} alt="react-todo-list" />
            </div>
            <p style={{ fontSize: "0.75rem", fontWeight: "normal", marginBottom: "12px" }}>使用技術：React</p>
            <p style={{ fontSize: "0.75rem", color: "#a78bfa", margin: "8px 0 4px" }}>使用ツール：VS Code, ChatGPT</p>
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
        <div className="works-app" ref={ref5}>
          <motion.div initial="hidden" animate={inView5 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <Image src={NextBlogAppImage} alt="next-blog-app" />
            </div>
            <p style={{ fontSize: "0.75rem", fontWeight: "normal", marginBottom: "12px" }}>使用技術：Next.js</p>
            <p style={{ fontSize: "0.75rem", color: "#a78bfa", margin: "8px 0 4px" }}>使用ツール：VS Code, ChatGPT</p>
            <div className="button-link">
              <span className="btn btn-flat" style={{ opacity: 0.4, cursor: "not-allowed", pointerEvents: "none" }}>
                Blog App（現在停止中）
              </span>
              <a href="https://github.com/shin-tc-10/next-blog-app" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
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
