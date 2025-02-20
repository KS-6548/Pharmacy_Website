import React from 'react'
import Banner from './Banner/Banner'
import Anotomy from './Anotomy/Anotomy'
import TodayDeal from './Products&Deals/TodayDeal'
import Brand from './Brand/Brand'
import TrendingProduct from './Products&Deals/TrendingProduct'
import BabyProduct from './Products&Deals/BabyProduct'
import FQA from '../../Components/FQA/FQA'
import Review from './Reveiw/Review'

function Home() {
  return (
    <>
        <Banner/>
        <Anotomy/>
        <TodayDeal/>
        <Brand/>
        <TrendingProduct/>
        <BabyProduct/>
        <Review/>
        <FQA/>
    </>
  )
}

export default Home