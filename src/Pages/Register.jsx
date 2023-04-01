import React from "react";

function Register(){
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
                            <label className="w-full my-0 py-0" style={{ color:"#ADADAD" , fontSize:"14px"}}>Username</label>
                            <div className="my-0 w-full py-0 shadow"  style={{ borderBottom:"1px solid #ebebeb"}}>
                                <input className=" w-72 py-2 mx-2" type="text" style={{ color:"#D3D6DC" , fontSize:"15px" , border:"none"}} placeholder="Enter Username"/>
                            </div>
                        </div>
                        <div className="  mt-1 text-left">
                            <label className="w-full my-0 py-0" style={{ color:"#ADADAD" , fontSize:"14px"}}>Email</label>
                            <div className="my-0 w-full py-0 shadow"  style={{ borderBottom:"1px solid #ebebeb"}}>
                                <input className=" w-72 py-2 mx-2" type="text" style={{ color:"#D3D6DC" , fontSize:"15px" , border:"none"}} placeholder="Enter Email"/>
                            </div>
                        </div>
                        <div className=" mt-1 text-left">
                            <label className="w-full my-0 py-0" style={{ color:"#ADADAD" , fontSize:"14px"}}>Password</label>
                            <div className="my-0 w-full py-0 shadow"  style={{ borderBottom:"1px solid #ebebeb"}}>
                                <input className=" w-72 py-2 mx-2" type="text" style={{ color:"#D3D6DC" , fontSize:"15px" , border:"none"}} placeholder="Enter Password"/>
                            </div>
                        </div>
                        <div className=" mt-1 text-left">
                            <label className="w-full my-0 py-0" style={{ color:"#ADADAD" , fontSize:"14px"}}>Password Confirmation</label>
                            <div className="my-0 w-full py-0 shadow"  style={{ borderBottom:"1px solid #ebebeb"}}>
                                <input className=" w-72 py-2 mx-2" type="text" style={{ color:"#D3D6DC" , fontSize:"15px" , border:"none"}} placeholder="Enter Password Confirmation"/>
                            </div>
                        </div>

                        <div className="my-5 ">
                            <button className="bg-yellow w-full text-white rounded-lg py-2 text-center w-full">
                                Register
                            </button>
                        </div>
                        <div style={{ fontSize:"16px"}}>
                            <p style={{ color:"#ADADAD"}}>Already have account? , Login now <a className="text-yellow">here</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register