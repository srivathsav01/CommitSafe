import { FolderGit2, Lock, ShieldAlert, Zap } from "lucide-react";
import DashboardCard from "../components/DashBoardCard";

const trendExample = [
    { day: "Mon", value: 2 },
    { day: "Tue", value: 0 },
    { day: "Wed", value: 4 },
    { day: "Thu", value: 6 },
    { day: "Fri", value: 8 },
];
function DashBoard() {

    return (
        <>
        {/* <div className="text-textsecondary p-2 font-semibold text-lg laptop:text-2xl justify-center align-center flex">
            Dashboard
        </div> */}
            <div className="grid grid-cols-2 laptop:grid-cols-4 gap-4 p-6">
                <DashboardCard
                    title="Repos Scanned"
                    titleicon={<FolderGit2 className="hidden laptop:block" size={20} />}
                    value={8}
                    trendData={trendExample}
                    color="text-green-600"
                />
                <DashboardCard
                    title="Secrets Found"
                    titleicon={<Lock className="hidden laptop:block" size={20} />}
                    value={8}
                    trendData={trendExample}
                    color="text-red-600"
                />
                <DashboardCard
                    title="Critical Issues"
                    titleicon={<ShieldAlert className="hidden laptop:block" size={20} />}
                    value={8}
                    trendData={trendExample}
                    color="text-red-700"
                />
                <DashboardCard
                    title="Quick Scan"
                    titleicon={<Zap className="hidden laptop:block" size={20} />}
                    color="text-blue-600"
                    variant="clickable"
                    onClick={() => alert("Quick Scan Clicked!")}
                />
            </div>
        </>
    );
}

export default DashBoard;