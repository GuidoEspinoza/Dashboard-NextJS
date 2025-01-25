'use client'

import Link from 'next/link'
import { FaFileInvoice, FaHome, FaUser } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: FaHome,
        id: 1
    },
    {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: FaFileInvoice,
        id: 2
    },
    {
        name: "Customers",
        href: "/dashboard/customers",
        icon: FaUser,
        id: 3
    },
]

const NavLinks = () => {

    const pathName = usePathname()

    return (
        <>
            {links.map(x => {
                const LinkIcon = x.icon
                return (
                    <Link href={x.href} key={x.id} className={twMerge('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-700 p-3 text-lg text-white font-bold hover:bg-slate-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3', pathName === x.href && 'bg-slate-500')} >
                        <LinkIcon className='w-6' />
                        <p className='hidden md:block'>{x.name}</p>
                    </Link>
                )
            })}
        </>
    )
}

export default NavLinks