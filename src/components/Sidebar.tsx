import Image from "next/image";
import profile from '../../public/foto-perfil.png'

export default function Sidebar() {
    const sidebarFlex = "flex flex-col items-center"

    return(
        <aside className={`${sidebarFlex} gap-6 bg-[var(--black)] sticky top-0 left-0 py-6 px-4`}>
            <div className={`${sidebarFlex} gap-2`}>
                <Image src={profile} alt="foto de perfil" width={60} className="rounded rounded-full" />
                <span className="text-xl font-bold">TurinoS</span>
            </div>
            <div className={`${sidebarFlex} gap-4`}>
                <h2 className="text-[var(--purple)] text-xl font-bold uppercase">Cards</h2>
                <div className="border-l-[8px] border-[var(--dark-gray)] w-full h-[150px]"></div>
                <div className="border-l-[8px] border-[var(--dark-gray)] w-full h-[150px]"></div>
                <button className="bg-[var(--purple)] rounded-xl px-4 py-1">Reset cards</button>
            </div>
        </aside>
    )
}