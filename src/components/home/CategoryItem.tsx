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
            className="w-full"
        >
            <CollapsibleTrigger asChild className="mb-4">
                <div className="w-full flex items-center justify-between p-2 hover:cursor-pointer hover:bg-primary/5 rounded-xl">
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