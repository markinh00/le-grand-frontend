import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";
import MenuButton from "./MenuButton";

export function AppSidebar() {
    return (
        <Sidebar className="z-30">
            <SidebarHeader className="p-2 min-h-14 flex justify-center">
                <MenuButton position="sidebar" />
            </SidebarHeader>
            <SidebarContent>
                sidebar content
            </SidebarContent>
        </Sidebar>
    )
}