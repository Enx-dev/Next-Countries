import type { GetStaticPropsContext } from "next";
import CounteriesCard from "../../Components/Countries";
import axios from "axios";

type Props = {
  data: {
    flag: string;
    flags: { png: string; svg: string };
    name: { common: string; official: string };
  }[];
};
const Continents = ({ data }: Props) => {
  return (
    <section className="p-10 justify-between gap-8 flex flex-wrap">
      {data.map((country) => (
        <CounteriesCard
          key={country.name.official}
          svg={country.flags.svg || country.flags.png}
          name={country.name.official || country.name.common}
          flag={country.flag}
        />
      ))}
    </section>
  );
};

export default Continents;

export const getStaticPaths = () => {
  const Continents = ["africa", "europe", "asia", "americas", "oceania"];
  const paths = Continents.map((continent) => {
    return { params: { Continent: continent } };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const name = context?.params?.Continent!;
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/region/${name}`
  );
  return {
    props: {
      data,
    },
    revalidate: 200,
  };
};
