import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/Section1"));
const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/components/home/Section3"));
const HomeSection4 = dynamic(() => import("@/components/home/Section4"));
const HomeSection5 = dynamic(() => import("@/components/home/Section5"));

const Home = () => {
  return (
    <PageBox>
      <HomeSection1 id="hero" />
      <HomeSection2 id="experiences" />
      <HomeSection3 id="skills" />
      <HomeSection4 id="projects" />
      <HomeSection5 id="contact" />
    </PageBox>
  );
};

export default Home;
