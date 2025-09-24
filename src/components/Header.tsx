import { Binoculars, EllipsisVertical, LogIn, Moon, Sun } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { toTitleCase } from "../utils/utils";

function Header({ setIsNavOpen}: {setIsNavOpen: (isOpen: boolean)=>void}) {

    const {pathname} = useLocation();
    const Signin = () => {
    
    }

    return ( 
    <div className="item-center flex justify-center">
        <div className="header bg-bgprimary text-textprimary p-3 w-3/4 flex justify-between items-center mt-2 rounded-2xl border border-[#4F4F4F] dark:border-[#dddddd]">
            <Binoculars size={30} strokeWidth={1} className="ml-1.5"/>
             <div className="nav w-64 hidden laptop:block">
                <ul className="flex flex-col laptop:flex-row gap-6 text-lg font-medium justify-between">
                    <li className={`hover:underline underline-offset-4 decoration-2 decoration-textprimary cursor-pointer ${pathname === '/' ? 'text-textprimary font-bold' : ''}`}>
                        <NavLink to="/"> {toTitleCase(ROUTES.HOME)} </NavLink>
                    </li>
                    <li className={`hover:underline underline-offset-4 decoration-2 decoration-textprimary cursor-pointer ${pathname === '/'+ROUTES.DASHBOARD ? 'text-textprimary font-bold' : ''}`}><NavLink to={"/"+ ROUTES.DASHBOARD} > {toTitleCase(ROUTES.DASHBOARD)} </NavLink></li>
                    <li className={`hover:underline underline-offset-4 decoration-2 decoration-textprimary cursor-pointer ${pathname === '/'+ROUTES.ANALYSE ? 'text-textprimary font-bold' : ''}`}><NavLink to={"/"+ ROUTES.ANALYSE} > {toTitleCase(ROUTES.ANALYSE)} </NavLink></li>
                    <li className={`hover:underline underline-offset-4 decoration-2 decoration-textprimary cursor-pointer ${pathname === '/'+ROUTES.SETTINGS ? 'text-textprimary font-bold' : ''}`}><NavLink to={"/"+ ROUTES.SETTINGS}> {toTitleCase(ROUTES.SETTINGS)} </NavLink></li>
                </ul>
            </div>
            <div className="actions flex items-center justify-end w-1/5">
                <button onClick={Signin}className="laptop:cursor-pointer laptop:bg-bglight laptop:text-white laptop:dark:text-black laptop:px-3 laptop:py-1 laptop:rounded-lg laptop:border laptop:border-[#4F4F4F] laptop:hover:bg-[#1E1E1E] laptop:dark:hover:bg-[#F3F3F3] laptop:hover:font-semibold laptop:transition">
                    <LogIn className="laptop:hidden" />
                    <span className="ml-1.5 hidden laptop:inline">Sign in</span>
                </button>
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