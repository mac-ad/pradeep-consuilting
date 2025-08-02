import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Dashboard() {
  return (
    <div>
      <SidebarProvider>
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="bg-muted/20 aspect-video rounded-xl" />
              <div className="bg-muted/30 aspect-video rounded-xl" />
              <div className="bg-muted/40 aspect-video rounded-xl" />
            </div>
            <div className="bg-muted/10 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
