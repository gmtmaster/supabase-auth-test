// src/app/components/Headers.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { logoutAction } from "@/app/actions/users"

interface HeadersProps {
    user: any | null
}

export default function Headers({ user }: HeadersProps) {
    const navLinks = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Billing', href: '/billing' },
        { title: 'Settings', href: '/settings' },
    ]

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
            {/* Logo */}
            <h1 className="text-xl font-bold tracking-wide">Logo</h1>

            {/* Navigation links */}
            <ul className="flex gap-6 items-center">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="hover:text-indigo-400 transition-colors"
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}

                {!user ? (
                    <>
                        <li>
                            <Link href="/login" className="hover:text-indigo-400 transition-colors">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/register" className="hover:text-indigo-400 transition-colors">
                                Register
                            </Link>
                        </li>
                    </>
                ) : (
                    <li>
                        <form action={logoutAction}>
                            <button className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition">
                                Logout
                            </button>
                        </form>
                    </li>
                )}
            </ul>
        </nav>
    )
}
