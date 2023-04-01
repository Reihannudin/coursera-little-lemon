import React from "react";
import {Link} from "react-router-dom";

export const NavbarComponent = () => {
    return(
        <>
            <nav className="bg-white font-karla border-b-amber-50 px-4 pt-5 pb-5" style={{  borderBottom: "1px solid #ebebeb"}}>
                <div className="flex justify-between" style={{ height: "30px" }}>
                    <div>
                        <span  style={{ height: "28px" }}>
                            <button className="text-white" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                                                               <i style={{ fontSize:"26px" , color:"#FFD400" , cursor :"pointer" }} className="fa-solid h-full fa-bars"></i>
                            </button>
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
            <div id="drawer-navigation"
                 className="fixed top-0 right-0   left-50 z-40 w-full  h-screen py-7 px-10 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
                 tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <div  className="mx-auto" style={{  maxWidth: "400px"}}>
                    <div className="relative" style={{ width:"100%"}}>
                        <div style={{ height: "25px" }}>
                            <img
                                src="/assets/LittleLemon.svg"
                                className=" h-full"
                                alt=""
                            />
                        </div>
                        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-0 right-0 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <i className="fa-solid fa-x" style={{ fontSize:"20px"}}></i>
                            <span className="sr-only">Close menu</span>
                        </button>
                    </div>
                </div>
                <div className="py-5 mx-auto overflow-y-auto">
                    <div className="mx-auto">
                        <ul className="space-y-4 mx-auto text-center font-medium">
                            <li className="py-2 mx-auto" style={{maxWidth: "400px", borderBottom :"1px solid #ebebeb"}}>
                                <Link>
                                    <div className="py-1">
                                        <h2 className="font-medium" style={{ fontSize:"18px" , color:"#F6B305"}}>Catalog</h2>
                                    </div>
                                </Link>
                            </li>
                            <li className="py-2 mx-auto" style={{maxWidth: "400px", borderBottom :"1px solid #ebebeb"}}>
                                <Link>
                                    <div className="py-1">
                                        <h2 className="font-medium" style={{ fontSize:"18px" , color:"#F6B305"}}>Place</h2>
                                    </div>
                                </Link>
                            </li>
                            <li className="py-2 mx-auto" style={{maxWidth: "400px", borderBottom :"1px solid #ebebeb"}}>
                                <Link>
                                    <div className="py-1">
                                        <h2 className="font-medium" style={{ fontSize:"18px" , color:"#F6B305"}}>Lunch</h2>
                                    </div>
                                </Link>
                            </li>
                            <li className="py-2 mx-auto" style={{ maxWidth: "400px", borderBottom :"1px solid #ebebeb"}}>
                                <Link>
                                    <div className="py-1">
                                        <h2 className="font-medium" style={{ fontSize:"18px" , color:"#F6B305"}}>Mains</h2>
                                    </div>
                                </Link>
                            </li>
                            <li className="py-2 mx-auto" style={{ maxWidth: "400px", borderBottom :"1px solid #ebebeb"}}>
                                <Link>
                                    <div className="py-1">
                                        <h2 className="font-medium" style={{ fontSize:"18px" , color:"#F6B305"}}>Desserts</h2>
                                    </div>
                                </Link>
                            </li>
                            <li className="py-2 mx-auto" style={{ maxWidth: "400px", borderBottom :"1px solid #ebebeb"}}>
                                <Link>
                                    <div className="py-1">
                                        <h2 className="font-medium" style={{ fontSize:"18px" , color:"#F6B305"}}>A La Carte</h2>
                                    </div>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div
                        className="fixed bottom-0 left-0 w-full"
                        style={{
                            zIndex: 2,
                        }}
                    >
                        <div
                            className="block mx-auto space-y-4 gap-2  px-4 py-3 bg-white"
                            style={{
                                maxWidth: "400px",
                            }}
                        >
                            <Link to="" className="w-full my-3">
                                <button className="bg-yellow w-full my-1 text-white rounded-lg py-2 text-center w-full">
                                    Login
                                </button>
                            </Link>
                            <Link to="" className="w-full my-1">
                                <button className="w-full bg-white mt-1 mb-4 text-yellow  rounded-lg py-2 text-center w-full" style={{ border:"1px solid #FFCC00"}}>
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}