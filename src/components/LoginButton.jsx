'use client'

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const LoginButton = () => {
    const { data: session } = useSession()

    const btnStyle = `className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/20"`
    if (session) return <div>
        <button className={btnStyle} onClick={() => signOut()}>Sign Out</button>
    </div>
    return (
        <div className="space-x-3">
            <h2>Not Signed in ?</h2>
            <button className={btnStyle} onClick={() => signIn()}>Login</button>
            <Link className={btnStyle} href="/register">Register Now</Link>
        </div>
    );
};

export default LoginButton;