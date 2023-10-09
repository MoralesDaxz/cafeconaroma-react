import {React,useEffect} from 'react'
import { NavBar } from '../components/navBar/NavBar'
import { Footer } from '../components/footer/Footer'
import { SectionFrameCoffe } from '../components/sectionFrameCoffe/SectionFrameCoffe'
import { BagCoffee } from '../components/bagCoffe/BagCoffe'
import { SectionCardsInfo } from '../components/sectionCardsInfo/SectionCardsInfo'
export const Store = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <SectionFrameCoffe location={'store'} title={'Últimos orígenes'} coffees={<BagCoffee units={8}/>}/>
    <SectionCardsInfo/>
    <Footer/>
    </>
  )
}

