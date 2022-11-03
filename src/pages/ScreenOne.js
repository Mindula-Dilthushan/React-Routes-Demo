import React from "react";
import {Link} from "react-router-dom";

const ScreenOne = () => {
    return(
        <div>
            <h2> Screen One</h2>

            <Link to='/two'>
                <h5> GO TO TWO </h5>
            </Link>

        </div>
    )
}

export default ScreenOne;