"use client"

import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import Logo from "./Logo";


type Props = {
    position: "header" | "sidebar",
}

export default function MenuButton({ position }: Props) {
    const { open, isMobile } = useSidebar();

    if (position === "header" && (!open || isMobile))
        return (
            <div className='flex items-center text-header-text'>
                <SidebarTrigger className='mr-2' />
                <Logo />
            </div>
        )

    if (position === "sidebar" && open)
        return (
            <div className='flex items-center text-header-text'>
                <SidebarTrigger className='mr-2' />
                <Logo />
            </div>
        )
}