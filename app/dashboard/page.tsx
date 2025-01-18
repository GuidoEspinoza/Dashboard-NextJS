
import Logo from '../components/Logo'

const Dashboard = () => {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
        <aside className='w-full flex-none md:w-64 bg-slate-700'>
            <div className='flex h-full flex-col px-3 py-4 md:px-2'>
                <a href="#" className='mb-2 flex h-20 items-end justify-start bg-slate-900 p-4 md:h-40'>
                    <div className='w-32 text-white md:w-40'>
                        <Logo />
                    </div>
                </a>
            </div>
        </aside>
    </div>
  )
}

export default Dashboard