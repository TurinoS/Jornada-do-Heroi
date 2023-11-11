import Image from "next/image";
import profile from '../../public/foto-perfil.png'
import Button from "./Button";
import { useContext } from "react";
import { ContextAPI } from "@/context/ContextAPI";
import HeroCard from "./HeroCard";

export default function Sidebar() {
    const { cardsSelection, setCardsSelection } = useContext(ContextAPI);

    return(
        <aside className="flex flex-col items-center justify-between bg-[var(--black)] py-2 px-4 w-[175px] fixed min-h-screen">
                <h2 className="text-[var(--purple)] text-xl font-bold uppercase">Cards</h2>
                {cardsSelection.length === 0 ? 
                <>
                    <div className="border-l-[8px] border-[var(--purple)] w-full h-[225px] bg-[var(--dark-gray)] rounded-lg"></div>
                    <div className="border-l-[8px] border-[var(--purple)] w-full h-[225px] bg-[var(--dark-gray)] rounded-lg"></div>
                </>
                :
                cardsSelection.length === 1 ? cardsSelection.map((hero) => (
                    <>
                        <HeroCard imgs={hero.imgs} name={hero.name} powerstats={hero.powerstats} key={hero.id} id={hero.id} sm />
                        <div className="border-l-[8px] border-[var(--purple)] w-full h-[225px] bg-[var(--dark-gray)] rounded-lg"></div>
                    </>
                )) :
                cardsSelection.length === 2 && cardsSelection.map((hero) => (
                    <HeroCard imgs={hero.imgs} name={hero.name} powerstats={hero.powerstats} key={hero.id} id={hero.id} sm />
                ))}
                
                <Button onClick={() => setCardsSelection([])}>Reset Cards</Button>
        </aside>
    )
}