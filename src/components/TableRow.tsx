interface TableRowProps {
    statName: string,
    statHero1: number,
    statHero2: number,
}

export default function TableRow({ statName, statHero1, statHero2 }: TableRowProps) {
    return(
        <tr className="text-xl text-center">
            <td>{statHero1}</td>
            <td className={`font-bold capitalize w-[200px] text-center text-[var(--${statName})]`}>{statName}</td>
            <td className="text-right">{statHero2}</td>
        </tr>
    )
}