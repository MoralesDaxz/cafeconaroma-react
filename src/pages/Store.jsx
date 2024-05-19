import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { SectionFrameCoffe } from "../components/SectionFrameCoffe";
import { BagCoffee } from "../components/BagCoffe";
import { SectionCardsInfo } from "../components/SectionCardsInfo";
export const Store = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SectionFrameCoffe
        location={"store"}
        title={"Últimos orígenes"}
        coffees={<BagCoffee units={8} />}
      />
      <SectionCardsInfo />
      <Footer />
    </>
  );
};
