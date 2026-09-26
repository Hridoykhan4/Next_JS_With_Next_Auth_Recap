import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import LoginButton from "@/components/LoginButton";
import { getServerSession } from "next-auth";
import UserCard from "@/components/UserCard";
import { authOptions } from "@/lib/authOptions";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background Subtle Gradient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-2xl z-10 space-y-8 text-center">
        {/* Tech Icons Stack */}
        <div className="flex justify-center items-center gap-6 text-slate-400">
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
            <FaReact size={32} className="animate-[spin_10s_linear_infinite] text-sky-400" />
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
            <IoShieldCheckmarkSharp size={32} className="text-amber-400 " />
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
            <RiNextjsLine size={32} className="text-white" />
          </div>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
            <SiMongodb size={32} className="text-emerald-500" />
          </div>
        </div>

        {/* Hero Title */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            NextAuth Showcase
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto">
            Full-stack authentication flow powered by Next.js 15, MongoDB, and NextAuth.js
          </p>
        </div>

        {/* Login / Auth Action */}
        <div className="flex justify-center">
          <LoginButton />
        </div>

        {/* User Status Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-4">
          {/* Client-side Session Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <UserCard />
          </div>

          {/* Server-side Session Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md shadow-xl flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  Server Session
                </span>
                <span className={`h-2 w-2 rounded-full ${session ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
              </div>

              {session ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    {session.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full border border-slate-700"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-300">
                        {session.user?.name?.[0] || "U"}
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-semibold text-white">{session.user?.name}</h3>
                      <p className="text-xs text-slate-400">{session.user?.email}</p>
                    </div>
                  </div>

                  {session.user?.role && (
                    <div className="inline-block text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      Role: <span className="font-semibold text-amber-400">{session.user.role}</span>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">No active session on server.</p>
              )}
            </div>

            {/* Debug Payload Preview */}
            {session && (
              <details className="mt-2 text-[11px] text-slate-400 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80">
                <summary className="cursor-pointer font-mono hover:text-slate-200">Raw JSON Payload</summary>
                <pre className="mt-2 overflow-x-auto text-[10px] leading-relaxed text-emerald-400">
                  {JSON.stringify(session, null, 2)}
                </pre>
              </details>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}