import { getUser } from "@/app/lib/server";
import Link from "next/link";
import HeadersWrapper from "@/app/components/HeadersWrapper";

export default async function DashboardPage() {
    const user = await getUser();

    return (
        <>
            <HeadersWrapper />
            <main className="p-8 space-y-6">
                <h1 className="text-3xl font-bold">📊 Dashboard</h1>

                {user ? (
                    <div className="space-y-4">
                        <p className="text-green-600">Logged in as {user.email}</p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white shadow p-4 rounded-lg">
                                <h2 className="font-semibold">Active Projects</h2>
                                <p>3 running</p>
                            </div>
                            <div className="bg-white shadow p-4 rounded-lg">
                                <h2 className="font-semibold">Tasks Done</h2>
                                <p>42 ✅</p>
                            </div>
                            <div className="bg-white shadow p-4 rounded-lg">
                                <h2 className="font-semibold">Revenue</h2>
                                <p>$1,240</p>
                            </div>
                        </div>

                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                            Create New Report
                        </button>
                    </div>
                ) : (
                    <p className="text-red-600">
                        Not logged in – <Link href="/login">Go to login</Link>
                    </p>
                )}
            </main>
        </>
    );
}
