import {ProductCardComponent} from "../Card/ProductCard.Component";

export const AlaCarteMenuComponent = () => {
    return(
        <>
            <div className="bg-white">
                <div className="grid gap-3 grid-cols-2">
                    <ProductCardComponent />
                    <ProductCardComponent />
                    <ProductCardComponent />
                    <ProductCardComponent />
                    <ProductCardComponent />
                </div>
            </div>
        </>
    )
}