"use client"

import { Product } from "@/types/product"
import { useState } from "react";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";
import ProductList from "./ProductList";
import { HiChevronUpDown } from "react-icons/hi2";
import { IconButton } from "../shared/IconButton";

type Props = {
    category: string
    products: Product[]
}

export default function CategoryItem(props: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const categoryProducts = props.products.filter(product => product.category === props.category);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            key={props.category}
            className="w-full mb-4 last:mb-14 md:last:mb-0"
        >
            <CollapsibleTrigger asChild className="mb-2">
                <div className="w-full flex justify-between p-2 hover:cursor-pointer hover:bg-primary/5">
                    <h2 className="font-bold mr-2">{props.category}</h2>

                    <IconButton className="ml-2">
                        <HiChevronUpDown />
                        <span className="sr-only">Toggle</span>
                    </IconButton>
                </div>
            </CollapsibleTrigger>
            <ProductList products={categoryProducts} />
        </Collapsible>
    )
}