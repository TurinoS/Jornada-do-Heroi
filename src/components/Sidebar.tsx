import Image from "next/image";
import profile from '../../public/foto-perfil.png'
import Button from "./Button";
import { useContext } from "react";
import { ContextAPI } from "@/context/ContextAPI";
import HeroCard from "./HeroCard";

export default function Sidebar() {
    const { cardsSelection, setCardsSelection } = useContext(ContextAPI);
    const sidebarFlex = "flex flex-col items-center"

    return(
        <aside className={`${sidebarFlex} gap-6 bg-[var(--black)] py-6 px-4 w-[175px]`}>
            <div className={`${sidebarFlex} gap-2`}>
                <Image src={profile} alt="foto de perfil" width={60} className="rounded rounded-full" />
                <span className="text-xl font-bold">TurinoS</span>
            </div>
            <div className={`${sidebarFlex} gap-4`}>
                <h2 className="text-[var(--purple)] text-xl font-bold uppercase">Cards</h2>
                {cardsSelection.length === 0 ? 
                <>
                    <div className="border-l-[8px] border-[var(--dark-gray)] w-full h-[150px]"></div>
                    <div className="border-l-[8px] border-[var(--dark-gray)] w-full h-[150px]"></div>
                </>
                :
                cardsSelection.length === 1 ? cardsSelection.map((hero) => (
                    <>
                        <HeroCard imgs={hero.imgs} name={hero.name} powerstats={hero.powerstats} key={hero.id} id={hero.id} sm />
                        <div className="border-l-[8px] border-[var(--dark-gray)] w-full h-[150px]"></div>
                    </>
                )) :
                cardsSelection.length === 2 && cardsSelection.map((hero) => (
                    <HeroCard imgs={hero.imgs} name={hero.name} powerstats={hero.powerstats} key={hero.id} id={hero.id} sm />
                ))}
                
                <Button onClick={() => setCardsSelection([])}>Reset Cards</Button>
            </div>
        </aside>
    )
}