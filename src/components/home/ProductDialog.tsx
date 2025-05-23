import { Product } from "@/types/product"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

type Props = {
    product: Product
}

export default function ProductDialogContent(props: Props) {
    const { product } = props;

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{product.name}</DialogTitle>
                <DialogDescription>{product.description}</DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}