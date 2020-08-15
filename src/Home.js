import React,{Component} from "react"
import "./Home.css"
import Product from "./Product"
class Home extends React.Component{

    render(){
        return(
           <div className="home">
               <img className="home_image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 alt="amazon home_screen"/>


            {/* display products */}
            <div className="home_row">
                <Product
                    id="0001"
                    title="Harry Potter and the Philosopher's Stone"
                    price={10.49}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
                />
                <Product
                    id="0002"
                    title="Funny Costumes Dinosaur Inflatable Costumes"
                    price={34.84}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71J-YtSUd3L._AC_UX679_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="0003"
                    title="Color Club Halographic Hues Nail Polish, Halo, Graphic.05 Ounce"
                    price={11.29}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71FPuDUhfML._AC_UL480_QL65_.jpg"
                />
                <Product
                    id="0004"
                    title="Hamilton Beach Breakfast Sandwich Maker, Silver (25475A) "
                    price={24.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41N8AxIJq4L._AC_SY200_.jpg"
                />
                <Product
                    id="0005"
                    title="Artist's Loft Acrylic Paint Value Pack 36 Piece"
                    price={25.35}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61GEW-MekwL._AC_UL480_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="0006"
                    title="FLY2SKY 28pcs Mochi Squishy Toys Mini Squishies Kawaii Animal Squishys Party Favors Easter Egg Fillers Easter Gifts for Kids Unicorn Cat Panda Animal Squeeze Toy Stress Relief Toy Class Prize, Random "
                    price={8.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61ZA1VRxLOL._AC_UL480_QL65_.jpg"
                />
                <Product
                    id="0007"
                    title="Oxford Spiral Notebooks, 1 Subject, College Ruled Paper, Durable Plastic Cover, 100 Sheets, Divider Pocket, 3 per Pack (10390) "
                    price={9.89}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41OJa46VMDL._AC_US327_QL65_.jpg"
                />   
            </div>  

            <div className="home_row">
            <Product
                    id="0008"
                    title="CHKOKKO Men's Cotton Regular Fit Full Sleeves T-Shirt Rust Size XXL
                    CHKOKKO Men's Cotton Regular Fit Full Sleeves T-Shirt Rust Size XXL "
                    price={22.87}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51-OLulHyDL._UL1440_.jpg"
                />   
                 <Product
                    id="0008"
                    title="Wrath Chocolate Boy's Designer Combo of Two T-Shirts for Men. (X-Large)
                    Wrath Chocolate Boy's Designer Combo of Two T-Shirts for Men. (X-Large) "
                    price={20.79}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81D4XtsqpvL._UX679_.jpg"
                />   

                </div> 
        </div>
        )
    }
}

export default Home;