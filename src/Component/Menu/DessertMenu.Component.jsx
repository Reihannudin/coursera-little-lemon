import {ProductCardComponent} from "../Card/ProductCard.Component";

export const DessertMenuComponent = () => {
    return(
        <>
            <div className="bg-white">
                <div className="grid gap-3 grid-cols-2">
                    <ProductCardComponent />
                </div>
            </div>
        </>
    )
}