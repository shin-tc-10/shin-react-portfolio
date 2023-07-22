import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="contact" id="contact" ref={ref4}>
      <motion.div
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 2.0 }}
      >
        <h2>Contact</h2>
        <div className="link-table" id="link">
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
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;