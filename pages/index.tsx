import type { NextPage } from "next";
import ContinentsCards from "../Components/Continents/Continent";
import Link from "next/link";
import continents from "../data/continents.json";
import { Fragment } from "react";

type Props = {
  data: { id: number; name: string; link: string; img: string }[];
};

const Home = ({ data }: Props) => {
  return (
    <section className="p-10 justify-evenly flex flex-wrap gap-8">
      {data.map((continent) => (
        <Fragment key={continent.id}>
          <ContinentsCards
            link={continent.link}
            key={continent.id}
            id={continent.id}
            img={continent.img}
            name={continent.name}
          />
        </Fragment>
      ))}
    </section>
  );
};

export default Home;

export const getStaticProps = () => {
  const data = continents;
  return {
    props: {
      data,
    },
  };
};
