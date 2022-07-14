import type { GetStaticPropsContext, NextPage } from "next";
import axios from "axios";
import Country from "../../../Components/Countries/Countries";
const Countries: NextPage = ({ data }: any) => {
  // console.log(data);
  return (
    <div>
      <Country data={data[0]} />
    </div>
  );
};

export default Countries;

export const getStaticPaths = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  const paths = data.map((country: any) => {
    return {
      params: {
        Continent: country.region.toLowerCase(),
        Country: country.name.common,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const country = context.params?.Country;
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/name/${country}`
  );
  return {
    props: {
      data,
    },
  };
};
