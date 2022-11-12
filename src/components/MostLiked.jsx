import React from "react";
import Item from './ui/Item.jsx'
import { items } from '../data.js'

function MostLiked(){
    return(
        <section id="most-liked">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Most Liked <span className="color-blue">Items</span>
                    </h2>
                    <div className="items">
                        {items
                        .sort((a, b) => b.rating.rate - a.rating.rate)
                        .slice(0, 4)
                        .map(item => 
                        <Item key={item.id}
                            item={item}
                        />)}
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default MostLiked