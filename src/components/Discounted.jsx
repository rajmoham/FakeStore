import React from "react";
import './Discounted.css'
import Item from "./ui/Item";
import {items} from '../data.js'

function Discounted(){
    return(
        <section id="discounted">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Discounted <span className="color-blue">Items</span></h2>
                    <div className="items">
                        {items
                        .filter((item) => item.price.sale)
                        .slice(0, 8)
                        .map((item) => 
                        <Item key={item.id}
                            item={item}
                        />)}          
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discounted