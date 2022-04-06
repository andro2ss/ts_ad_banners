import { AdData } from "../helpers/interface";
import React from "react";

export function AdBox(adData: AdData, showAd: number[]) {
  return (
    <div className="banner1__boxes">
      {adData.offers
        .map((item) => {
          return (
            <div className="banner1__box" key={item.name}>
              <img src={"http:" + item.imgURL} alt="IMG" />
              <p>
                {item.price} {item.currency}
              </p>
            </div>
          );
        })
        .filter((item, index) => {
          if (showAd.includes(index)) {
            return item;
          } else return null;
        })}
    </div>
  );
}
