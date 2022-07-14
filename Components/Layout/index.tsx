import { useRouter } from "next/router";
import Link from "next/link";
const Layout = () => {
  const router = useRouter();
  const continent = router.query.Continent;
  const country = router.query.Country;
  return (
    <div className="w-full p-5 bg-black shadow-lg shadow-black/40 text-white">
      <p>
        <Link href={"/"}>Earth &gt;</Link>
        <span>{continent} &gt;</span>
        <span>{country}</span>
      </p>
    </div>
  );
};

export default Layout;
