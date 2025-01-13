// import React, { useState } from "react";
// import "./App.css";
// import Timer from "./components/Timer";
// import Settings from "./components/Settings";
// import SettingsContext from "./context/SettingsContext";
// import MotivationalMessages from "./components/MotivationalMessages";
// // import Navbar from "./components/Navbar";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// function App() {
//   const [showSettings, setShowSettings] = useState(false);
//   const [workMinutes, setWorkMinutes] = useState(25);
//   const [breakMinutes, setBreakMinutes] = useState(5);

//   return (
//     <SettingsContext.Provider
//       value={{
//         showSettings,
//         setShowSettings,
//         workMinutes,
//         breakMinutes,
//         setWorkMinutes,
//         setBreakMinutes,
//       }}
//     >
//       <Router>
//         <div className="App">
//           {/* Add Navbar */}
//           <Navbar />
//           <Routes>
//             {/* Main Timer Page */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <MotivationalMessages />
//                   {showSettings ? <Settings /> : <Timer />}
//                 </>
//               }
//             />

//             {/* Collectables Page */}
//             <Route
//               path="/collectables"
//               element={
//                 <div style={{ textAlign: "center", marginTop: "50px" }}>
//                   <h1>Collectables Page</h1>
//                   <p>Here, you can manage your collected items!</p>
//                 </div>
//               }
//             />
//           </Routes>
//         </div>
//       </Router>
//     </SettingsContext.Provider>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import SettingsContext from "./context/SettingsContext";
import MotivationalMessages from "./components/MotivationalMessages";
import BlindBox from './components/blind-box';
import ProgressBar from './components/progressbar';
import ChatBox from './components/Chatbox';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        <div className="App">
          <MotivationalMessages /> {/* Add MotivationalMessages here */}
          {showSettings ? <Settings /> : <Timer />}
        </div>
      </SettingsContext.Provider>

    <div className="App">
        <img src={'./images/logo.png'} className="App-logo" alt="logo" />
        {/* <div className='blindbox'>
        <BlindBox /></div> */}
        <div className='progressbar'>
          <ProgressBar /></div>
       </div>
       <div className="chatbox-container">
          <ChatBox />  {/* Add ChatBox here */}
        </div>
    
    </main>
  );
}

export default App;
