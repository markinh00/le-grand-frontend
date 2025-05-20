"use client"

import { FaRegUser } from "react-icons/fa";
import { IconButton } from "./IconButton";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { UserRead } from "@/types/user";
import logout from "@/actions/auth/logout";

type Props = {
    user: UserRead
}

export default function UserIcon({ user }: Props) {

    const handleClick = async () => {
        await logout();
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <IconButton>
                    <FaRegUser color="white" />
                </IconButton>
            </PopoverTrigger>
            <PopoverContent className="absolute top-3 -right-5 w-fit flex flex-col items-end">
                <div className="mb-2">
                    <p className="w-full">{user.data.name}</p>
                    <p className="w-full">{user.data.email}</p>
                </div>
                <Button variant="secondary" onClick={handleClick}>sair</Button>
            </PopoverContent>
        </Popover>
    )
}