import RecentPosts from "@/components/Article";
import CarouselIndicatorsOutside from "@/components/Carousel";
import { Content } from "@/components/Content";
import Navbar from "@/components/Hero";
import Hero from "@/components/Hero";
import UserProfileCard from "@/components/Leaderboard";
import LogoMarquee from "@/components/LogoMarquee";
import UserAccounts from "@/components/Table";

export default function Home() {
  return (
    <>
    
      <Hero />
      <LogoMarquee/>
      <CarouselIndicatorsOutside/>
      <Content/>
      <UserProfileCard/>
      <UserAccounts/>
      <RecentPosts/>
    </>
  );
}
