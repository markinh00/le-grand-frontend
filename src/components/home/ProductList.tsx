import { Product } from "@/types/product"
import { CollapsibleContent } from "../ui/collapsible"
import ProductItem from "./ProductItem"


type Props = {
    products: Product[]
}

export default function ProductList(props: Props) {
    return (
        <CollapsibleContent className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4">
            {props.products.map(product => {
                return (
                    <ProductItem key={product.id} product={product} />
                )
            })}
        </CollapsibleContent>
    )
}