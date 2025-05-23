import { Product } from "@/types/product"
import CategoryItem from "./CategoryItem"


type Props = {
    categories: string[]
    products: Product[]
}

export default async function CategoryList(props: Props) {
    return (
        <div className="w-full md:max-w-[calc(100%-320px-16px)] h-full">
            {props.categories.map(category => {
                return <CategoryItem key={category} category={category} products={props.products} />
            })}
        </div>
    )
}