
export const SpecialCardComponent = (props) => {
    return(
        <>
            <div className="w-100 pb-3 pt-2" style={{ borderBottom: "1px solid #EDEFEE"}}>
                <div className="flex justify-between w-full">
                    <div className="w-72" style={{ margin:"0 2px 0 0"}}>
                        <div className="">
                            <h4 className="font-bold" style={{ fontSize:"18px"}}>{ props.name }</h4>
                            <p className="my-1" style={{ fontSize:"13px" , color:"#495E57"}}>{ props.description}</p>
                            <p className="font-medium"  style={{ fontSize:"16px" , color:"#495E57"}}>${props.price}</p>
                        </div>
                    </div>
                    <div className="w-28" style={{ height:"90px"}}>
                        <img className="w-96 h-full object-cover mx-auto" style={{ borderRadius:"12px"}} src={props.image}/>
                    </div>
                </div>
            </div>
        </>
    )
}