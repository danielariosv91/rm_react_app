import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom";

export default function SidebarMenu() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content base-100 p-7">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/character">Characters</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
