import React from "react";
import {Link} from "react-router-dom";

export const NavbarComponent = () => {
    return(
        <>
            <nav className="bg-white font-karla border-b-amber-50 px-4 pt-5 pb-5" style={{  borderBottom: "1px solid #ebebeb"}}>
                <div className="flex justify-between" style={{ height: "30px" }}>
                    <div>
                        <span  style={{ height: "28px" }}>
                                <i style={{ fontSize:"26px" , color:"#FFD400" , cursor :"pointer" }} className="fa-solid h-full fa-bars"></i>
                        </span>
                    </div>
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
                        <div style={{ height: "26px" }} className="my-1">
                            <div className={"h-full"}>
                                {/*{logged ? (*/}
                                    <Link to="/profile" className="inline">
                                        <span className="bg-gray-100 px-3 py-2 rounded-full">
                                            <i className="fa-solid fa-user"></i>
                                        </span>
                                    </Link>
                                {/*// ) : (*/}
                                {/*//     <>*/}
                                {/*//         <a href="http://127.0.0.1:8000/login">Login</a>*/}
                                {/*//     </>*/}
                                {/*// )}*/}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}