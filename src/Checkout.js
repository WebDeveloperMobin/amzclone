import React,{Component} from "react";
import {useStateValue} from "./StateProvider";
import Header from "./header";
import "./Checkout.css";
import CheckoutProduct from "./checkoutProduct";
import Subtotal from "./Subtotal";

function checkOut(){
    // check the baskets
    const [{basket}]=useStateValue();

    return(
       
        <div className="checkout">
            <Header/>
        <div className="checkout_left">
            <img 
            className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            />

        {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}

            
            { basket.length === 0 ? (
            <div>
                <h2 className="checkout_title">Your Amazon Cart is empty</h2>
                <img 
                className="checkout_emptyImg"
                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                alt=""
                />
            </div>
            ) : ( 
            <div > 
                <h1 className="checkout_Title">Your Basket has Products</h1>

                {/* List of all checkout product */}
                {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
            </div>
            )}
        </div>
      
    </div>
       
    )
}

export default checkOut;