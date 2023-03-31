import React from "react";

export const BookingFormComponent = () => {
    return(
        <>
            <div className="w-full">
                <div className=" mx-10 rounded my-4" style={{ background: "white" , height:"120px"}}>
                    <div className="flex mx-auto h-full">
                        <div className="block justify-between h-full mx-auto" style={{ width:"45%"}}>
                            <div className="" style={{ height:"50%"}}>

                                <div className="flex mb-3 text-center">
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                </div>
                                <div className="flex mb-3 text-center">
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                </div>
                            </div>

                            <div className="flex w-full" style={{ height:"50%"}}>
                                <div className="mt-auto  ms-0.5 mb-0">
                                    <button className="me-3 ms-1.5 px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                    <button className="me-3 px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                    <button className="me-3 px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>
                                    <button className="me-3 px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T1</button>

                                </div>
                            </div>
                        </div   >
                        <div className=" h-full mx-auto" style={{ width:"35%"}}>
                            <div className="text-center">
                                <div className="flex  text-center ">
                                    <button disabled className="w-full py-1 " style={{ background : "#ebebeb" , fontSize:"14px" , borderRadius:"6px"}}><p>Cashier</p></button>
                                </div>
                                <div className="flex mx-3 my-2 text-center">
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T2</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T2</button>
                                </div>
                                <div className="flex mx-3 my-2 text-center">
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T2</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T2</button>
                                </div>
                                <div className="flex my-5 text-center">
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T2</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T2</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T2</button>
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T2</button>
                                </div>
                            </div>
                        </div>
                        <div className="h-full mx-auto" style={{ width:"15%"}}>
                            <div>
                                <div className="block">
                                    <div className="mb-2">
                                        <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T3</button>
                                    </div>
                                    <div className="my-2">
                                        <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T3</button>
                                    </div><div className="my-2">
                                    <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T3</button>
                                </div>
                                    <div className="my-2">
                                        <button className="mx-auto px-1" style={{ background : "#ebebeb" , fontSize:"12px" , borderRadius:"2px"}}>T3</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" my-3 mx-auto w-80 bg-gray-200" style={{ borderRadius:"8px" , padding:"1px 15px"}}>
                    </div>
                    <div className="w-80 mx-auto">
                        <div className="flex gap-5">
                            <div className="flex ">
                                <img className="mb-2 mx-1" src="/assets/note-icon.svg"/>
                                <span style={{ fontSize:"11px"}}>T1 = 1 Table for 2 People</span>
                            </div>
                            <div className="flex">
                                <img className="mb-2 mx-1" src="/assets/note-icon.svg"/>
                                <span style={{ fontSize:"11px"}}>T2 = 2 Table for 4 People</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex ">
                                <img className="mb-2 mx-1" src="/assets/note-icon.svg"/>
                                <span style={{ fontSize:"11px"}}>T3 =  Family Table</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}