import getAllProducts from "@/actions/customer/getAllProducts";
import Cart from "@/components/home/Cart";
import CategoryList from "@/components/home/CategoryList";


export default async function Home() {
    const products = await getAllProducts();
    const distinctCategories = [...new Set(products.map(p => p.category))];

    return (
        <div className="w-full mt-14 p-4">
            <CategoryList categories={distinctCategories} products={products} />
            <Cart/>
        </div>
    );
}
