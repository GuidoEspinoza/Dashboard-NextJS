import { FaFileInvoice, FaHome, FaUser } from 'react-icons/fa'

const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: FaHome,
        id: 1
    },
    {
        name: "Invoices",
        href: "/invoices",
        icon: FaFileInvoice,
        id: 2
    },
    {
        name: "Customers",
        href: "/customers",
        icon: FaUser,
        id: 3
    },
]

const NavLinks = () => {
    return (
        <>
            {links.map(x => {
                const LinkIcon = x.icon
                return (
                    <a href={x.href} key={x.id} className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-500 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'>
                        <LinkIcon className='w-6' />
                        <p className='hidden md:block'>{x.name}</p>
                    </a>
                )
            })}
        </>
    )
}

export default NavLinks