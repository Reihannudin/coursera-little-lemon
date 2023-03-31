import React from "react";
import {useNavigate} from "react-router-dom";


export const CartCardComponent = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(
        <>
            <div className="my-1" style={{ background: "rgba(255,255,255,0.64)" , borderBottom : "1px solid #EAEAEA"}}>
                <div className="flex my-2 justify-beetwen">
                    <div className="flex">
                        <div  className="my-auto">
                            <input className="my-auto cursor-pointer mx-4" type="checkbox"/>
                        </div>
                        <div className=" mx-auto my-auto " style={{ borderRadius:"12px 12px 12px 12px" , width:"85px" , height:"85px" , margin : "10px 0px"}}>
                            <img src="/assets/little-lemon-food (3).jpg" style={{ borderRadius:"12px 12px 12px 12px" }} className="w-full h-full" alt="" />
                        </div>
                        <div className="my-auto mx-3">
                            <div className="text-left">
                                <h3 className="font-medium my-0">Greek Salad</h3>
                                <p className="mb-2" style={{ fontSize: "14px" , color:"#AAAAAA"}}>Stock : 100</p>
                                <div className="flex" style={{ border : "1px solid ##AAAAAA" , borderRadius:"8px"}}>
                                    <button className="btn bg-white"  style={{ width:"25px" , height:"25px" ,borderRadius:"8px 0px 0px 8px" }}>-</button>
                                    <input className="bg-white" style={{ width:"40px" , height:"25px" ,  border : "1px solid #EAEAEA" , fontSize:"14px"}} type="text"/>
                                    <button className="btn bg-white"  style={{ width:"25px" , height:"25px" ,borderRadius:"0px 8px 8px 0px" }}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-right w-full mx-5 mt-5">
                        <div className="w-full">
                            <h4 className="text-right font-medium" style={{ color:"#55B75E"}}>$ 12.99</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}