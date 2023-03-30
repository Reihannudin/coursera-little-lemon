import {Link, useNavigate} from "react-router-dom";
import React from "react";

function Profile(){
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(
        <>
            <div className="bg-white">
                <div className="px-4 bg-white  pb-4 pt-6 flex items-center mb-3" style={{ borderBottom: "1px solid #ebebeb"}}>
                    <button onClick={goBack}>
                        <h6 className="text-lg mb-0">
                            <i className="fa-solid fa-arrow-left text-yellow"></i>
                        </h6>
                    </button>
                    <h5 className="font-medium text-xl ml-3">Profile</h5>
                </div>
                <div></div>
                <div className="px-4 py-3">
                    <div className="flex items-center">
              <span className="bg-yellow  px-5 py-2 rounded-full"
                    style={{
                        width:  "60px",
                        height: "60px",
                    }}
              >
                    <i className="fa-solid mt-2 text-white fa-user" style={{ fontSize : "24px"}}
                    ></i>
              </span>
                        <div className="pl-4 text-left">
                            <h5 className="text-xl">Reihannudin</h5>
                        </div>
                    </div>
                </div>
                <div className="gap-4 mx-3 py-3">
                    <div className="flex my-2">
                        <i className="fa-solid fa-envelope my-1 mx-3"></i>
                        <p>reedulls91@gmail.com</p>
                    </div>
                    <div className="flex my-2">
                        <i className="fa-solid fa-phone my-1 mx-3"></i>
                        <p>(+62)87773301182</p>
                    </div>
                </div>
            </div>
            <div className="px-4 bg-white pb-5">
                <div className="w-full my-2 py-1 mx-auto">
                    <a href={"/order"}>
                        <div className="flex my-3">
                            <i className="fa-solid fa-ticket my-1 mx-3"></i>
                            <p>Order</p>
                        </div>
                    </a>
                    <hr />
                </div>
                <div className="w-full my-2  py-1 mx-auto">
                    <a href={"/cart"}>
                        <div className="flex my-3">
                            <i className="fa-solid fa-shopping-bag my-1 mx-3"></i>
                            <p>Cart</p>
                        </div>
                    </a>
                    <hr />
                </div>

                <div className="w-full my-2  py-1  mx-auto">
                    <a href={"/"}>
                        <div className="flex my-3" style={{ color: "#da1010"}}>
                            <i className="fa-solid fa-sign-out my-1 mx-3"></i>
                            <p>Log out</p>
                        </div>
                    </a>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Profile