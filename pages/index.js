

import { Navbar } from "@/components";
import {
  AboutUs,
  Header,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Intro,
  Laurels,
  SpecialMenu,
} from "@/container";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
}
