import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
type Props = {
  flag: string;
  svg: string;
  name: string;
};
const CounteriesCard = ({ flag, svg, name }: Props) => {
  const router = useRouter();
  const currentPath = router.query.Continent;
  return (
    <Link href={`/${currentPath}/${name}`}>
      <div className="relative hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-[80vw] max-w-sm rounded-lg shadow-lg shadow-black/50">
        <Image
          className="rounded-lg"
          objectFit="cover"
          src={svg}
          alt={name}
          width={200}
          height={200}
          layout="responsive"
          loading="lazy"
        />
        <div>
          <div className="absolute rounded-lg top-0 left-0 w-full h-full bg-black/50 text-white font-semibold font-mono text-3xl flex items-center px-4">
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CounteriesCard;
