import {Link} from "react-router-dom";


export  const CategoryMenuComponent = (props) => {
    return(
        <>
            <div className="w-full mx-0">
                <Link to="/catalog">
                    <div className="bg-yellow l py-1.5 text-gray-800 font-bold px-4" style={{ borderRadius:"15px" ,  }}>
                        <p className="w-full">{props.name}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}