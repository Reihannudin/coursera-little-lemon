import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {CartCardComponent} from "../Component/Card/CartCard.Component";

function Cart(){

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }


    return(
        <>
            <div className="bg-white">
                <div className="px-4 bg-white  pb-4 pt-6 flex items-center " style={{ borderBottom: "1px solid #ebebeb"}}>
                    <button onClick={goBack}>
                        <h6 className="text-lg mb-0">
                            <i className="fa-solid fa-arrow-left text-yellow"></i>
                        </h6>
                    </button>
                    <h5 className="font-medium text-xl ml-3">Cart</h5>
                </div>
                <div>
                    <p className="font-light text-left mx-6 shadow py-1" style={{ fontSize: "14px"}}>You Order place in table 5, at little lemon</p>
                </div>
                <div className="block">
                    <CartCardComponent />
                    <CartCardComponent />
                    <CartCardComponent />

                </div>
                <div
                    className="fixed bottom-0 left-0 w-full"
                    style={{
                        zIndex: 2,
                    }}
                >
                    <div
                        className="flex mx-auto gap-2 px-4 py-3 border-t bg-white"
                        style={{
                            maxWidth: "400px",
                        }}
                    >
                        <Link to="" className="w-full">
                            <button className="bg-yellow w-full text-white rounded-lg py-2 text-center w-full">
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart