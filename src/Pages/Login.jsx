import React from "react";

function Login(){
    return(
        <>
            <div>
                <div className="w-80 mx-auto">
                    <div className="py-10 ">
                        <div className=" w-100 " style={{ height: "25px" }}>
                            <img
                                src="/assets/LittleLemon.svg"
                                className=" h-full mx-auto"
                                alt=""
                            />
                        </div>
                    </div>
                    <form >
                        <div className=" mt-1 text-left">
                            <label className="w-full my-0 py-0" style={{ color:"#ADADAD" , fontSize:"14px"}}>Username/Email</label>
                            <div className="my-0 w-full py-0 shadow"  style={{ borderBottom:"1px solid #ebebeb"}}>
                                <input className=" w-72 py-2 mx-2" type="text" style={{ color:"#D3D6DC" , fontSize:"15px" , border:"none"}} placeholder="Enter Username or Email"/>
                            </div>
                        </div>
                        <div className=" mt-1 text-left">
                            <label className="w-full my-0 py-0" style={{ color:"#ADADAD" , fontSize:"14px"}}>Password</label>
                            <div className="my-0 w-full py-0 shadow"  style={{ borderBottom:"1px solid #ebebeb"}}>
                                <input className=" w-72 py-2 mx-2" type="password" style={{ color:"#D3D6DC" , fontSize:"15px" , border:"none"}} placeholder="Enter Password"/>
                            </div>
                        </div>
                        <div className="flex my-3" style={{ fontSize:"14px"}}>
                            <input className="my-1 cursor-pointer " style={{ borderRadius:"2px" , color:"#ADADAD" , border:"1px solid #ADADAD"}} type="checkbox"/>
                            <div className="mx-2">
                                <span style={{ color:"#ADADAD"}} className="my-auto">Remember the Password</span>
                            </div>
                        </div>
                        <div className="my-5 ">
                            <button className="bg-yellow w-full text-white rounded-lg py-2 text-center w-full">
                                Register
                            </button>
                        </div>
                        <div style={{ fontSize:"14px"}}>
                            <p style={{ color:"#ADADAD"}}>Already have account? , Login now <a className="text-yellow">here</a></p>
                        </div>
                    </form>
                    <div className="w-80 mx-auto my-2" style={{ background:"#eeeeee" , padding:"1px 0"}}></div>
                    <div>
                        <span style={{ color:"#ADADAD" , fontSize:"14px"}}>Or login with</span>
                        <div className="w-full my-3">
                            <div className="flex  mx-auto gap-3" style={{ width:"100px"}}>
                                <div className="" style={{ width:"30px" , height:"30px"}}>
                                    <img src="/assets/Facebook_icon.svg" alt=""/>
                                </div>
                                <div style={{ width:"30px" , height:"30px"}}>
                                    <img src="/assets/Google_icon.svg" alt=""/>
                                </div>
                                <div style={{ width:"35px" , height:"37px"}}>
                                    <img src="/assets/Github_icon.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login