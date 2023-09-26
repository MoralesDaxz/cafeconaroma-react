import {React} from 'react'
import { NavBar } from '../components/navBar/NavBar'
import { Footer } from '../components/footer/Footer'
import { SectionFrameCoffe } from '../components/sectionFrameCoffe/SectionFrameCoffe'
import { BagCoffee } from '../components/bagCoffe/BagCoffe'
import { SectionCardsInfo } from '../components/sectionCardsInfo/SectionCardsInfo'
export const Store = () => {

  return (
    <>
    <NavBar/>
    <SectionFrameCoffe title={'Últimos orígenes'} component={<BagCoffee/>}/>
    <SectionCardsInfo/>
    <Footer/>
    </>
  )
}

