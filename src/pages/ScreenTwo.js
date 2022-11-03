import React from "react";
import {Link} from "react-router-dom";

const ScreenTwo = () => {
    return(
        <div>
            <h2> Screen Two</h2>

            <Link to='/one'>
                <h5> GO TO ONE </h5>
            </Link>

        </div>
    )
}

export default ScreenTwo;