import Image from "next/image";
import { GiPunch, GiBrain, GiCheckedShield, GiCometSpark, GiBattleGear } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";

type CardProps = {
  img: string;
  name: string;
  powerstats: {
    [key: string]: number;
  };
};

export default function HeroCard({ name, img, powerstats }: CardProps) {
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

  return (
    <div className={`rounded-lg border-2 border-[var(--${maxPowerstatName})] overflow-hidden flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-[4px_4px_20px_6px_var(--${maxPowerstatName})] transition duration-500`}>
      <Image src={img} alt={name} width={150} height={150} />
      <div className="py-2">
        <h3 className="text-lg font-bold text-center w-full">{name}</h3>
        <p className="flex justify-center items-center gap-2 text-lg">
          {maxPowerstatName === "strength" ? (
            <GiPunch />
          ) : maxPowerstatName === "intelligence" ? (
            <GiBrain />
          ) : maxPowerstatName === "speed" ? (
            <AiFillThunderbolt />
          ) : maxPowerstatName === "durability" ? (
            <GiCheckedShield />
          ) :  maxPowerstatName === "power" ? (
            <GiCometSpark />
          ) : (
            <GiBattleGear />
          )}
          {totalPower}
        </p>
      </div>
    </div>
  );
}
