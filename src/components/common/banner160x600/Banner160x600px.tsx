import React, { useEffect, useState } from "react";
import "./Banner160x600px.scss";
import { AdData, Offers } from "./helpers/interface";
import { getData } from "./helpers/getData";

function Banner160X600Px() {
  const [adData, setAdData] = useState<AdData>({ offers: [] });
  const [showAd, setShowAd] = useState<Offers[]>([]);
  const [activeAd, setActiveAd] = useState(0);

  useEffect(() => {
    // const item = document.querySelectorAll(".banner2__box");
    // if (item.length > 0) {
    //   item[activeFrame]?.classList.add("jumpingFrame");
    //   if (activeFrame === 0) {
    //     item[3]?.classList.remove("jumpingFrame");
    //   } else {
    //     item[activeFrame - 1]?.classList.remove("jumpingFrame");
    //   }
    // }
    // pobierz dane
    if (adData.offers.length === 0) {
      getData("http://rekrutacjartb.pl/developer/banner.json", setAdData);
    }
    //wylosuj 3 reklamy
    if (adData.offers.length > 0 && showAd.length === 0) {
      const arr: number[] = [];
      const offersLength = adData.offers.length;
      while (arr.length < 3) {
        const r = Math.floor(Math.random() * offersLength);
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      setShowAd(
        adData.offers.filter((item, index) => {
          if (arr.includes(index)) {
            return item;
          } else return null;
        })
      );
    }

    const interval = setInterval(() => {
      if (activeAd === 2) {
        setActiveAd(0);
      } else setActiveAd((activeFrame) => activeFrame + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [adData, showAd, activeAd]);

  return (
    <div className="banner2__container">
      <button>X</button>
      {showAd.length > 0 ? (
        <div className="banner2__box">
          <img src={"http:" + showAd[activeAd].imgURL} alt="IMG" />
          <p>{showAd[activeAd].name}</p>
          <p>
            {showAd[activeAd].price} {showAd[activeAd].currency}
          </p>
          <button>Check</button>
        </div>
      ) : (
        ""
      )}
      <img
        src="http://rekrutacjartb.pl/developer/images/logo_rtb.png"
        alt="logo"
      />
    </div>
  );
}

export default Banner160X600Px;
