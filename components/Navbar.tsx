import { ModeToggle } from '../app/dark-mode'
import AppLogo from './AppLogo'
import Logout from './Logout'
import { auth } from '@/app/api/auth/auth'

const Navbar = async() => {
  const session = await auth()
  return (
    <div className='flex m-5 mx-8 items-center justify-between flex-wrap'>
      <AppLogo />
      <div className='flex gap-4 items-center flex-wrap justify-center md:justify-start'>
        <a
          href='#'
          className='hover:underline'
        >
          Home
        </a>
        <a
          href='#'
          className='hover:underline'
        >
          About
        </a>
      </div>
      <div className='flex gap-4 items-center flex-wrap justify-end'>
      <Logout session={session} />
        <ModeToggle />
      </div>
    </div>
  )
}
export default Navbar
