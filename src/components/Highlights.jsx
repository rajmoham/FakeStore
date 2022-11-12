import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Highlights.css'
import Highlight from './ui/Highlight.jsx'

function Hightlights(){
    return(
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why Choose <span className="color-blue">FakeShop?</span>
                    </h2>    
                    <div className="highlight__wrapper">
                        <Highlight 
                            icon={<FontAwesomeIcon icon="thumbs-up" />}
                            title="Quality"
                            paragraph="Buy the best quality items money can buy" 
                        />
                        <Highlight  
                            icon={<FontAwesomeIcon icon="users" />}
                            title="Favourite"
                            paragraph="Our service is loved an used by many" 
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="tags" />}
                            title="Deals"
                            paragraph="We have great deals all year round" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hightlights