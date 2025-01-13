import { Bebas_Neue } from "next/font/google"
import { bebas } from "./ui/fonts"
import { FaReact } from "react-icons/fa"


const Home = () => {
    return (
        <main className="flex min-h-screen flex-col">
            <header className="bg-slate-800">
                <div className="flex h-20 shrink-0 items-end md:h-52 p-10 w-4/5 mx-auto">
                    <div className={`${bebas.className} flex flex-row items-center leading-none text-white`}>
                        <FaReact className="h-20 w-20 rotate-[15deg]"/>
                        <p className="text-[30px] ml-3">DonGudi-Dev</p>
                    </div>
                </div>
            </header>
        </main>
    )
}

export default Home