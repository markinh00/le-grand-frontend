import getAllProducts from "@/actions/customer/getAllProducts";
import SearchBar from "../shared/SearchBar";
import CategoryList from "./CategoryList";

export default async function ProductsCard() {
    const products = await getAllProducts();
    const distinctCategories = [...new Set(products.map(p => p.category))];

    return (
        <form className="bg-card-background rounded-xl border shadow-sm m-4 p-4 w-full max-w-[calc(100%-32px)] md:max-w-[calc(100%-320px-32px-16px)] max-h-[calc(100vh-56px-56px-32px)] md:max-h-[calc(100vh-56px-32px)] overflow-hidden">
            <SearchBar orderBy={[{ key: "cetegory", value: "Categoria" }, { key: "name", value: "Nome" }]} />
            <CategoryList categories={distinctCategories} products={products} />
        </form>
    )
}