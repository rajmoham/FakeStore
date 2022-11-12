import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from '../components/ui/Item'
import './ItemPage.css'
import { Link } from 'react-router-dom'

function ItemPage({items, addToBasket}){
    const {id} = useParams();
    const displayItem = items.find(item => +item.id === +id)
    const category = displayItem.category
    const recommended = items.filter((item) => (item.category === category) && +item.id !== +id).slice(0,4)

    const [added, SetAdded] = useState(false)

    function addItemToBasket(addedItem){
        SetAdded(true)
        addToBasket(addedItem)
    }

    useEffect(() => {
        window.scrollTo(0,0)
        SetAdded(false)
    }, [id])

    return (
        <div className="item--page">
            <div className="container">
                <div className="row">
                    <div className="return__container">
                        <Link to="/browse" className="item__return--text">
                            <FontAwesomeIcon className="arrow-left" icon="arrow-left"/>    
                            Back    
                        </Link>
                    </div>
                    <div className="item__info">
                        <div className="item__img--holder">
                            <figure className="item__img--container">
                                <img src={displayItem.image} alt="" className="item__img" />
                            </figure>
                        </div>
                        <div className="item__details">
                            <h3 className="item__title">{displayItem.title}</h3>
                            <div className="item__rating">
                                <div className="item__ratings">
                                    <FontAwesomeIcon icon="star"/>
                                    <FontAwesomeIcon icon="star"/>
                                    <FontAwesomeIcon icon="star"/>
                                </div>
                                <p className="item__rating--count">{displayItem.rating.count} Reviews</p>
                            </div>
                            <div className="item__summary">
                                <h4 className="item__subtitle">Summary</h4>
                                <p className="item__para">{displayItem.description}</p>
                            </div>
                            <div className="item__pricing">
                                {
                                    displayItem.price.sale
                                    ?
                                    <>
                                        <span className="item__price--normal">{`£${displayItem.price.regular.toFixed(2)}`}</span>
                                        {`£${displayItem.price.sale.toFixed(2)}`}
                                    </>
                                    :
                                    <>
                                        { `£${displayItem.price.toFixed(2)}` }
                                    </>
                                }
                            </div>
                            {
                                added
                                ?
                                <Link to="/basket">
                                    <button className="btn item__btn">
                                    Checkout
                                    </button>
                                </Link>
                                :
                                <button className="btn item__btn" onClick={() => addItemToBasket(displayItem)}>
                                Add to Basket
                                </button>
                            }           
                        </div>
                    </div>
                    <hr className="section-break"/>
                    <h2 className="section__title">Recommended Items</h2>
                    <div className="items">
                        {
                            recommended.map((item) =>(
                                <Item key={item.id}
                                    item={item}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPage