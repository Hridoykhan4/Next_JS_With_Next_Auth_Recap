import Link from "next/link";
import { FaShieldHalved, FaArrowLeft, FaHouse } from "react-icons/fa6";

const ForbiddenPage = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Glowing Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full max-w-md bg-slate-900/80 border border-slate-800/80 rounded-2xl p-8 backdrop-blur-xl shadow-2xl text-center z-10 space-y-6">
                {/* Shield Icon Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-500 shadow-inner mb-2 animate-pulse">
                    <FaShieldHalved size={42} />
                </div>

                {/* Title & Status */}
                <div className="space-y-2">
                    <span className="text-xs font-bold tracking-widest text-rose-400 uppercase bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                        403 Error
                    </span>
                    <h1 className="text-3xl font-extrabold tracking-tight text-white pt-2">
                        Access Denied
                    </h1>
                    <p className="text-sm text-slate-400">
                        You don't have permission to access this page. Please contact an administrator if you believe this is a mistake.
                    </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-800 w-full" />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <Link
                        href="/"
                        className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/30 active:scale-[0.98]"
                    >
                        <FaHouse size={14} />
                        <span>Go to Home</span>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ForbiddenPage;