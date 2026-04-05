import { Outlet, useLocation } from "react-router";
import { BottomNav } from "./BottomNav";

const hideNavPaths = ["/photo-select", "/processing", "/result", "/saved", "/subscription"];

export function Layout() {
  const location = useLocation();
  const showNav = !hideNavPaths.some((p) => location.pathname.startsWith(p));

  return (
    <div className="w-full h-full relative flex flex-col bg-[#f8f9fa]">
      <div className={`flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide ${showNav ? 'pb-24' : ''}`}>
        <Outlet />
      </div>
      {showNav && <BottomNav />}
    </div>
  );
}
