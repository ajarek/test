import { SignIn } from '@/components/SignIn'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full min-h-[calc(100vh-32px*2-48px)] flex flex-col items-center justify-center  p-4 gap-4 '>
      <h1 className='text-2xl font-bold'>Zaloguj się</h1>
      <SignIn />
    </div>
  )
}

export default Login
