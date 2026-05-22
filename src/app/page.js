import Banner from "@/components/homepage/Banner";
import CommunityEngagement from "@/components/homepage/CommunityEngagement";
import TrendingIdeas from "@/components/homepage/TrendingIdeas";
import WhyChooseIdeaVault from "@/components/homepage/WhyChooseIdeaVault";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <TrendingIdeas />
      <WhyChooseIdeaVault />
      <CommunityEngagement />
    </div>
  );
}
