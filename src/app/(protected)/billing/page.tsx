import { getUser } from "@/app/lib/server";
import Link from "next/link";
import HeadersWrapper from "@/app/components/HeadersWrapper";

export default async function BillingPage() {
    const user = await getUser();

    return (
        <>
            <HeadersWrapper />
            <main className="p-8 space-y-6">
                <h1 className="text-3xl font-bold">💳 Billing</h1>

                {user ? (
                    <div className="space-y-4">
                        <p className="text-green-600">
                            User {user.email} has access to billing.
                        </p>

                        <div className="bg-white shadow p-4 rounded-lg">
                            <h2 className="font-semibold mb-2">Current Plan</h2>
                            <p>Pro Plan – $12/month</p>
                            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                Upgrade to Premium
                            </button>
                        </div>

                        <div className="bg-white shadow p-4 rounded-lg">
                            <h2 className="font-semibold mb-2">Payment History</h2>
                            <table className="w-full text-left border">
                                <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2">Date</th>
                                    <th className="p-2">Amount</th>
                                    <th className="p-2">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="p-2">2025-08-01</td>
                                    <td className="p-2">$12</td>
                                    <td className="p-2 text-green-600">Paid</td>
                                </tr>
                                <tr>
                                    <td className="p-2">2025-07-01</td>
                                    <td className="p-2">$12</td>
                                    <td className="p-2 text-green-600">Paid</td>
                                </tr>
                                </tbody>
                            </table>
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
