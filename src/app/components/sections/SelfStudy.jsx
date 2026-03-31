import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import UdemyJavaIntellijWebAppImg from "../../../../public/images/udemy-java-intellij-web-app.jpeg";
import UdemyJavaSe8Img from "../../../../public/images/udemy-java-se8.jpeg";
import UdemyJavaSpringTodoImg from "../../../../public/images/udemy-java-spring-todo.jpeg";
import UdemyReact3TypesOfAppsImg from "../../../../public/images/udemy-react-3 types-of-apps.jpeg";
import UdemyReactTwitterCloneImg from "../../../../public/images/udemy-react-twitter-clone.jpeg";
import UdemyReactTrelloCloneImg from "../../../../public/images/udemy-react-trello-clone.jpeg";

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
        <h2>自己学習</h2>
        <br/>
        <div className="self-study-evidence-box">
          <div className="self-study-evidence">
            <p>React Trelloクローン</p>
            <div className="self-study-evidence-img">
              <Image src={UdemyReactTrelloCloneImg} alt="self-study-evidence" />
            </div>
            <p>習得技術：React</p>
          </div>
          <div className="self-study-evidence">
            <p>3種類のReactアプリ</p>
            <div className="self-study-evidence-img">
              <Image src={UdemyReact3TypesOfAppsImg} alt="self-study-evidence" />
            </div>
            <p>習得技術：React</p>
          </div>
          <div className="self-study-evidence">
            <p>React Twitterクローン</p>
            <div className="self-study-evidence-img">
              <Image src={UdemyReactTwitterCloneImg} alt="self-study-evidence" />
            </div>
            <p>習得技術：React, Firebase</p>
          </div>
          <div className="self-study-evidence">
            <p>SpringBoot 課題管理アプリ</p>
            <div className="self-study-evidence-img">
              <Image src={UdemyJavaIntellijWebAppImg} alt="self-study-evidence" />
            </div>
            <p>習得技術：SpringBoot2</p>
          </div>
          <div className="self-study-evidence">
            <p>Java SE8 基礎</p>
            <div className="self-study-evidence-img">
              <Image src={UdemyJavaSe8Img} alt="self-study-evidence" />
            </div>
            <p>習得技術：Java8</p>
          </div>
          <div className="self-study-evidence">
            <p>SpringBoot お問い合わせアプリ Todoアプリ</p>
            <div className="self-study-evidence-img">
              <Image src={UdemyJavaSpringTodoImg} alt="self-study-evidence" />
            </div>
            <p>習得技術：SpringBoot2</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SelfStudy;
