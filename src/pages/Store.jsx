import {React} from 'react'
import { NavBar } from '../components/navBar/NavBar'
import { Footer } from '../components/footer/Footer'
import { SectionFrameCoffe } from '../components/sectionFrameCoffe/SectionFrameCoffe'
import { BagCoffee } from '../components/bagCoffe/BagCoffe'
import { SectionCardsInfo } from '../components/sectionCardsInfo/SectionCardsInfo'
export const Store = () => {

  return (
    <>
    <SectionFrameCoffe title={'Últimos orígenes'} coffees={<BagCoffee units={8}/>}/>
    <SectionCardsInfo/>
    <Footer/>
    </>
  )
}

