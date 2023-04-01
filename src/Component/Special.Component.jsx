import React from "react";
import {CategoryMenuComponent} from "./CategoryMenu.Component";
import {SpecialCardComponent} from "./Card/SpecialCard.Component";


export const  SpecialComponent = () => {

    const scrollLeft = () => {
        document.getElementById("contentFlashSale").scrollLeft -= 400;
    }

    const scrollRight = () => {
        document.getElementById("contentFlashSale").scrollLeft += 400;
    }

    const category = [
        {
            id : 1,
            name : "Lunch" ,
            url : ""
        } ,
        {
            id : 2,
            name : "Mains" ,
            url : ""
        } ,
        {
            id : 3,
            name : "Desserts" ,
            url : ""
        } ,
        {
            id : 4,
            name : "A'La'Carte" ,
            url : ""
        } ,
        {
            id : 5,
            name : "Specials" ,
            url : ""
        } ,


    ]

    const product = [
            {
                id : 1,
                name : "Greek Salad",
                description : "The famous greek salad of crispy lettuce, peppers, olives and our Chicago..",
                price : 12.99,
                image : "/assets/little-lemon-food (2).jpg" ,
            },
        {
            id : 2,
            name : "Brushetta",
            description : "Our Bruschetta is made from grilled bread that has been smeared with garlic ",
            price : 7.99,
            image : "/assets/little-lemon-food (1).png" ,
        },
        {
            id : 3,
            name : "Grilled Fish",
            // description : "",
            description : "The famous greek salad of crispy lettuce, peppers, olives and our Chicago..",
            price : 20.00,
            image : "/assets/little-lemon-food (1).jpg" ,
        },
        {
            id : 4,
            name : "Pasta",
            description : "The famous greek salad of crispy lettuce, peppers, olives and our Chicago..",
            price : 18.99,
            image : "/assets/little-lemon-food (1).webp" ,
        },
        {
            id : 5,
            name : "Lemon Dessert",
            description : "The famous greek salad of crispy lettuce, peppers, olives and our Chicago..",
            price : 6.99,
            image : "/assets/little-lemon-food (3).jpg" ,
        },
    ]

    return(
        <>
            <div className="mx-auto font-karla" style={{ width: "90%" }}>
                <div className="relative text-left bg-white">
                    <div className=" py-3  text-lg font-bold">ORDER FOR DELIVERY!</div>
                    <div className="absolute  right-0 top-1 ">
                        <button onClick={scrollLeft} className="p-2 mx-2 rounded-full bg-white">
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button onClick={scrollRight} className="p-2 mx-2 rounded-full bg-white">
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                    <div id="contentFlashSale" className="carousel  py-2 gap-2 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
                        {category.map((item) => {
                            return(
                                <div className="w-full">
                                    <CategoryMenuComponent key={item.id} name={item.name} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="my-7">
                        {product.map((item) =>{
                            return(
                                <SpecialCardComponent key={item.id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}