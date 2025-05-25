import { Product } from "@/types/product"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import Image from "next/image";
import { formatCurrency } from "@/lib/currency";
import ProductControls from "../shared/ProductControls";

type Props = {
    product: Product
}

export default function ProductDialogContent(props: Props) {
    const { product } = props;

    return (
        <DialogContent className="sm:grid sm:grid-cols-2">
            <div className="w-full aspect-square">
                <img
                    src={product.img_url}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>

            <div className="h-full flex flex-col justify-between">
                <DialogHeader className="text-left">
                    <DialogTitle >{product.name}</DialogTitle>
                    <DialogDescription >{product.description}</DialogDescription>
                </DialogHeader>
                <div className="w-full flex justify-between items-center mt-auto">
                    <p className="font-medium text-[1.125rem] text-detail">{formatCurrency(product.price)}</p>
                    <ProductControls product={product} />
                </div>
            </div>
        </DialogContent>
    )
}