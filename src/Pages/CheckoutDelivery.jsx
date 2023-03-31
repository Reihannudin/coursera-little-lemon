import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {CartCardComponent} from "../Component/Card/CartCard.Component";


function CheckoutDelivery(){

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(
        <>
            <div className="px-4 bg-white fixed w-full top-0  pb-4 pt-6 flex items-center w-full" style={{                     zIndex: 2,
                 borderBottom: "1px solid #ebebeb" , width:"400px"}}>
                    <button onClick={goBack}>
                        <h6 className="text-lg mb-0">
                            <i className="fa-solid fa-arrow-left text-yellow"></i>
                        </h6>
                    </button>
                    <h5 className="font-medium text-xl ml-3">Checkout Delivery</h5>
                </div>
            <div className="bg-white relative " style={{ margin:"70px 0 0"}}>
                <div className="flex justify-between  " style={{ borderBottom : "1px solid #ebebeb"}}>
                    <p className="font-medium text-left mx-6 py-1" style={{ fontSize: "14px"}}>Time delivery : 12:00 - 13:00</p>
                    <p className="font-medium text-left mx-6 py-1" style={{ fontSize: "14px"}}>11:39 27 March 2023</p>
                </div>
               <div>
                    <div>
                        <div className="flex mx-6 justify-between" style={{ fontSize:"14px"}}>
                            <p className="my-auto">Set Schedule Delivery</p>
                            <input type="date" style={{ border:"none"}}/>
                        </div>
                        <div>
                            <div className="flex my-2 my-2  justify-between mx-6">
                                <h5 className="my-auto font-medium">Address</h5>
                                <i className="fa-solid my-auto fa-edit"></i>
                            </div>
                            <textarea placeholder="Enter your address" className="mx-auto" style={{ width: "350px" , height:"70px" , border:"1px solid #ffffff"}}></textarea>
                            <div className=" my-3 bg-yellow w-full " style={{ borderRadius:"8px" , padding:"2px 15px"}}>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="block" style={{ minHeight:"400px" ,padding: "0 0 200px"}}>
                    <CartCardComponent />

                </div>
            </div>
            <div
                className="fixed bottom-0 left-0 w-full"
                style={{
                    zIndex: 2,
                }}
            >
                <div
                    className="flex mx-auto justify-between px-4 py-2 border-t bg-white"
                    style={{
                        maxWidth: "400px",
                    }}
                >
                    <div>
                        <h5>Payment</h5>
                    </div>
                    <div>
                        <h5>Cash</h5>
                    </div>
                </div>
                <div
                    className="mx-auto px-4 py-2 border-t bg-white"
                    style={{
                        maxWidth: "400px",
                    }}
                >
                    <div className="flex justify-between" style={{ fontSize: "14px"}}>
                        <div className="font-medium">
                            <h5>Time Delivery : </h5>
                        </div>
                        <div>
                            <h5>12:00 - 13:00</h5>
                        </div>
                    </div>
                    <div className="flex justify-between" style={{ fontSize: "14px"}}>
                        <div>
                            <h5 className="font-medium">Time Fee : </h5>
                        </div>
                        <div>
                            <h5>$12.00</h5>
                        </div>
                    </div>
                </div>
                <div
                    className="flex mx-auto justify-between px-4 py-2 border-t bg-white"
                    style={{
                        maxWidth: "400px",
                    }}
                >
                    <div className="font-medium">
                        <h5>Total</h5>
                    </div>
                    <div className="font-medium">
                        <h5>$12.00</h5>
                    </div>
                </div>
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
        </>
    )
}

export default CheckoutDelivery