import { Binoculars, Moon, Sun } from "lucide-react";
import Button from "./Button";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../utils/routes";

function Header() {

    const {pathname} = useLocation();
    const Signin = () => {
    
    }

    return ( 
    <div className="item-center flex justify-center">
        <div className="header bg-bgprimary text-textprimary p-3 w-3/4 flex justify-between items-center mt-2 rounded-2xl border border-[#4F4F4F] dark:border-[#dddddd]">
            <Binoculars size={30} strokeWidth={1} className="ml-1.5"/>
            <div className="nav w-64">
                <ul className="flex gap-6 text-lg font-medium justify-between">
                    <li className={`hover:underline underline-offset-4 decoration-2 decoration-textprimary cursor-pointer ${pathname === '/' ? 'text-textprimary font-bold' : ''}`}>
                        <NavLink to="/"> Home </NavLink>
                        </li>
                    <li className={`hover:underline underline-offset-4 decoration-2 decoration-textprimary cursor-pointer ${pathname === '/'+ROUTES.ANALYSE ? 'text-textprimary font-bold' : ''}`}><NavLink to={"/"+ ROUTES.ANALYSE} > Analyse </NavLink></li>
                    <li className={`hover:underline underline-offset-4 decoration-2 decoration-textprimary cursor-pointer ${pathname === '/'+ROUTES.ABOUT ? 'text-textprimary font-bold' : ''}`}><NavLink to={"/"+ ROUTES.ABOUT}> About </NavLink></li>
                </ul>
            </div>
            <div className="actions flex items-center justify-between w-1/12">
                <Button name="Sign in" handleClick={Signin} />
                <button className="text-textprimary cursor-pointer" onClick={()=>{document.documentElement.classList.toggle('dark')}}>
                    <Sun className="dark:hidden" />
                    <Moon className="hidden dark:block" />
                </button>
            </div>
        </div>
    </div>
    );
}

export default Header;