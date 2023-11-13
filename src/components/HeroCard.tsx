import Image from "next/image";
import {
  GiPunch,
  GiBrain,
  GiCheckedShield,
  GiCometSpark,
  GiBattleGear,
} from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import { useContext } from "react";
import { ContextAPI } from "@/context/ContextAPI";

type CardProps = {
  id: number;
  imgs: {
    sm: string;
    md: string;
  };
  name: string;
  powerstats: {
    [key: string]: number;
  };
  sm: boolean;
};

export default function HeroCard({
  name,
  imgs,
  powerstats,
  id,
  sm,
}: CardProps) {
  const { cardsSelection, setCardsSelection } = useContext(ContextAPI);

  const totalPower = Object.values(powerstats).reduce(
    (acc, value) => acc + value,
    0
  );

  let maxPowerstatName = "";
  let maxPowerstatValue = -Infinity;

  for (const stat in powerstats) {
    if (powerstats[stat] > maxPowerstatValue) {
      maxPowerstatValue = powerstats[stat];
      maxPowerstatName = stat;
    }
  }

  const handleClick = (sm: boolean) => {
    if (cardsSelection.length < 2 && !sm) {
      const isIdAlreadySelected = cardsSelection.some((card) => card.id === id);

      if (!isIdAlreadySelected) {
        const selectedCard = { name, imgs, powerstats, id, totalPower };
        setCardsSelection([...cardsSelection, selectedCard]);
      }
    }
  };

  return (
    <div
      onClick={() => handleClick(sm)}
      className={`rounded-lg border-2 overflow-hidden shadow-none flex flex-col items-center group ${
        !sm &&
        `cursor-pointer md:hover:scale-105 transition duration-500`
      }`} style={{
        borderColor: `var(--${maxPowerstatName})`,
      }}
    >
      {sm ? <Image src={imgs.md} alt={name} width={90} height={120} priority />
      :
      <Image src={imgs.md} alt={name} width={150} height={225} priority />}
      <div className="md:pt-2">
        {!sm && (
          <p className="flex justify-center items-center gap-2 text-lg">
            {maxPowerstatName === "strength" ? (
              <GiPunch />
            ) : maxPowerstatName === "intelligence" ? (
              <GiBrain />
            ) : maxPowerstatName === "speed" ? (
              <AiFillThunderbolt />
            ) : maxPowerstatName === "durability" ? (
              <GiCheckedShield />
            ) : maxPowerstatName === "power" ? (
              <GiCometSpark />
            ) : (
              <GiBattleGear />
            )}
          </p>
        )}
        <h3 className="md:text-lg font-bold text-center w-full">{name}</h3>
      </div>
      <style jsx>{`
        .group:hover {
          box-shadow: 4px 4px 20px 6px var(--${maxPowerstatName});
        }
      `}</style>
    </div>
  );
}
