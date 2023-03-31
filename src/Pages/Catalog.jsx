import React from "react";
import {useNavigate} from "react-router-dom";
import {LaunchMenuComponent} from "../Component/Menu/LaunchMenu.Component";
import {MainsMenuComponent} from "../Component/Menu/MainsMenu.Component";
import {DessertMenuComponent} from "../Component/Menu/DessertMenu.Component";
import {AlaCarteMenuComponent} from "../Component/Menu/AlaCarteMenu.Component";

function Catalog (){

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }


    return(
        <>
            <nav className="bg-white font-karla border-b-amber-50 px-4 pt-5 pb-5" style={{  borderBottom: "1px solid #ebebeb"}}>
                <div className="flex justify-between" style={{ height: "30px" }}>
                    <button onClick={goBack}>
                        <h6 className="text-xl mb-0">
                            <i className="fa-solid fa-arrow-left text-yellow"></i>
                        </h6>
                    </button>
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

                    </div>
                </div>
            </nav>

            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap  mx-4 -mb-px text-sm font-medium text-center" id="myTab"
                    data-tabs-toggle="#myTabContent" role="tablist">
                    <li className="mr-2" role="presentation">
                        <button className="inline-block p-4  active:text-yellow-600 active:border-yellow-300  hover:text-yellow-600 hover:border-yellow-300 border-b-2 rounded-t-lg" id="profile-tab"
                                data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"
                                aria-selected="false">Launch
                        </button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-600 hover:border-yellow-300 dark:hover:text-gray-300"
                            id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                            aria-controls="dashboard" aria-selected="false">Mains
                        </button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg  hover:text-yellow-600 hover:border-yellow-300 dark:hover:text-gray-300"
                            id="settings-tab" data-tabs-target="#settings" type="button" role="tab"
                            aria-controls="settings" aria-selected="false">Dessert
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-600 hover:border-yellow-300 dark:hover:text-gray-300"
                            id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab"
                            aria-controls="contacts" aria-selected="false">A La Carte
                        </button>
                    </li>
                </ul>
            </div>
            <div id="myTabContent">
                <div className="hidden px-4 bg-white" id="profile" role="tabpanel"
                     aria-labelledby="profile-tab">
                    <LaunchMenuComponent />
                        </div>
                <div className="hidden px-4 bg-white" id="dashboard" role="tabpanel"
                     aria-labelledby="dashboard-tab">
                    <MainsMenuComponent />
                </div>
                <div className="hidden px-4 bg-white" id="settings" role="tabpanel"
                     aria-labelledby="settings-tab">
                    <DessertMenuComponent />
                  </div>
                <div className="hidden px-4 bg-white" id="contacts" role="tabpanel"
                     aria-labelledby="contacts-tab">
                    <AlaCarteMenuComponent />
                </div>
            </div>

        </>
    )
}

export default Catalog