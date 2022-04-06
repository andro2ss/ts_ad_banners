import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../style/main.scss';
import FooterAB from "./common/footer/FooterAB";
import Main from "./pages/Main";
import Banner160X600 from "./pages/Banner160x600";
import Banner300X250 from "./pages/Banner300x250";
import TimerToEnd from "./pages/TimerToEnd";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/banner1" element={<Banner300X250 />} />
                <Route path="/banner2" element={<Banner160X600 />} />
                <Route path="/timer" element={<TimerToEnd />} />
            </Routes>
        </BrowserRouter>
        <FooterAB githubLink="https://github.com/andro2ss/ts_ad_banners"/>
    </div>
  );
}

export default App;
