
export const SpecialCardComponent = () => {
    return(
        <>
            <div className="w-100 pb-3 pt-2" style={{ borderBottom: "1px solid #EDEFEE"}}>
                <div className="flex justify-between w-full">
                    <div className="w-72" style={{ margin:"0 2px 0 0"}}>
                        <div className="">
                            <h4 className="font-bold" style={{ fontSize:"18px"}}>Greek Salad</h4>
                            <p className="my-1" style={{ fontSize:"13px" , color:"#495E57"}}>The famous greek salad of crispy lettuce, peppers, olives and our Chicago..</p>
                            <p className="font-medium"  style={{ fontSize:"16px" , color:"#495E57"}}>$12.99</p>
                        </div>
                    </div>
                    <div className="w-28">
                        <img className="w-96 mx-auto" style={{ borderRadius:"12px"}} src="/assets/little-lemon-food (2).jpg"/>
                    </div>
                </div>
            </div>
        </>
    )
}