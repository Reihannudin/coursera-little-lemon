import React from "react";
import {ProductCardComponent} from "./Card/ProductCard.Component";

export const OtherProductComponent = () => {

    const scrollLeft = () => {
        document.getElementById("contentRecommended").scrollLeft -= 400;
    }

    const scrollRight = () => {
        document.getElementById("contentRecommended").scrollLeft += 400;
    }

    const product= [
        {
            id : 1,
            name : "Greek Salad",
            description : "The famous greek salad of crispy lettuce",
            price : 12.99,
            image : "/assets/little-lemon-food (2).jpg" ,
        },
        {
            id : 2,
            name : "Brushetta",
            description : "The famous greek salad of crispy lettuce",
            price : 7.99,
            image : "/assets/little-lemon-food (1).png" ,
        },
        {
            id : 3,
            name : "Grilled Fish",
            // description : "",
            description : "The famous greek salad of crispy lettuce",
            price : 20.00,
            image : "/assets/little-lemon-food (1).jpg" ,
        },
        {
            id : 4,
            name : "Pasta",
            description : "The famous greek salad of crispy lettuce",
            price : 18.99,
            image : "/assets/little-lemon-food (1).webp" ,
        },
        {
            id : 5,
            name : "Lemon Dessert",
            description : "The famous greek salad of crispy lettuce",
            price : 6.99,
            image : "/assets/little-lemon-food (3).jpg" ,
        },
    ]


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
                    {product.map((item) => {
                        return (
                            <div>
                                <ProductCardComponent key={item.id} name={item.name} description={item.description} image={item.image} price={item.price}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}