import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="about-me" id="about" ref={ref}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.0 }}>
        <h2>自己紹介</h2>
        <div className="cp_timeline04">
          <div className="timeline_item">
            <div className="time_date">
              <p className="time">1992</p>
              <p className="flag">大阪で生まれる。</p>
            </div>
            <div className="desc">
              <p>
                生まれも育ちも大阪。中高は陸上部に所属。種目は中長距離走。冬は毎日15km~20kmは走っていた。
              </p>
            </div>
          </div>
          <div className="timeline_item">
            <div className="time_date">
              <p className="time">2012</p>
              <p className="flag">配送会社に就職</p>
            </div>
            <div className="desc">
              <p>
              仕事内容は主に100kg~200kg程の重量物を2人で運搬する重作業。
              </p>
            </div>
          </div>
          <div className="timeline_item">
            <div className="time_date">
              <p className="time">2012</p>
              <p className="flag">販売員に転職</p>
            </div>
            <div className="desc">
              <p>
                通信機器を販売する販売員に転職。5年ほどで店長に昇進。合計で7年ほど勤める。
              </p>
            </div>
          </div>
          <div className="timeline_item">
            <div className="time_date">
              <p className="time">2020</p>
              <p className="flag">未経験からITエンジニアに転職</p>
            </div>
            <div className="desc">
              <p>
                自己学習で楽しんでいたプログラミングを本業にするため、実務未経験からITエンジニアに転職。
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
