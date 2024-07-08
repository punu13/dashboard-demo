import Header from "@/components/sidebar/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import ToggleSwitch from "@/components/switch/ToggleSwitch";

export const metadata = {
  title: "Convergify Dashboard",
  description: "Convergify Dashboard is a dashboard for Convergify",
};

export default function DashboardLayout({ children }) {
  return (
    <section className="flex flex-col w-screen h-screen max-h-screen">
      <div className="block md:hidden">
        {/* Mobile Header */}
        <Header />
      </div>
      <section className="flex w-full h-screen max-h-screen overflow-hidden relative">
        {/*Desktop Sidebar */}
        <div className="md:block hidden">
          <ToggleSwitch />
        </div>
        <Sidebar />
        {/* Main Content */}
        <main className="w-full overflow-auto">{children}</main>
      </section>
    </section>
  );
}
