// app/login/page.tsx
'use client'

import { useState } from "react"
import { loginAction } from "../actions/users"
import Link from "next/link";

export default function Login() {
  const [error, setError] = useState<string | null>(null)

  async function handleClickLoginButton(formData: FormData) {
    const { errorMessage } = await loginAction(formData)
    if (errorMessage) {
      setError(errorMessage)
    } else {
      window.location.href = "/" // redirect sikeres login után
    }
  }

  return (
    <section className='items-center flex justify-center mt-20'>

    
    <div className='bg-emerald-700 w-96 rounded-lg p-8 shadow-2'>
        <h1 className='text-2xl text-center mb-8'>
            Login
        </h1>
        <form 
        className=''
        action={handleClickLoginButton}
        >
            <input 
            type="email" 
            name='email'
            className='rounded-lg p-2 bg-white mb-2'
            placeholder='Email'
            />
            <input 
            type="password" 
            name="password" 
            className="rounded-lg p-2 bg-white " 
            placeholder='Password'
            />
                    
            <button className='rounded-lg p-2 mt-4 bg-black hover:bg-zinc-900 text-white flex justify-center'>
                Login
            </button>
        </form>

        <p className='text-center text-sm mt-4'>
            Dont have and aacount ?
            <Link href="/register" className='underline'>
            Register
            </Link>
        </p>
    </div>
    </section>
  )
}
