import { formatCurrency } from "@/lib/currency";
import { Product } from "@/types/product";
import Image from "next/image";
import ProductDialogContent from "./ProductDialog";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ProductControls from "../shared/ProductControls";


type Props = {
    product: Product
}

export default function ProductItem(props: Props) {
    const { product } = props;

    return (
        <Dialog>
            <div className="flex max-h-[116px] bg-card-background rounded-xl border shadow-sm" key={product.id}>
                <DialogTrigger asChild>
                    <div className="relative w-[116px] h-[116px]">
                        <Image
                            priority
                            placeholder="empty"
                            src={product.img_url}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 116px, 116px"
                            className="object-cover rounded-l-xl"
                        />
                    </div>
                </DialogTrigger>
                <div className="flex flex-col justify-between p-2 w-full">
                    <DialogTrigger asChild>
                        <div className="hover:cursor-pointer">
                            <div className="font-medium line-clamp-1">{product.name}</div>
                            <div className="line-clamp-1 text-primary/50">{product.description}</div>
                        </div>
                    </DialogTrigger>
                    <div className="w-full flex justify-between items-center">
                        <p className="font-medium text-[1.125rem] text-detail">{formatCurrency(product.price)}</p>
                        <ProductControls product={product} />
                    </div>
                </div>
            </div>
            <ProductDialogContent product={product} />
        </Dialog>
    )
}