import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import './Item.css'
import { Link } from 'react-router-dom';

function Item({ item }) {
    const displayRating = Math.round(item.rating.rate * 2) / 2

    const [img, setImg] = useState();

    const mountedRef = useRef(true);

    useEffect(() => {
        const image = new Image();
        image.src = item.image;
        image.onload = () => {
            if (mountedRef.current)
            {
                setImg(image)
            }
        };
        return () => {
            mountedRef.current = false
        }
    })

    return (
        <div className="item">
            {
                img
                    ?
                    <>
                        <Link to={`/browse/${item.id}`}>
                            <figure className="item__img--wrapper">
                                <img className="item__img" src={img.src} alt="" />
                            </figure>
                        </Link>
                        <div className="item__title">
                            <Link to={`/browse/${item.id}`} className="item__title--link">
                                {item.title}
                            </Link>
                        </div>
                        <div className="item__ratings">
                            {new Array(Math.floor(displayRating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)}
                            {!Number.isInteger(displayRating) && <FontAwesomeIcon icon="star-half-alt" />}
                        </div>
                        <div className="item__price">
                            {
                                item.price.sale
                                    ?
                                    <>
                                        {`£${item.price.sale.toFixed(2)}`}
                                        <span className="item__price--normal">{`£${item.price.regular.toFixed(2)}`}</span>
                                    </>
                                    :
                                    `£${item.price.toFixed(2)}`
                            }
                        </div>
                    </>
                    :
                    <>
                        <div className="item__img--skeleton"></div>
                        <div className="skeleton item__title--skeleton"></div>
                        <div className="skeleton item__rating--skeleton"></div>
                        <div className="skeleton item__price--skeleton"></div>
                    </>
            }
            

            {/*  */}
        </div>
    )
}

export default Item