import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { OrgSidebar } from "./_components/org-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main>
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="min-h-[100vh] h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};
export default DashboardLayout;
