import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";

function AppLayout() {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading" || navigation.state === "submitting";

    return ( 
    <>
    {isLoading && <Loader />}
    <div className="min-h-screen bg-bgsecondary text-textsecondary w-full">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
    </>
    );
}

export default AppLayout;