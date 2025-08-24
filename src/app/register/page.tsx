'use client';

import { useTransition } from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Loader2 } from "lucide-react";
import toast from 'react-hot-toast';
import { createAccountAction } from '../actions/users';

const Register = () => {

    const router = useRouter();
    const [isPending, startTransition] = useTransition();

const handleClickCreateAccountButton = (formData: FormData) => {
    startTransition(async () => {
        const {errorMessage} = await createAccountAction(formData);
        
        if (errorMessage) {
            toast.error(errorMessage)
        } else {
            router.push('/')
            toast.success("success")
        }
    });
};

  return (
    <section className='items-center flex justify-center mt-20'>

    
    <div className='bg-emerald-700 w-96 rounded-lg p-8 shadow-2'>
        <h1 className='text-2xl text-center mb-8'>
            Create Account
        </h1>
        <form 
        className=''
        action={handleClickCreateAccountButton}
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
                    
            <button className='rounded-lg p-2 mt-4 bg-black hover:bg-zinc-900 text-white flex justify-center'
            disabled={isPending}
            >
                {isPending ? <Loader2 className="animate-spin"/> : "Create Account"}
            </button>
        </form>

        <p className='text-center text-sm mt-4'>
            Alredy have account?
            <Link href="/login" className='underline'>
            Login
            </Link>
        </p>
    </div>
    </section>
  )
}

export default Register