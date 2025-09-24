import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useState } from "react";
import SideNav from "../components/SideNav";

function AppLayout() {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading" || navigation.state === "submitting";
    const [isNavOpen, setIsNavOpen] = useState(false);

    return ( 
    <>
    {isLoading && <Loader />}
    <div className="min-h-screen bg-bgsecondary text-textsecondary w-full">
      <Header setIsNavOpen={setIsNavOpen} />
      <SideNav isOpen={isNavOpen} onClose={setIsNavOpen} />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
    </>
    );
}

export default AppLayout;