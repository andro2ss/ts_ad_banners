import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="linkToTask__container">
            <Link to="../banner1" className="linkToTask__link">
                Banner 1
            </Link>
            <Link to="../banner2" className="linkToTask__link">
                Banner 2
            </Link>
            <Link to="../timer" className="linkToTask__link">
                Timer
            </Link>
        </div>
    );
}

export default Main;