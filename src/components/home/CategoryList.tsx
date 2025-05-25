import { Product } from "@/types/product"
import CategoryItem from "./CategoryItem"


type Props = {
    categories: string[]
    products: Product[]
}

export default async function CategoryList(props: Props) {
    return (
        <div className="w-full h-[calc(100%-56px)] overflow-y-auto">
            {props.categories.map(category => {
                return <CategoryItem key={category} category={category} products={props.products} />
            })}
        </div>
    )
}