import React from "react";
import {useNavigate} from "react-router-dom";


export const OrderCardComponent = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(
        <>
            <div className="my-1" style={{ background: "rgba(255,255,255,0.64)" , borderBottom : "1px solid #EAEAEA"}}>
                <div className="flex my-2 ">
                    <div className="flex w-full mx-6" style={{ width:"80%"}} >
                        <div className=" mx-auto my-auto " style={{ borderRadius:"12px 12px 12px 12px" , width:"70px" , height:"70px" , margin : "10px 0px"}}>
                            <img src="/assets/little-lemon-food (3).jpg" style={{ borderRadius:"12px 12px 12px 12px" }} className="w-full h-full" alt="" />
                        </div>
                        <div className="my-auto mx-3">
                            <div className="text-left">
                                <h3 className="font-medium my-0">Greek Salad</h3>
                                <p className="mb-2" style={{ fontSize: "14px" , color:"#AAAAAA"}}>Quantity : 1</p>

                            </div>
                        </div>
                    </div>
                    <div className="text-right w-full mx-5 mt-5" style={{ width:"20%"}}>
                        <div className="w-full">
                            <h4 className="text-right font-medium" style={{ color:"#55B75E"}}>$ 12.99</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}