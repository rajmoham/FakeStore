import React from "react";
import {Link} from 'react-router-dom';

function Explore(){

    return (
        <section id="explore">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Explore more <span className="color-blue">Items</span>
                    </h2>
                    <div className="explore__content">
                        <Link to="/browse">
                            <button className="btn">Explore Items</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore