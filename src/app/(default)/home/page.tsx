import Cart from "@/components/home/Cart";
import ProductsCard from "@/components/home/ProductsCard";


export default async function Home() {
    return (
        <div className="w-full h-[calc(100%-56px)] flex flex-col md:flex-row justify-between">
            <ProductsCard />
            <Cart />
        </div>
    );
}
