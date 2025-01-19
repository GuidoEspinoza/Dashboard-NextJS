
import { FaPowerOff } from 'react-icons/fa'
import Logo from '../components/Logo'
import NavLinks from './NavLinks'
import Link from 'next/link'



const SideNav = () => {
    return (
        <div className='flex h-full flex-col px-3 py-4 md:px-2'>
            <Link href="/" className='mb-2 flex h-auto items-center justify-start bg-slate-900 p-4'>
                <div className='w-full text-white'>
                    <Logo />
                </div>
            </Link>
            <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
                <NavLinks />
                <div className='hidden h-auto w-full grow md:block'></div>
                <Link href="/" className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-500 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'>
                    <FaPowerOff className='w-6' />
                    <p className='hidden md:block'>Logout</p>
                </Link>
            </div>
        </div>
    )
}

export default SideNav