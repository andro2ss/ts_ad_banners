import React from "react";
import { Link } from "react-router-dom";
import Banner160X600Px from "../common/banner160x600/Banner160x600px";

function Banner160X600() {
  return (
    <div>
      <Banner160X600Px />
      <Link to="/" className="linkToTask__link--home">
        Cofnij
      </Link>
    </div>
  );
}

export default Banner160X600;
