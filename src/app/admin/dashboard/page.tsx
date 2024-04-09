'use client';
import Loader from '@/components/loader';
import Link from 'next/link';
import { useEffect, } from 'react';

export default function AdminDashboard() {
    useEffect(() => {
        
        try {
            const accessTokenValue = document.cookie
            .split("; ")
            .find((row) => row.startsWith("adminaccessToken"))
            ?.split("=")[1];
            if (!accessTokenValue) {
                window.location.href = "/admin"
            }
        } catch (error) {
            window.location.href = "/admin";
        }
    },[])
return (
    <div className="flex flex-col h-screen">
        <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            <div>
                <Link
                    href="/admin/logout"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Logout
                </Link>
            </div>
        </header>
        
        <main className="flex-1 flex justify-center"> 
            <div className="w-1/2 p-6 border-r border-gray-300">
                <Link
                    href="/admin/questions"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
                >
                    Questions
                </Link>
            </div>
            <div className="w-1/2 p-6">
                <Link
                    href="/admin/responses"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded"
                >
                    Responses
                </Link>
            </div>
        </main>
    </div>
);
}