// src/app/page.tsx
import HeadersWrapper from "./components/HeadersWrapper";
import Link from "next/link";
import { getUser } from "./lib/server"; // ✅ csak server componentben lehet

export default async function Home() {
    const user = await getUser();

    return (
        <>
            <HeadersWrapper />

            {user ? (
                <div className="flex flex-col items-center gap-4">
                    <p>User is logged in as {user.email}</p>
                    <form action="/auth/signout" method="post">
                        <button className="bg-red-600 p-2 w-40 text-white rounded-lg text-center">
                            Sign out
                        </button>
                    </form>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-4">
                    <p>Not logged in</p>
                    <Link
                        href="/login"
                        className="bg-emerald-700 p-2 w-40 text-white rounded-lg text-center"
                    >
                        Login
                    </Link>
                </div>
            )}
        </>
    );
}
