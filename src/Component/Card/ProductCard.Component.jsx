import React from "react";
import {Link} from "react-router-dom";

export const ProductCardComponent = (props) => {
    return(
        <>
            <div className="card bg-white w-[170px] rounded-lg shadow-lg" style={{ minHeight: "250px" , maxHeight : "250px"}}>
                <Link to={"/product/"}>
                    <div className="top" >
                        <img
                            className="w-[190px] object-cover "
                            src={props.image}
                            alt="img"
                            style={{ borderRadius: "8px 8px 0px 0px" , height : "130px"}}
                        />
                    </div>
                </Link>
                <div className="bottom flex flex-col justify-center items-start px-3 py-2 bg-">
                    <div className="title font-semibold  my-0">
                        <h5 style={{ fontSize:"17px" , color: "#495E57"}}>
                            {props.name}
                        </h5>
                    </div>
                    <div className="category  text-left font-light ">
                        <p className="font-medium" style={{ fontSize:"13px" , color: "#495E57"}}>
                            {props.description}
                        </p>
                    </div>

                    <div className="pricing flex items-center">
                        {" "}
                        <div className="price font-medium my-2" style={{ fontSize:"16px" , color : "#55B75E"}}>$.{props.price}</div>
                        {/*<div className="ml-2 text-xs ">*/}
                        {/*    $<del>1320</del>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}
