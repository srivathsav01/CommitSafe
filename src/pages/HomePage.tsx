import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { Clock } from "lucide-react";
import { useState } from "react";
import { motion, type Transition } from "framer-motion";

function HomePage() {

    interface Scan {
        id: number;
        repoName: string;
        scannedAt: string;
        status: string;
    }

    const [recentScans, setRecentScans] = useState<Scan[]>([]);
    const navigate = useNavigate();
    return (
    <>
    <div className="flex flex-col justify-center h-[30vh] items-center text-textprimary">
        <h1 className="font-semibold text-md laptop:text-3xl">Stop Leaking Secrets: Scan Your GitHub with</h1>
        <h1 className="text-3xl laptop:text-5xl font-serif font-extrabold bg-gradient-to-b from-textprimary via-textsecondary to-textprimary bg-clip-text text-transparent laptop:mt-3">
            CommitSafe
        </h1>
        <Button name="Get Started" handleClick={() => {navigate(ROUTES.ANALYSE)}} className="mt-5"/>
    </div>
    <div className="">
        <h1 className="font-semibold text-xl flex items-center justify-center text-textprimary mb-3">
            <Clock className="inline mr-2"/>
            Recent Scans
        </h1>
        {
            recentScans.length == 0 && 
        <div className="flex flex-col items-center justify-center text-textsecondary">
            <h1 className="text-lg">No recent scans</h1>
            <p className="text-sm">Start by clicking the "Get Started" button above</p>
        </div>
        }
        <div className="flex justify-center items-center">
            <div className="w-3/4 grid grid-cols-4 gap-4 px-4">
                {recentScans.map((scan, index) => (
                <div key={index} className="border border-textsecondary rounded-lg p-3 text-textprimary">
                    <h1 className="font-semibold">{scan.repoName}</h1>
                    <p className="text-sm">Scanned on: {new Date(scan.scannedAt).toLocaleString()}</p>
                    <p className="text-sm">Status: {scan.status}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
    </>
    );
}

export default HomePage;