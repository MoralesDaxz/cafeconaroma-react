import React from 'react'
import { GetProducts } from '../components/getProducts/GetProducts'
import { NavBar } from '../components/navBar/NavBar.jsx'
import { SectionHero } from '../components/sectionHero/SectionHero.jsx'
import { CardsInfo } from '../components/cardsInfo/CardsInfo.jsx'
import { SectionFaq } from '../components/sectionFaq/SectionFaq.jsx'
export const Home = () => {
  return (
    <>
      <NavBar />
      <SectionHero />
      <CardsInfo />
      <GetProducts />
      <SectionFaq />
    </>
  )
}

