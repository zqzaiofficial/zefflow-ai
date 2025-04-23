"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarTrigger
} from "@/components/ui/sidebar"
import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const chats = [
    {
        id: "af735f07-1aed-42cc-8ff6-83a983a977f7",
        name: "Query about how to use Spotify API",
        isActive: true
    },
    {
        id: "30fba24c-a5fb-4a9a-87bd-399d7174e040",
        name: "Social Media Marketing",
    },
    {
        id: "db7cc9fe-cd3d-49fe-8343-3b7a90e6ee89",
        name: "How to increase Instagram followers",
    },
    {
        id: "79a2be53-b825-4995-a8fb-740e886d5613",
        name: "Writing email about new product",
    } 
]

// get the id of this chat
  
  export function AppSidebar() {
    return (
      <Sidebar className={poppins.className}>
        <SidebarHeader>
            <h1 className="text-2xl text-[#242645] ml-3 font-semibold">Zefflow</h1>
            <div className="bg-gray-100 p-0.25 ml-1 w-fit border-1 scale-90 border-gray-200 rounded-sm absolute right-3">
              <SidebarTrigger className="bg-[#a9d0f1] rounded-sm scale-90" />
            </div>
        </SidebarHeader>
        <SidebarContent className="mt-10 ml-5">
          <SidebarGroup>
            <SidebarGroupContent>
                <SidebarGroupLabel><p className="text-[9px] text-gray-500 font-light">Chats</p></SidebarGroupLabel>
                <SidebarMenu>
                    {chats.map((chat) => (
                        <SidebarMenuItem key={chat.id} className={`${chat.isActive ? "bg-[#2672e8] !text-white" : ""} text-gray-500 rounded-sm`}>
                            <SidebarMenuButton>
                                {chat.name.length > 20 ? chat.name.slice(0, 20) + "..." : chat.name}
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  