import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import NextPortfolioSiteImage from "../../../../public/images/next-portfolio-site.png";
import PhotoSearchAppImage from "../../../../public/images/photo-search-app.png";
import MeisouAppImage from "../../../../public/images/meisou-app.png";
import ReactTodoListImage from "../../../../public/images/react-todo-list.png";
import NextBlogAppImage from "../../../../public/images/next-blog-app.png";
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
        ReactやNext.jsを用いた制作物です。
      </p>
      <div className="works-card-grid">

        <div className="work-card" ref={ref}>
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <Link href="/works/portfolio-site" className="work-card-link">
              <div className="work-card-img">
                <Image src={NextPortfolioSiteImage} alt="portfolio-site" />
                <div className="work-card-tags">
                  <span className="work-card-tag">Next.js</span>
                </div>
              </div>
              <div className="work-card-body">
                <h3 className="work-card-title">ポートフォリオサイト</h3>
                <p className="work-card-date">制作開始日: 2024.12</p>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="work-card" ref={ref2}>
          <motion.div initial="hidden" animate={inView2 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <Link href="/works/photo-search" className="work-card-link">
              <div className="work-card-img">
                <Image src={PhotoSearchAppImage} alt="photo-search" />
                <div className="work-card-tags">
                  <span className="work-card-tag">React</span>
                </div>
              </div>
              <div className="work-card-body">
                <h3 className="work-card-title">写真検索アプリ</h3>
                <p className="work-card-date">制作開始日: 2024.03</p>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="work-card" ref={ref3}>
          <motion.div initial="hidden" animate={inView3 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <Link href="/works/meditation-app" className="work-card-link">
              <div className="work-card-img">
                <Image src={MeisouAppImage} alt="meditation-app" />
                <div className="work-card-tags">
                  <span className="work-card-tag">Next.js</span>
                </div>
              </div>
              <div className="work-card-body">
                <h3 className="work-card-title">瞑想アプリ</h3>
                <p className="work-card-date">制作開始日: 2025.01</p>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="work-card" ref={ref4}>
          <motion.div initial="hidden" animate={inView4 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <Link href="/works/todo-app" className="work-card-link">
              <div className="work-card-img">
                <Image src={ReactTodoListImage} alt="todo-app" />
                <div className="work-card-tags">
                  <span className="work-card-tag">React</span>
                </div>
              </div>
              <div className="work-card-body">
                <h3 className="work-card-title">Todo アプリ</h3>
                <p className="work-card-date">制作開始日: 2023.12</p>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="work-card" ref={ref5}>
          <motion.div initial="hidden" animate={inView5 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <Link href="/works/blog-app" className="work-card-link">
              <div className="work-card-img">
                <Image src={NextBlogAppImage} alt="blog-app" />
                <div className="work-card-tags">
                  <span className="work-card-tag">Next.js</span>
                </div>
              </div>
              <div className="work-card-body">
                <h3 className="work-card-title">ブログアプリ</h3>
                <p className="work-card-date">制作開始日: 2024.06</p>
              </div>
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Works;
