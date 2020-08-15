import React,{Component} from "react";
import "./Product.css";
import Star from '@material-ui/icons/Star';
import {useStateValue} from "./StateProvider";

function Product({id,title,image,price,rating}){

    const [{}, dispatch]=useStateValue();

    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        });
    }

   return(
    <div className="product">
    <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {/* Creating an array of size $rating */}
            {Array(rating) 
            .fill()    
            .map((_) => (
            <p><Star className="product_star" /></p>
            ))}
        </div>
    </div>
    <img src={image} alt="" />
    <button onClick={addToBasket}>Add to Cart</button>
</div>
   )
}
export default Product;