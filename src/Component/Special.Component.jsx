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
                        <div>
                            <CategoryMenuComponent />
                        </div>
                        <div>
                            <CategoryMenuComponent />
                        </div>
                        <div>
                            <CategoryMenuComponent />
                        </div>
                        <div>
                            <CategoryMenuComponent />
                        </div>
                        <div>
                            <CategoryMenuComponent />
                        </div>
                        <div>
                            <CategoryMenuComponent />
                        </div>
                    </div>
                    <div className="my-7">
                        <SpecialCardComponent />
                        <SpecialCardComponent />
                        <SpecialCardComponent />
                        <SpecialCardComponent />
                        <SpecialCardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}