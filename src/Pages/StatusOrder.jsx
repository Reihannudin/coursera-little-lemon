import React from "react";
import {Link, useNavigate} from "react-router-dom";

function StatusOrder (){

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }


    return(
        <>
            <nav className="bg-white font-karla border-b-amber-50 px-4 pt-5 pb-5" style={{  borderBottom: "1px solid #ebebeb"}}>
                <div className="flex justify-between" style={{ height: "30px" }}>
                    <button onClick={goBack}>
                        <h6 className="text-xl mb-0">
                            <i className="fa-solid fa-arrow-left text-yellow"></i>
                        </h6>
                    </button>
                    <div>
                        <div style={{ height: "25px" }}>
                            <img
                                src="/assets/LittleLemon.svg"
                                className=" h-full"
                                alt=""
                            />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </nav>
            <div>
                <div className="my-10">
                    <div className="my-4">
                        <h2 style={{ fontSize:"25px" ,color:"#152C5B"}}>Yay! Completed Order</h2>
                    </div>
                    <div className="w-64 mx-auto">
                        <img className="w-64 mx-auto" src="/assets/img-status.svg"/>
                    </div>
                    <div className="w-80 mx-auto">
                        <p  className="mx-13" style={{ color:"#B0B0B0"}}>Thank you already order from us, and you detail order you can see on your status order, happy eating</p>
                    </div>
                    <div className="w-52 my-7 mx-auto">
                        <button className="bg-yellow shadow w-full text-white rounded-lg py-2 text-center w-full">
                            Add Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatusOrder