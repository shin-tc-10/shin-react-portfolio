import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import UdemyJavaIntellijWebAppImg from "../images/udemy-java-intellij-web-app.jpeg";
import UdemyJavaSe8Img from "../images/udemy-java-se8.jpeg";
import UdemyJavaSpringTodoImg from "../images/udemy-java-spring-todo.jpeg";
import UdemyReact3TypesOfAppsImg from "../images/udemy-react-3 types-of-apps.jpeg";
import UdemyReactTwitterCloneImg from "../images/udemy-react-twitter-clone.jpeg";
import UdemyReactTrelloCloneImg from "../images/udemy-react-trello-clone.jpeg";

const SelfStudy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="self-study" id="selfStudy" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 2.0 }}
      >
        <h2>Self Study Evidence</h2>
        <p>学習記録です。プライベートでは主にUdemyや参考書で学習することが多いです。</p>
        <br/>
        <div className="self-study-evidence-box">
          <div className="self-study-evidence">
            <p>React Trelloクローン</p>
            <div className="self-study-evidence-img">
              <img src={UdemyReactTrelloCloneImg} alt="self-study-evidence" />
            </div>
            <p>習得技術：React</p>
          </div>
          <div className="self-study-evidence">
            <p>3種類のReactアプリ</p>
            <div className="self-study-evidence-img">
              <img src={UdemyReact3TypesOfAppsImg} alt="self-study-evidence" />
            </div>
            <p>習得技術：React</p>
          </div>
          <div className="self-study-evidence">
            <p>React Twitterクローン</p>
            <div className="self-study-evidence-img">
              <img src={UdemyReactTwitterCloneImg} alt="self-study-evidence" />
            </div>
            <p>習得技術：React, Firebase</p>
          </div>
          <div className="self-study-evidence">
            <p>SpringBoot 課題管理アプリ</p>
            <div className="self-study-evidence-img">
              <img src={UdemyJavaIntellijWebAppImg} />
            </div>
            <p>習得技術：SpringBoot2</p>
          </div>
          <div className="self-study-evidence">
            <p>Java SE8 基礎</p>
            <div className="self-study-evidence-img">
              <img src={UdemyJavaSe8Img} alt="self-study-evidence" />
            </div>
            <p>習得技術：Java8</p>
          </div>
          <div className="self-study-evidence">
            <p>SpringBoot お問い合わせアプリ Todoアプリ</p>
            <div className="self-study-evidence-img">
              <img src={UdemyJavaSpringTodoImg} alt="self-study-evidence" />
            </div>
            <p>習得技術：SpringBoot2</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SelfStudy;
