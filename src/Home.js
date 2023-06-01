import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/BVD/May/Deals-Unrec-PC-1500._CB588530729_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="75437285"
                        title="Think Straight: Change your thoughts, Change your life [Paperback] Foroux, Darius Paperback – 1 January 2020"
                        price={1.23}
                        rating={3}
                        img="https://m.media-amazon.com/images/I/41JoC4r8JDL._SX322_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49638434"
                        title="Branded Suitcase, Backpacks and Duffles - American Tourister, Safari, Skybags"
                        price={55.2}
                        rating={4}
                        img="https://m.media-amazon.com/images/I/31oaNMlqbtL._AC_UF226,226_FMjpg_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="8787898"
                        title="Summer Deals on Smartwatches - Fire-Boltt"
                        price={21.74}
                        rating={4}
                        img="https://m.media-amazon.com/images/I/41RiHr4-M9L._AC_UF226,226_FMjpg_.jpg"
                    />
                    <Product
                        id="648375254"
                        title="Be You. Now! - Redefine Your Approach to Life"
                        price={2.77}
                        rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/71SH7FPUPoL._AC_UL160_SR160,160_.jpg"
                    />
                    <Product
                        id="6487655"
                        title="Nokia C12 Most Affordable 64GB Smartphone"
                        price={99.99}
                        rating={5}
                        img="https://m.media-amazon.com/images/I/41ckHFjzfXL._AC_UF226,226_FMjpg_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="87478474"
                        title={`ASUS Zenbook Pro 14 Duo OLED (2022) Dual Screen Laptop, 14.5" (36.83 cms) 2.8K OLED 120Hz Touch, Intel EVO Core i7 12th Gen`}
                        price={1050.55}
                        rating={4}
                        img="https://m.media-amazon.com/images/I/81-MMtDUDsL._SX522_.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
