import Image from "next/image";
import millify from "millify";
import { time } from "console";
type Props = {
  data: {
    capital: [string];
    car: { side: string };
    population: number;
    startOfWeek: string;
    subregion: string;
    independent: boolean;
    landlocked: boolean;
    languages: {};
    coatOfArms: { png: string; svg: string };
    currencies: any;
    region: string;
    name: { common: string; official: string };
    flags: { png: string; svg: string };
    timezones: [string];
    latlng: [number];
    unMember: boolean;
    area: number;
    cca2: string;
    borders: [string];
    demonyms: { eng: { f: string; m: string }; fra: { f: string; m: string } };
  };
};

const CountriesPage = ({ data }: Props) => {
  let name;
  let symbol;
  Object.keys(data.currencies).map((item: any, i) => {
    symbol = data.currencies[item].symbol;
    name = data.currencies[item].name;
  });

  return (
    <div className="py-10 flex flex-col  space-y-8 items-center">
      <div className="pb-10 relative max-w-2xl h-64 lg:h-96  w-full shadow-lg shadow-black/50">
        <Image
          className="w-full min-w-full object-cover"
          src={data.flags.svg || data.flags.png}
          alt={data.name.common}
          layout="fill"
        />
      </div>
      <div className="flex flex-col items-center space-y-4 mb-8">
        <h1 className="text-5xl mb-4 uppercase text-center font-mono font-bold">
          {data.name.official || data.name.common}
        </h1>
        <Image
          src={data.coatOfArms?.svg || data.coatOfArms?.png}
          alt={data.name.official}
          width={100}
          height={100}
          objectFit="fill"
        />
      </div>
      <div className="px-10 md:flex md:w-full justify-evenly">
        <div className="space-y-1 md:space-y-3">
          <p>
            <span className="country__span">Population:</span>
            {millify(data.population)}
          </p>
          <p>
            <span className="country__span">Capital:</span>
            {data.capital}
          </p>

          <p>
            <span className="country__span">Independent:</span>
            {data.independent ? "true" : "false"}
          </p>
          <p>
            <span className="country__span">Landlocked:</span>
            {data.landlocked ? "true" : "false"}
          </p>
          <p>
            <span className="country__span">Region:</span>
            {data.region}
          </p>
          <p>
            <span className="country__span">Sub-Region:</span>
            {data.subregion}
          </p>
          <p>
            <span className="country__span">Drive:</span>
            {data.car.side}
          </p>
        </div>
        <div className="space-y-1 md:space-y-3">
          <p>
            <span className="country__span">Area</span>
            {millify(data.area)}Sqft
          </p>
          <p>
            <span className="country__span">Timezones:</span>
            {data.timezones.map((each) => (
              <span key={each}>{each}</span>
            ))}
          </p>
          <p>
            <span className="country__span">Citizens:</span>
            {data.demonyms.eng.m}
          </p>
          <p>
            <span className="country__span">UnMember:</span>
            {data.unMember ? "True" : "False"}
          </p>
          <p>
            <span className="country__span">Tag:</span>
            {data.cca2}
          </p>
          <p>
            <span className="country__span">Week Start:</span>
            {data.startOfWeek}
          </p>
          <p>
            <span className="country__span">Currencies</span>
            {name}
            {symbol}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountriesPage;
