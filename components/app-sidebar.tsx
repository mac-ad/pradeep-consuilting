"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Menu",
      url: "/admin/dashboard",
      items: [
        {
          title: "Dashboard",
          url: "/admin/dashboard",
        },
        {
          title: "Blogs",
          url: "/admin/blogs",
        },
        {
          title: "Events",
          url: "/admin/events",
        },
        {
          title: "Universities",
          url: "/admin/universities",
        },
        {
          title: "contacts",
          url: "/admin/contacts",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex flex-col h-16 items-center justify-center gap-2 mt-5 mb-5">
          <Image
            src="/ample-logo.svg"
            alt="ample logo"
            height={40}
            width={40}
          />
          <h1 className="text-lg font-semibold text-center">
            Ample International Education
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
