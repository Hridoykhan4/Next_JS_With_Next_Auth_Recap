import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="border-b-2 py-3 text-center space-x-6">
                <Link href="/">Home</Link>
                <Link href="/public">public</Link>
                <Link href="/private">private</Link>
                <Link href="/admin-dashboard">Admin Dashboard</Link>
                <Link href="/user-dashboard">User Dashboard</Link>
            </div>
        </div>
    );
};

export default Navbar;