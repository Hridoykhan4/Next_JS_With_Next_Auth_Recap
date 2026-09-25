'use client'

import { useSession } from "next-auth/react";

const UserCard = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>;
    }


    if (session) return <div>
        <h2>Welcome, {session?.user?.name}</h2>
        <h2>Signed in as {session?.user?.email}</h2>
        <p>Will Logged out at {new Date(session?.expires).toISOString().split('T')[0]}</p>
        {
            session?.user?.role && <p>{session?.user?.role || "Role Not Defined"}</p>
        }
    </div>
};

export default UserCard;