import { NavLink, useLocation } from "react-router-dom";
import { toTitleCase } from "../utils/utils";
import { ROUTES } from "../utils/routes";

function SideNav({ isOpen, onClose }: { isOpen: boolean, onClose: (isOpen: boolean) => void }) {

    const { pathname } = useLocation();

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => onClose(false)}
                    aria-hidden="true"
                />
            )}
            <div
                tabIndex={-1}
                aria-hidden={!isOpen}
                className={`fixed top-0 left-0 h-full w-64 bg-bgprimary text-textprimary z-50 transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                <ul className="flex flex-col gap-4 p-4 text-lg font-medium">
                    {Object.values(ROUTES).map((route) => {
                        const path = route === ROUTES.HOME ? "/" : `/${route}`;
                        return (
                            <li key={route}>
                                <NavLink
                                    to={path}
                                    onClick={() => onClose(false)}
                                    className={`block hover:underline underline-offset-4 decoration-2 decoration-textprimary
                  ${pathname === path ? "font-bold text-textprimary" : ""}`}
                                >
                                    {toTitleCase(route)}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default SideNav;