// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";
// import LoadingIndicator from "./LoadingIndicator";
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import '../globals.css'


// function App() {
//   const [loading, setLoading] = useState(true);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   const fetchData = () => {
//     // ここに非同期処理を実装する（APIからデータを取得するなど）
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 2000); // 2秒後に非同期処理が完了すると仮定
//     });
//   };

//   useEffect(() => {
//     // ロード中の非同期処理などを行う
//     // 例えば、APIからデータを取得する場合
//     fetchData().then(() => {
//       setLoading(false); // ローディングが終了したらfalseに設定
//     });
//   }, []);

//   const handleMouseMove = (event) => {
//     setTimeout(() => {
//       setCursorPosition({ x: event.clientX, y: event.clientY });
//     }, 200);
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   if (loading) {
//     return (
//       <div className="overlay">
//         <LoadingIndicator />
//       </div>
//     );
//   }

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <div className="mouse-stalker" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Main />} />
//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;