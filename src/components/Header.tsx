import { Binoculars, EllipsisVertical, LogIn, Moon, Sun, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { toTitleCase } from "../utils/utils";
import { useUser } from "../contexts/UserContexts";
import { useState } from "react";
import { motion } from "framer-motion";

function Header({ setIsNavOpen}: {setIsNavOpen: (isOpen: boolean)=>void}) {

    const { user,setUser } = useUser();
    const {pathname} = useLocation();
    const [hovered, setHovered] = useState<string|null>(null);
    const [isUserDrawerOpen,setIsUserDrawerOpen] = useState<boolean>(false);
    const Routes = [
        { path: "/", label: toTitleCase(ROUTES.HOME) },
        { path: "/" + ROUTES.DASHBOARD, label: toTitleCase(ROUTES.DASHBOARD) },
        { path: "/" + ROUTES.ANALYSE, label: toTitleCase(ROUTES.ANALYSE) },
        { path: "/" + ROUTES.SETTINGS, label: toTitleCase(ROUTES.SETTINGS) },
    ];
    const Signin = () => {
    
    }

    return ( 
    <div className="item-center flex justify-center">
        <div className="header bg-bgprimary text-textprimary p-3 w-3/4 flex justify-between items-center mt-2 rounded-2xl border border-[#4F4F4F] dark:border-[#dddddd]">
            <Binoculars size={30} strokeWidth={1} className="ml-1.5"/>
                <div className="nav w-64 hidden laptop:block">
                    <ul className="flex flex-col laptop:flex-row gap-6 text-lg font-medium justify-between relative">
                        {Routes.map(({ path, label }) => {
                            const isActive = pathname === path;
                            return (
                                <li key={path} className={`relative cursor-pointer ${isActive ? "text-textprimary font-bold" : ""}`}>
                                    <NavLink
                                        to={path}
                                        className="flex flex-col items-start hover:text-textsecondary transition duration-200"
                                        onMouseEnter={() => setHovered(path)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        {label}
                                        {(hovered === path || isActive) && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-textprimary"
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            <div className="actions flex items-center justify-end w-1/5">
                { user ? 
                    <div className="relative">
                        <User 
                            className="cursor-pointer" 
                            onClick={() => setIsUserDrawerOpen(!isUserDrawerOpen)}
                        />
                        {isUserDrawerOpen && (
                            <div className="absolute right-0 top-full mt-2 bg-bgprimary border border-[#4F4F4F] dark:border-[#dddddd] rounded-lg shadow-lg p-4 min-w-48 z-50">
                                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#4F4F4F] dark:border-[#dddddd]">
                                    <User size={20} />
                                    <div>
                                        <p className="font-medium">{user.name}</p>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => {
                                        setUser(null);
                                        setIsUserDrawerOpen(false);
                                    }}
                                    className="w-full text-left hover:bg-bglight hover:text-textsecondary rounded px-2 py-1 transition">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                    :
                    <button onClick={Signin} className="laptop:cursor-pointer laptop:bg-bglight laptop:text-white laptop:dark:text-black laptop:px-3 laptop:py-1 laptop:rounded-lg laptop:border laptop:border-[#4F4F4F] laptop:hover:bg-[#1E1E1E] laptop:dark:hover:bg-[#F3F3F3] laptop:hover:font-semibold laptop:transition">
                        <LogIn className="laptop:hidden" />
                        <span className="ml-1.5 hidden laptop:inline">Sign in</span>
                    </button>
                }
                <button className="text-textprimary cursor-pointer ml-2" onClick={()=>{document.documentElement.classList.toggle('dark')}}>
                    <Sun className="dark:hidden" />
                    <Moon className="hidden dark:block" />
                </button>
                <button className="laptop:hidden text-textprimary cursor-pointer ml-2" onClick={()=>setIsNavOpen(true)}>
                    <EllipsisVertical />
                </button>
            </div>
        </div>
    </div>
    );
}

export default Header;