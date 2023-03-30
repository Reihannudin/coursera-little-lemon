import React from "react";

export const FooterComponent = () => {
    return(
        <>
            <footer className="w-full font-karla bg-white pt-2">
                <div className="w-80 text-center  mx-auto">
                    <div className="w-80 mx-auto">
                        <div className="mx-auto" style={{ height: "30px" }}>
                            <img src="/assets/LittleLemon.svg" className=" h-full mx-auto" alt="" />
                        </div>
                    </div>
                    <div className="my-5 w-80 mx-auto">
                        <div className="w-72 mx-auto text-center" style={{fontSize:"14px"}}>
                            <ul className="flex text-center gap-4 mx-auto">
                                <li className="text-center mx-auto"><a className="text-center">Pusat Bantuan</a></li>
                                <li className="text-center mx-auto"><a className="text-center">Hubungi Kami</a></li>
                                <li className="text-center mx-auto"><a className="text-center">Berita</a></li>
                            </ul>
                            <ul className="flex text-center gap-4 mx-auto">
                                <li className="text-center mx-auto"><a className="text-center">Menjadi Partner</a></li>
                                <li className="text-center mx-auto"><a className="text-center">Berilklan dengan Kami</a></li>
                            </ul>
                            <ul className="flex text-center gap-4 mx-auto">
                                <li className="text-center mx-auto"><a className="text-center">Persyaratan</a></li>
                                <li className="text-center mx-auto"><a className="text-center">Privacy police</a></li>
                                <li className="text-center mx-auto"><a className="text-center">Supports</a></li>
                            </ul>
                        </div>
                    </div>
                    <div  className="my-3 4 w-80 mx-auto">
                        <div className="w-80 mx-auto">
                            <span className="text-center mx-auto" style={{fontSize:"12px"}}>@ 2023 All Rights Reserved by Little Lemons</span>
                        </div>
                        <hr className="my-4" style={{color:"#ea1111" , background:"#ea1111"}}/>
                    </div>
                </div>
            </footer>
        </>
    )
}