import React from 'react'

import { SectionHero } from '../components/sectionHero/SectionHero.jsx'
import { SectionFaq } from '../components/sectionFaq/SectionFaq'
import { SectionFeature } from '../components/sectionFeature/SectionFeature'
import { SectionForm } from '../components/sectionForm/SectionForm.jsx'
import { SectionCardsInfo } from '../components/sectionCardsInfo/SectionCardsInfo'
import { SectionFrameCoffe } from '../components/sectionFrameCoffe/SectionFrameCoffe'
import { BagCoffee } from '../components/bagCoffe/BagCoffe'
import { ArrowRigth } from '../components/arrowRigth/ArrowRigth.jsx'

export const Home = () => {
  return (
    <>
      <SectionHero/>
      <SectionCardsInfo></SectionCardsInfo>
      <SectionFrameCoffe location={'home'} title={'Novedades'} coffees={<BagCoffee units={4}/>} arrow={<ArrowRigth color={'black'} text={'Ver todos'}/>}/>
      <SectionFaq/>
      <SectionFeature/>
      <SectionForm></SectionForm>
    </>
  )
}

