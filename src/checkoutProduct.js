import React,{Component} from "react";
import Star from "@material-ui/icons/Star";
import "./checkoutProduct.css"
import { useStateValue } from "./StateProvider";


function CheckoutProduct({id,title,image,price,rating}){
    const [{basket},dispatch]=useStateValue();

    console.log(id,title,image,price,rating);

    const RemoveFromBasket=()=>{
        // remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    
    return(
        <div className="checkoutProduct">
        <img src={image} className="checkoutProduct_image" alt=""/>
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating) 
                .fill()    
                .map((_) => (
                <p><Star className="product_star" /></p>
                ))}
            </div>
            <button onClick={RemoveFromBasket}>Remove from cart</button>
        </div>
    </div>
    )
}

export default CheckoutProduct;