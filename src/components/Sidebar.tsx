import Image from "next/image";
import profile from '../../public/foto-perfil.png'
import Button from "./Button";
import { useContext } from "react";
import { ContextAPI } from "@/context/ContextAPI";
import HeroCard from "./HeroCard";

export default function Sidebar() {
    const { cardsSelection, setCardsSelection } = useContext(ContextAPI);

    return(
        <aside className="flex md:flex-col items-center justify-around md:justify-between bg-[var(--black)] py-2 px-4 w-screen md:w-[175px] h-[175px] md:h-screen fixed bottom-0">
                <h2 className="text-[var(--purple)] text-xl font-bold uppercase hidden md:block">Cards</h2>
                {cardsSelection.length === 0 ? 
                <>
                    <div className="border-l-[8px] border-[var(--purple)] md:w-full w-[100px] h-[150px] md:h-[225px] bg-[var(--dark-gray)] rounded-lg"></div>
                    <div className="border-l-[8px] border-[var(--purple)] md:w-full w-[100px] h-[150px] md:h-[225px] bg-[var(--dark-gray)] rounded-lg"></div>
                </>
                :
                cardsSelection.length === 1 ? 
                    <>
                        <HeroCard imgs={cardsSelection[0].imgs} name={cardsSelection[0].name} powerstats={cardsSelection[0].powerstats} key={cardsSelection[0].id} id={cardsSelection[0].id} sm />
                        <div className="border-l-[8px] border-[var(--purple)] md:w-full w-[100px] h-[150px] md:h-[225px] bg-[var(--dark-gray)] rounded-lg"></div>
                    </>
                 :
                cardsSelection.length === 2 && cardsSelection.map((hero) => (
                    <HeroCard imgs={hero.imgs} name={hero.name} powerstats={hero.powerstats} key={hero.id} id={hero.id} sm />
                ))}
                <div className="hidden md:block">
                    <Button onClick={() => setCardsSelection([])}>Reset Cards</Button>
                </div>
                
        </aside>
    )
}