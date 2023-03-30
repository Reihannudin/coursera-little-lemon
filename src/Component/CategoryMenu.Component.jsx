import {Link} from "react-router-dom";


export  const CategoryMenuComponent = () => {
    return(
        <>
            <div className="w-100 mx-0">
                <Link to="/">
                    <div className="bg-yellow py-1.5 text-gray-800 font-bold px-4" style={{ borderRadius:"15px"}}>
                        <p>Lunch</p>
                    </div>
                </Link>
            </div>
        </>
    )
}