import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import GitHubImage from "../../../public/images/gitHub.png";


const MyLink = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="contact" id="contact" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 2.0 }}
      >
        <h2>GitHub</h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} ref={ref2}>
          <motion.div initial="hidden" animate={inView2 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
              <Image src={GitHubImage} alt="works-image" width={600} height={600} style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="button-link" style={{ marginTop: "16px" }}>
              <a href="https://github.com/shin-tc-10" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* <div className="link-table" id="link">
          <table>
            <tbody>
              <tr>
                <td>Zenn</td>
                <td>
                  <a
                    href="https://zenn.dev/shin_re"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://zenn.dev/shin_re
                  </a>
                </td>
              </tr>
              <tr>
                <td>GitHub</td>
                <td>
                  <a
                    href="https://github.com/shin-tc-10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/shin-tc-10
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </motion.div>
    </div>
  );
};

export default MyLink;
