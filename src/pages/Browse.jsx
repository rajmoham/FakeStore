import React, { useEffect, useState } from "react";
import Item from "../components/ui/Item";
import './Browse.css'

function Browse({items: initialItems}){
    useEffect(() => window.scrollTo(0,0), [])
    
    const [items, setItems] = useState(initialItems);

    function filterItems(filterValue){
        if (filterValue === "LOW_TO_HIGH")
        {
            setItems(items.slice().sort((a, b) => ( (a.price.sale || a.price) - (b.price.sale || b.price))))
        }
        else if (filterValue === "HIGH_TO_LOW")
        {
            setItems(items.slice().sort((a, b) => ( (b.price.sale || b.price) - (a.price.sale || a.price))))
        }
        else if (filterValue === "RATING")
        {
            setItems(items.slice().sort((a, b) => ( b.rating.rate - a.rating.rate)))
        }
    }

    return (
        <div className="browse__body">
            <main className="browse__main">
                <section>
                    <div className="browse__container">
                        <div className="row">
                            <div className="browse__header">
                                <h2 className="section__title">
                                    Browse Items
                                </h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterItems(event.target.value)}>
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="items">
                                {
                                    items.map((item) => (
                                        <Item key={item.id}
                                        item={item}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Browse