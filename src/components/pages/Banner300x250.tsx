import React from "react";
import { Link } from "react-router-dom";
import Banner300X250Px from "../common/banner300x250/Banner300x250px";

function Banner300X250() {
  return (
    <div>
      <Banner300X250Px />
      <Link to="/" className="linkToTask__link--home">
        Cofnij
      </Link>
    </div>
  );
}

export default Banner300X250;
