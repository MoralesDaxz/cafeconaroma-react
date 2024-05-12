import { useEffect } from "react";
import { SectionHero } from "../components/SectionHero";
import { SectionFaq } from "../components/SectionFaq";
import { SectionFeature } from "../components/SectionFeature";
import { SectionForm } from "../components/SectionForm.jsx";
import { SectionCardsInfo } from "../components/SectionCardsInfo";
import { SectionFrameCoffe } from "../components/SectionFrameCoffe";
import { BagCoffee } from "../components/BagCoffe";
import { ArrowRigth } from "../components/ArrowRigth.jsx";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SectionHero />
      <SectionCardsInfo />
      <SectionFrameCoffe
        location={"home"}
        title={"Novedades"}
        coffees={<BagCoffee units={4} />}
        arrow={<ArrowRigth color={"black"} text={"Ver todos"} />}
      />
      <SectionFaq />
      <SectionFeature />
      <SectionForm />
    </>
  );
};
