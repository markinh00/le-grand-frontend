import { IoCartOutline } from "react-icons/io5";
import CartList from "./CartList";
import CartFooter from "./CartFooter";

export default async function Cart() {
    return (
        <div
            className="w-full h-14 fixed bottom-0 right-0 md:w-[320px] md:bottom-4 md:right-4 md:h-[calc(100vh-56px-32px)]">
            <form
                action={""}
                className="bg-card shadow-sm border w-full h-full md:w-[320px] md:max-w-[320px] flex md:flex-col items-center p-2 md:justify-between md:rounded-xl">
                <div className="w-full hidden md:flex md:flex-col">
                    <div className="w-full flex justify-between p-2">
                        <h2 className="font-bold">Carrinho</h2>
                        <IoCartOutline />
                    </div>
                </div>
                <CartList className="hidden md:flex" />
                <CartFooter />
            </form>
        </div>
    )
}