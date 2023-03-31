import React from "react";
import {useNavigate} from "react-router-dom";

function CheckoutReservastion(){

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
                    <h5 className="font-medium text-xl ml-3">Checkout Reservastion</h5>
                </div>

            </div>
        </>
    )
}

export default CheckoutReservastion