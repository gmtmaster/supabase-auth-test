'use client';


import { useTransition } from "react";
import toast from "react-hot-toast";
import { logoutAction } from "../actions/users";
import { useRouter } from "next/navigation";



function SignOutButton() {

const [isPending, startTransition] = useTransition();
const router = useRouter();

    const handleClickSignOutButton = (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await logoutAction();

            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                router.push("/");
                toast.success("Succesfully signed out");
            }
        });
    };

    return(
        <button 
        onClick={handleClickSignOutButton}
        className="rounded-lg p-2 bg-emerald-700 text-white flex justify-center"
        >
            Sign Out
        </button>
    )
}