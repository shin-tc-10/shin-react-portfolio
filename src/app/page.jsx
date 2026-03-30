// useState・useEffectを使うためにClient Componentとして宣言
"use client"

import React, { useState, useEffect } from "react";
import About from "./components/sections/About";
import Works from "./components/sections/Works";
import Skills from "./components/sections/Skills";
import Qualifications from "./components/sections/Qualifications";
import SelfStudy from "./components/sections/SelfStudy";
import MyLink from "./components/sections/MyLink";

const Main = () => {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    // マウント時に1回だけ実行。3秒後にフェードイン開始
    const timer = setTimeout(() => {
      setIsFadeIn(true);
    }, 3000);

    // アンマウント時にタイマーを破棄（メモリリーク防止）
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {/* isFadeInがtrueになると"fade-in"クラスが付与される */}
      <div className={`fade-in-text ${isFadeIn ? "fade-in" : ""}`}>
        <div style={{ textAlign: "center" }}>
          <h1 className="glowing-text">Next Portfolio Site</h1>
          <p style={{ fontSize: "0.85rem", fontWeight: "normal", marginTop: "8px" }}>Created by Shin</p>
        </div>
        <div
          className="scroll-indicator"
          onClick={() => document.getElementById("works").scrollIntoView({ behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          <span className="scroll-indicator-text">SCROLL</span>
          <div className="scroll-indicator-arrow">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <section>
        <About />
      </section>
      <section>
        <Works />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <SelfStudy />
      </section>
      <section>
        <Qualifications />
      </section>
      <section>
        <MyLink />
      </section>
    </main>
  );
};

export default Main;
