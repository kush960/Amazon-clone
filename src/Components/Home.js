import React from 'react';
import Bannerimg from "../images/bannera.jpg";
import pimg1 from "../images/pimg3.jpg"
import pimg2 from "../images/pimg5.jpg"
import pimg3 from "../images/pimg1.jpg"
import pimg4 from "../images/pimg4.jpg"
import pimg5 from "../images/pimg6.webp"
import pimg6 from "../images/pimg2.jpg";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={Bannerimg} alt="" />

            {/* products of home page */}
            <div className="home__row">
                <Product id={123450}
                    title="Mens Shirt Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
                    image={pimg1}
                    price={499}
                    rating={5}

                />
                
                <Product id={123451}
                    title="Girl T-shirt Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
                    image={pimg2}
                    price={399}
                    rating={4}

                />
            </div>

            <div className="home__row">
                <Product id={123452}
                    title="Book Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
                    image={pimg3}
                    price={249}
                    rating={3}

                />
                <Product id={123453}
                    title="Watch Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
                    image={pimg4}
                    price={999}
                    rating={5}

                />
                <Product id={123454}
                    title="TV Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
                    image={pimg5}
                    price={12999}
                    rating={4}

                />
            </div>

            <div className="home__row">
                <Product id={123455}
                    title="Shoes Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
                    image={pimg6}
                    price={1999}
                    rating={5}

                />
            </div>
        </div>
    )
}

export default Home;
