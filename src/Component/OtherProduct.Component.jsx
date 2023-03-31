import React from "react";
import {ProductCardComponent} from "./Card/ProductCard.Component";

export const OtherProductComponent = () => {

    const scrollLeft = () => {
        document.getElementById("contentRecommended").scrollLeft -= 400;
    }

    const scrollRight = () => {
        document.getElementById("contentRecommended").scrollLeft += 400;
    }

    return (
        <>
            <div className="relative pb-6  bg-white">
                <div className=" py-4  text-left text-lg font-bold">Product Lainnya</div>
                <div className="absolute right-0 top-1 ">
                    <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div id="contentRecommended" className="carousel py-0 gap-3 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
                    <div>
                        <ProductCardComponent />
                    </div>
                    <div>
                        <ProductCardComponent />
                    </div>
                    <div>
                        <ProductCardComponent />
                    </div>
                    <div>
                        <ProductCardComponent />
                    </div>
                    <div>
                        <ProductCardComponent />
                    </div>
                    <div>
                        <ProductCardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}