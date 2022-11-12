import React from "react";
import './Landing.css'
import Landing__img from '../assets/landing_img.svg'

function Landing(){
    return(
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1 className="header__title">The Go-To Store For All Your Needs!</h1>
                        <h2 className="header__title--secondary">Shop for the best quality at <span className="color-blue">FakeStore</span></h2>
                        <a href="#most-liked">
                            <button className="btn">Browse Here</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img className="header__img" src={Landing__img} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing