import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import MeisouAppImage from "../../../public/images/meisou-app.png";

const AiWorks = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="works" id="aiWorks" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 2.0 }}
      >
        <h2>AI制作物</h2>
        <p style={{ fontSize: "0.85rem", marginTop: "8px", marginBottom: "24px", fontWeight: "normal" }}>
          生成AIを活用して開発した制作物です。
        </p>
        <div className="works-app-box">
          <div className="works-app" ref={ref}>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ duration: 2.5 }}
            >
              <p style={{ fontSize: "1.1rem", marginBottom: "12px" }}>TODOアプリ</p>
              <p style={{ fontSize: "0.8rem", fontWeight: "normal", marginBottom: "8px" }}>
                タスクの追加・編集・削除ができるタスク管理アプリ
              </p>
              <p style={{ fontSize: "0.75rem", color: "#a78bfa", marginBottom: "16px" }}>
                使用AI：Claude Code
              </p>
              <div className="button-link">
                <a
                  href="https://github.com/shin-tc-10/todo-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-flat"
                >
                  <span>ソースコード</span>
                </a>
              </div>
            </motion.div>
          </div>
          <div className="works-app" ref={ref2}>
            <motion.div
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ duration: 2.5 }}
            >
              <div className="works-img">
                <Image src={MeisouAppImage} alt="meisou-app" />
              </div>
              <p style={{ fontSize: "1.1rem", margin: "12px 0" }}>瞑想アプリ</p>
              <p style={{ fontSize: "0.8rem", fontWeight: "normal", marginBottom: "8px" }}>
                集中・リラックスをサポートする瞑想タイマーアプリ
              </p>
              <p style={{ fontSize: "0.75rem", color: "#a78bfa", marginBottom: "16px" }}>
                使用AI：Claude Code
              </p>
              <div className="button-link">
                <a
                  href="https://github.com/shin-tc-10/serene-meditation-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-flat"
                >
                  <span>ソースコード</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AiWorks;
