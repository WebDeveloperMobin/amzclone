import React,{Component} from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";


    function Header(){
       
        const [{basket,user}] = useStateValue();
        //const [state, dispatch] = useStateValue();
        //const [{cart}, dispatch] = useStateValue(); {/* like item state and action(adding or removing) */}
        console.log(basket);
    
        const login = () => {
            if(user) {
                auth.signOut();
            }
        }


        return(       
          <nav className="header">
            <Link to="/">
              {/* amazon logo */}
              <img className="header_logo"
               src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" 
                    alt="logo_amazon" />
            </Link>

            {/* take input box for serarch */}
            <div className="header_Search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
            </div>

            {/* header nav 3 links signin, cart */}
            <div className="header_Nav">

                {/* 1st Link */}
                <Link to={!user && "/login"} className="header_link"> {/* Not refreashing the page */}
                    <div onClick={login} className="header_option">
                        <span className="header_optionLineOne">Hello</span>
                        <span className="header_optionLineTwo">{user ? 'Sign in' : 'Sign out'}</span>
                    </div>
                </Link>


                {/* 2nd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineOTwo">& Orders</span>
                    </div> 
                </Link>

               
                {/* 3rd Link */}

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div> 
                </Link>

                {/* CheckOUT */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        {/* SHopping Basket Icon and Number of icons */}
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">
                            {basket.length}</span>
                    </div>
                </Link>

            </div>
          </nav>
        );
}

export default Header;