import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";
import MenuButton from "./MenuButton";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="p-2">
                <MenuButton position="sidebar"/>
            </SidebarHeader>
            <SidebarContent>sidebar content</SidebarContent>
        </Sidebar>
    )
}