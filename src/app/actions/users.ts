// src/app/actions/users.ts
"use server";

import { createSupabaseClient } from "@/app/lib/server";
import { getErrorMessage } from "../lib/utils";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
    try {
        const email = (formData.get("email") as string)?.trim();
        const password = formData.get("password") as string;

        if (!email || !password) throw new Error("Email és jelszó kötelező");

        const supabase = await createSupabaseClient();
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
}

/* ----------------- LOGOUT ----------------- */
export async function logoutAction() {
    try {
        const supabase = await createSupabaseClient();
        const { error } = await supabase.auth.signOut();
        if (error) throw error;

        // kijelentkezés után irány a login oldal
        redirect("/login");
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
}
