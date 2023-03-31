import {ProductCardComponent} from "../Card/ProductCard.Component";

export const MainsMenuComponent = () => {
    return(
        <>
            <div className="bg-white">
                <div className="grid gap-3 grid-cols-2">
                    <ProductCardComponent />
                    <ProductCardComponent />
                </div>
            </div>
        </>
    )
}