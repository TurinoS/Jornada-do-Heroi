import { TbTriangleFilled, TbTriangleInvertedFilled, TbEqual } from "react-icons/tb";

interface TableRowProps {
  statName: string;
  statHero1: number;
  statHero2: number;
}

export default function TableRow({
  statName,
  statHero1,
  statHero2,
}: TableRowProps) {
  return (
    <tr className="text-xl text-center">
      <td>
        {statHero1 > statHero2 ? (
          <span className="flex items-center gap-2 text-[var(--winner)]">
            {statHero1}<TbTriangleFilled />
          </span>
        ) : statHero1 < statHero2 ? (
          <span className="flex items-center gap-2 text-[var(--looser)]">
            {statHero1}<TbTriangleInvertedFilled />
          </span>
        ): <span className="flex items-center gap-2 text-[var(--light-gray)]">
          {statHero1}<TbEqual />
        </span>}
      </td>
      <td
        className="font-bold capitalize w-[200px] text-center"
      >
        {statName}
      </td>
      <td>
        {statHero2 > statHero1 ? (
          <span className="flex items-center gap-2 text-[var(--winner)]">
            <TbTriangleFilled />{statHero2}
          </span>
        ) : statHero2 < statHero1 ? (
          <span className="flex items-center gap-2 text-[var(--looser)]">
            <TbTriangleInvertedFilled />{statHero2}
          </span>
        ) : <span className="flex items-center gap-2 text-[var(--light-gray)]">
          <TbEqual />{statHero2}
        </span>
        }
      </td>
    </tr>
  );
}
