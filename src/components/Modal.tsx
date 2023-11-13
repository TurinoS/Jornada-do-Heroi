import { ContextAPI } from "@/context/ContextAPI"
import Image from "next/image"
import { useContext } from "react"
import TableRow from "./TableRow";
import Button from "./Button";

export default function Modal() {
    const { cardsSelection, setCardsSelection } = useContext(ContextAPI)

    const Hero1 = cardsSelection[0];
    const Hero2 = cardsSelection[1];

    return(
        <dialog open className="text-[var(--white)] fixed z-10 top-[3%] left-[3%] w-[94%] h-[60%] md:top-[10%] md:left-[10%] md:w-[75%] md:h-[80%] border-4 border-[var(--purple)] rounded-xl bg-[var(--gray)] flex flex-col items-center justify-around">
            <h2 className="text-center text-2xl md:text-3xl font-bold">Winner: <span className="text-[var(--winner)] underline">{Hero1.totalPower > Hero2.totalPower ? Hero1.name : Hero2.name}</span></h2>
            <div className="flex justify-around items-center w-full mb-4">
                <div className="hidden md:flex flex-col items-center gap-2">
                    <p className="text-sm md:text-2xl text-[var(--white)] font-bold">{Hero1.name}: <span className=" text-[var(--purple)]">{Hero1.totalPower}</span></p>
                    <Image src={Hero1.imgs.md} alt={Hero1.name} width={175} height={262.5} />
                </div>
                <table>
                    <tbody className="flex flex-col md:gap-2 items-center">
                        <TableRow statHero1={Hero1.powerstats.intelligence} statName="intelligence" statHero2={Hero2.powerstats.intelligence} />
                        <TableRow statHero1={Hero1.powerstats.strength} statName="strength" statHero2={Hero2.powerstats.strength} />
                        <TableRow statHero1={Hero1.powerstats.speed} statName="speed" statHero2={Hero2.powerstats.speed} />
                        <TableRow statHero1={Hero1.powerstats.durability} statName="durability" statHero2={Hero2.powerstats.durability} />
                        <TableRow statHero1={Hero1.powerstats.power} statName="power" statHero2={Hero2.powerstats.power} />
                        <TableRow statHero1={Hero1.powerstats.combat} statName="combat" statHero2={Hero2.powerstats.combat} />
                    </tbody>
                </table>
                <div className="hidden md:flex flex-col items-center gap-2">
                    <p className="text-2xl text-[var(--white)] font-bold">{Hero2.name}: <span className=" text-[var(--purple)]">{Hero2.totalPower}</span></p>
                    <Image src={Hero2.imgs.md} alt={Hero2.name} width={175} height={262.5} />
                </div>
            </div>
            <Button onClick={() => setCardsSelection([])}>Reset Cards</Button>
        </dialog>
    )
}