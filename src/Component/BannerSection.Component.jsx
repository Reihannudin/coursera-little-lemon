import React from "react";


export const BannerSectionComponent = () => {


    const images = [
        {
            id : 1,
            img : '/assets/fs.jpg',
        },
        {
            id : 2,
            img : '/assets/fs.jpg',
        },
        {
            id : 3,
            img : '/assets/fs.jpg',
        },
        {
            id : 4,
            img : '/assets/fs.jpg',
        },
    ];

    return(
        <>
            <div className="w-full">
                <div style={{ height : "230px"}}>
                    <div className="relative">
                        <img style={{ height: "100%"}} src="/assets/bg-lemon.svg" alt="bg-lemon"/>
                        <div className="absolute top-0 font-mansalva text-left text-white">
                            <div style={{ padding: "15px  40px"}}>
                                <div className="my-1">
                                    <h2 style={{ fontSize:"26px" , marginTop: "0" , marginBottom: "0"}}>Little Lemon</h2>
                                    <h4 style={{ fontSize:"18px" , marginTop: "0" , marginBottom: "0"}}>Chicago</h4>
                                    <p className="my-0" style={{ fontSize:"13px"}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                                </div>
                                <div className="my-0">
                                    <button style={{ background: "#F4CE14" , fontSize:"12px" , padding:"8px 16px" , borderRadius:"6px"}} >
                                        Reserve a table
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// <>
//     <section className="m-4">
//         <div id="indicators-carousel" className="relative " data-carousel="static">
//             <div className="relative overflow-hidden rounded-lg md:h-96" style={{ height : "200px" }}>
//                 {images.map((image) =>
//                     <div className="hidden duration-700 ease-in-out"   key={image.id} data-carousel-item="active" style={{ height: "200px"}}>
//                         <img src={image.img}  key={image.id}  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                              alt="..." />
//                     </div>
//                 )}
//             </div>
//
//             <button type="button"
//                     className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                     data-carousel-prev="">
//         <span
//             className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
//                  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
//                 d="M15 19l-7-7 7-7"></path></svg>
//             <span className="sr-only">Previous</span>
//         </span>
//             </button>
//             <button type="button"
//                     className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                     data-carousel-next>
//         <span
//             className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
//                  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
//                 d="M9 5l7 7-7 7"></path></svg>
//             <span className="sr-only">Next</span>
//         </span>
//             </button>
//         </div>
//
//     </section>
// </>
