import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const qualificationList = [
  { name: "Java Programmer Gold SE11", category: "Java" },
  { name: "Java Programmer Silver SE11", category: "Java" },
  { name: "全日本SEO協会認定 SEOスペシャリスト", category: "SEO" },
  { name: "SEO検定 全級（1級〜4級）", category: "SEO" },
  { name: "WEBライティング実務士", category: "Writing" },
  { name: "SNSマーケティング検定", category: "SNS" },
  { name: "SNSリスクマネジメント検定", category: "SNS" },
  { name: "ITパスポート", category: "IT" },
];

const categoryColor = {
  Java:    { border: "#f89820", glow: "rgba(248,152,32,0.4)",  hover: "rgba(248,152,32,0.15)" },
  SEO:     { border: "#a78bfa", glow: "rgba(167,139,250,0.4)", hover: "rgba(167,139,250,0.15)" },
  Writing: { border: "#34d399", glow: "rgba(52,211,153,0.4)",  hover: "rgba(52,211,153,0.15)" },
  SNS:     { border: "#60a5fa", glow: "rgba(96,165,250,0.4)",  hover: "rgba(96,165,250,0.15)" },
  IT:      { border: "#f472b6", glow: "rgba(244,114,182,0.4)", hover: "rgba(244,114,182,0.15)" },
};

const Qualifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="qualifications" id="qualifications" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 2.0 }}
      >
        <h2>資格</h2>
        <div className="qualification-cards">
          {qualificationList.map((q, i) => {
            const color = categoryColor[q.category];
            return (
              <motion.div
                key={i}
                className="qualification-card"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  borderLeft: `4px solid ${color.border}`,
                  borderTop: `1px solid rgba(255,255,255,0.1)`,
                  borderRight: `1px solid rgba(255,255,255,0.1)`,
                  borderBottom: `1px solid rgba(255,255,255,0.1)`,
                  boxShadow: `0 0 16px ${color.glow}`,
                  "--hover-bg": color.hover,
                }}
              >
                <span
                  className="qualification-badge"
                  style={{ color: color.border }}
                >
                  {q.category}
                </span>
                <p className="qualification-name">{q.name}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Qualifications;
