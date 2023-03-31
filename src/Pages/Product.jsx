import {Link} from "react-router-dom";
import {OtherProductComponent} from "../Component/OtherProduct.Component";
import React from "react";

function Product(){


    const product = {
        name: "Dadar Coklat - Za Choco",
        price: 5.80,
        store_name: "Zacky's Food",
        description:
            "Produk dibuat oleh tangan-tangan yang berkualitas. Dengan tingkat kepuasan 100%",
    };



    return(
        <>
            <div className="bg-white pb-10">
                <div className="fixed">
                    <div className="bg-white rounded-full shadow px-3 py-2 ml-4 mt-4">
                        <Link to="/">
                            <h6 className="text-lg">
                                <i className="fa-solid fa-arrow-left"></i>
                            </h6>
                        </Link>
                    </div>
                </div>

                <div
                    className="bg-yellow-300"
                    style={
                        {
                            // minHeight: "300px",
                        }
                    }
                >
                    <img src="/assets/little-lemon-food (1).jpg" className="w-full" style={{ height : "400px"}} alt="" />
                </div>
                <div
                    className="-mt-6 px-4 py-6 bg-white border"
                    style={{
                        borderTopRightRadius: "27px",
                        borderTopLeftRadius: "27px",
                        minHeight: "250px",
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    <div>
                        <div className="bg-yellow " style={{ padding:"2px 0"}}></div>
                        <div className="text-left">
                            <h3 className=" mt-2 mb-0 font-medium" style={{ color:"#55B75E" , fontSize:"28px"}}>
                                ${product.price}
                            </h3>
                            <h6 className="font-medium  mt-0 mb-2" style={{ color:"#575757" , fontSize:"22px"}}>{product.name}</h6>
                            <div>
                                <p className="font-medium mb-1" style={{ fontSize: "16px" , color:"#575757"}}>Description</p>
                                <div>
                                    <p style={{ fontSize: "14px" , color: "#495E57"}}>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                                </div>
                            </div>
                            <div className="my-2">
                                <p className="font-medium" style={{  fontSize: "16px" , color:"#575757"}}>Nutrition Summary</p>
                                <div className="grid grid-cols-2" style={{  fontSize: "15px"}}>
                                    <div >
                                        <p className="flex font-regular">Calories : <p style={{ color:"#575757"}}> 500Cal</p> </p>
                                    </div>
                                    <div>
                                        <p className="flex font-regular">Protein : <p style={{ color:"#575757"}}> 500Cal</p> </p>
                                    </div>
                                    <div>
                                        <p className="flex font-regular">Carbs : <p style={{ color:"#575757"}}> 500Cal</p> </p>
                                    </div>
                                    <div>
                                        <p className="flex font-regular">Fat : <p style={{ color:"#575757"}}> 500Cal</p> </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div>
                        </div>
                    </div>
                    <OtherProductComponent/>
                </div>
            </div>
            <div
                className="fixed bottom-0 left-0 w-full"
                style={{
                    zIndex: 2,
                }}
            >
                <div
                    className="flex mx-auto gap-2 px-4 py-3 border-t bg-white"
                    style={{
                        maxWidth: "400px",
                    }}
                >
                    <Link to="" className="w-full">
                        <button className="bg-yellow w-full text-white rounded-lg py-2 text-center w-full">
                            Add Cart
                        </button>
                    </Link>
                    <Link to="" className="w-full">
                        <button className="w-full bg-red-700 text-white border-red-700 rounded-lg py-2 text-center w-full">
                            Order Now
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Product