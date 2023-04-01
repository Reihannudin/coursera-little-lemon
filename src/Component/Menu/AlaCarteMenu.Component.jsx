import {ProductCardComponent} from "../Card/ProductCard.Component";

export const AlaCarteMenuComponent = () => {

    const product = [
        {
            id : 1,
            name : "Greek Salad",
            description : "The famous greek salad of crispy lettuce",
            price : 12.99,
            image : "/assets/little-lemon-food (2).jpg" ,
        },
        {
            id : 2,
            name : "Brushetta",
            description : "The famous greek salad of crispy lettuce",
            price : 7.99,
            image : "/assets/little-lemon-food (1).png" ,
        },
        {
            id : 3,
            name : "Grilled Fish",
            // description : "",
            description : "The famous greek salad of crispy lettuce",
            price : 20.00,
            image : "/assets/little-lemon-food (1).jpg" ,
        },
        {
            id : 4,
            name : "Pasta",
            description : "The famous greek salad of crispy lettuce",
            price : 18.99,
            image : "/assets/little-lemon-food (1).webp" ,
        },
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