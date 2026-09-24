'use client'

import { signIn } from "next-auth/react";

const LoginButton = () => {

    const btnStyle = `className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/20"`

    return (
        <div>
            <h2>Not Signed in ?</h2>
            <button className={btnStyle} onClick={() => signIn()}>Login</button>
        </div>
    );
};

export default LoginButton;