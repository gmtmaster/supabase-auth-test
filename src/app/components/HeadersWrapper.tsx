// src/app/components/HeadersWrapper.tsx
import { getUser } from "@/app/lib/server";
import Headers from "./Headers";

export default async function HeadersWrapper() {
    const user = await getUser();
    return <Headers user={user} />;
}
