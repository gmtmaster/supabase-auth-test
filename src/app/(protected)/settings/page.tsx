import { getUser } from "@/app/lib/server";
import Link from "next/link";
import HeadersWrapper from "@/app/components/HeadersWrapper";

export default async function SettingsPage() {
    const user = await getUser();

    return (
        <>
            <HeadersWrapper />
            <main className="p-8 space-y-6">
                <h1 className="text-3xl font-bold">⚙️ Settings</h1>

                {user ? (
                    <div className="space-y-4">
                        <p className="text-green-600">Settings available for {user.email}</p>

                        <div className="bg-white shadow p-4 rounded-lg">
                            <h2 className="font-semibold mb-2">Profile</h2>
                            <form className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    defaultValue="John Doe"
                                    className="w-full border rounded p-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    defaultValue="johndoe"
                                    className="w-full border rounded p-2"
                                />
                                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                                    Save
                                </button>
                            </form>
                        </div>

                        <div className="bg-white shadow p-4 rounded-lg">
                            <h2 className="font-semibold mb-2">Notifications</h2>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" defaultChecked /> Email Updates
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" /> Product Announcements
                            </div>
                        </div>
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
