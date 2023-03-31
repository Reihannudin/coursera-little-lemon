import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {CartCardComponent} from "../Component/Card/CartCard.Component";
import {BookingFormComponent} from "../Component/BookingForm.Component";
import {OrderCardComponent} from "../Component/Card/OrderCard.Component";

function CheckoutReservastion(){

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
                <h5 className="font-medium text-xl ml-3">Checkout Reservation</h5>
            </div>
            <div className="bg-white relative " style={{ margin:"70px 0 0"}}>
                <div>
                    <div>
                        <div className="flex justify-between" style={{ fontSize:"14px" ,  borderBottom : "1px solid #ebebeb"}}>
                            <p className="my-auto mx-6 font-medium">Set Time Booking : </p>
                            <input className="mx-1 " type="date" style={{ border:"none" ,  fontSize: "14px"}}/>
                        </div>
                        <div>
                            <BookingFormComponent />
                        </div>
                        <div className=" my-3 bg-yellow w-full " style={{ borderRadius:"8px" , padding:"2px 15px"}}>
                        </div>
                    </div>

                </div>
                <div className=" text-left block" >
                    <div className="w-96 mx-auto">
                        <h4 className="mx-4 font-medium">Your Order</h4>
                    </div>
                    <div>
                        <OrderCardComponent />
                    </div>
                </div>
                <div
                    className="flex mx-auto justify-between px-4 py-2 border-b bg-white"
                    style={{
                        maxWidth: "400px",
                        fontSize:"14px"
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
                    className="mx-auto px-4 py-2 border-b bg-white"
                    style={{
                        maxWidth: "400px",
                    }}
                >
                    <div className="flex justify-between" style={{ fontSize: "14px"}}>
                        <div className="font-medium">
                            <h5>Time Booking : </h5>
                        </div>
                        <div>
                            <h5>12:00 - 13:00</h5>
                        </div>
                    </div>
                    <div className="flex justify-between" style={{ fontSize: "14px"}}>
                        <div>
                            <h5 className="font-medium">Table Booking : </h5>
                        </div>
                        <div>
                            <h5>T1</h5>
                        </div>
                    </div>
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

export default CheckoutReservastion