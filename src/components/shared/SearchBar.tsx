"use client"

import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { useState } from "react";

type OrderByType = {
    key: string
    value: string
}

type Props = {
    orderBy: OrderByType[]
}

export default function SearchBar({ orderBy }: Props) {
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const [onFocus, setOnFocus] = useState<boolean>(false);

    return (
        <div className="w-full h-14 py-2 flex relative">
            <IoIosSearch className={`absolute top-1/3 left-2 ${onFocus ? "hidden" : ""}`} />
            <Input onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)} />
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="ml-2">
                    <Button variant="outline" className="items-center select-none">
                        <p>{selected ?? orderBy[0].value}</p>
                        <IoIosArrowDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card-background rounded-sm border shadow-sm mt-2">
                    <DropdownMenuGroup>
                        {orderBy.map(item => {
                            return (
                                <DropdownMenuItem key={item.key} onClick={() => setSelected(item.value)}>
                                    {item.value}
                                </DropdownMenuItem>
                            )
                        })}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}