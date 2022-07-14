import Image from "next/image";
import Link from "next/link";
type ContinentsProps = {
  id: number;
  name: string;
  img: string;
  link: string;
};
const ContinentsCards = ({ id, img, link, name }: ContinentsProps) => {
  return (
    <Link href={`/${link}`}>
      <div className="flex relative rounded-md shadow-lg shadow-black/40 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
        <Image
          className="rounded-md"
          src={img}
          alt={name}
          width={500}
          height={500}
          objectFit="cover"
        />
        <div className="absolute px-4 flex top-0 bottom-0 w-full h-full bg-black/25">
          <h1 className=" text-white font-bold font-mono text-4xl self-center uppercase tracking-wider">
            {name}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default ContinentsCards;
