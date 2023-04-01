import {ProductCardComponent} from "../Card/ProductCard.Component";

export const DessertMenuComponent = () => {

    const product = [
        {
            id : 5,
            name : "Lemon Dessert",
            description : "The famous greek salad of crispy lettuce",
            price : 6.99,
            image : "/assets/little-lemon-food (3).jpg" ,
        },
    ]

    return(
        <>
            <div className="bg-white">
                <div className="grid gap-3 grid-cols-2">
                    {product.map((item) => {
                        return (
                            <ProductCardComponent key={item.id} name={item.name} description={item.description} image={item.image} price={item.price}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}