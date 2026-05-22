import Banner from "@/components/homepage/Banner";
import TrendingIdeas from "@/components/homepage/TrendingIdeas";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <TrendingIdeas />
    </div>
  );
}
