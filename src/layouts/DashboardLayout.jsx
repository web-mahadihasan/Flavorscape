import { Outlet } from "react-router";
import DashboardSidebar from "../Dashboard/DashboardSidebar/DashboardSidebar";

const DashboardLayout = () => {
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-4 xl:px-0 border border-yellow-700">
            <section className="grid grid-cols-5">
                {/* Dashboard link  */}
                <nav>
                    <DashboardSidebar/>
                </nav>

                <main className="col-span-4 bg-[#D9D9D9]/25 border border-red-500">
                    <Outlet/>
                </main>
            </section>
        </div>
    );
};

export default DashboardLayout;