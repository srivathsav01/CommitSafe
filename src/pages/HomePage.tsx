import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";

function HomePage() {

    const navigate = useNavigate();
    return (
    <>
    <div className="flex flex-col justify-center h-[50vh] items-center text-textprimary">
    <h1 className="font-semibold text-3xl">Stop Leaking Secrets: Scan Your GitHub with</h1>
    <h1 className="text-5xl font-serif font-extrabold bg-gradient-to-b from-textprimary via-textsecondary to-textprimary bg-clip-text text-transparent mt-3">
        CommitSafe
    </h1>
    <Button name="Get Started" handleClick={() => {navigate(ROUTES.ANALYSE)}} className="mt-3"/>
    </div>
    </>
    );
}

export default HomePage;