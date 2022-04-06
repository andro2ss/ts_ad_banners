import React, { useEffect, useState } from "react";
import { getData } from "./helpers/getData";
import "./Banner300x250px.scss";
import { AdData } from "./helpers/interface";
import { AdBox } from "./components/AdBox";

function Banner300X250Px() {
  const [adData, setAdData] = useState<AdData>({ offers: [] });
  const [showAd, setShowAd] = useState([0]);
  const [activeFrame, setActiveFrame] = useState(10);

  useEffect(() => {
    const item = document.querySelectorAll(".banner1__box");
    if (item.length > 0) {
      item[activeFrame]?.classList.add("jumpingFrame");
      if (activeFrame === 0) {
        item[3]?.classList.remove("jumpingFrame");
      } else {
        item[activeFrame - 1]?.classList.remove("jumpingFrame");
      }
    }
    // pobierz dane
    if (adData.offers.length === 0) {
      getData("http://rekrutacjartb.pl/developer/banner.json", setAdData);
    }
    //wylosuj 4 reklamy
    if (adData.offers.length > 0 && activeFrame === 10) {
      const arr = [];
      const offersLength = adData.offers.length;
      while (arr.length < 4) {
        const r = Math.floor(Math.random() * offersLength);
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      setShowAd(arr);
      setActiveFrame(0);
    }

    const interval = setInterval(() => {
      if (activeFrame === 3) {
        setActiveFrame(0);
      } else setActiveFrame((activeFrame) => activeFrame + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [adData, activeFrame]);

  return (
    <div className="banner1__container">
      {AdBox(adData, showAd)}
      <img
        src="http://rekrutacjartb.pl/developer/images/logo_rtb.png"
        alt="logo"
      />
    </div>
  );
}

export default Banner300X250Px;
