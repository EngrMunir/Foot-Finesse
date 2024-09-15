"use client"
import { useEffect, useState } from 'react';
import Banner from './Banner';
import Faq from './Faq';
import LatestCollection from './LatestCollection';
import LatestPost from './LatestPost';
import ShoeSection from './ShoeSection';
import ShopNow from './ShopNow';
import TakeSubscriptionModal from './TakeSubscriptionModal';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if(!isOpen){
        setIsOpen(true)
      }
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }

  }, [isOpen])

  return (
    <div className=''>
      <Banner />
      <ShoeSection />
      <ShopNow />
      <LatestCollection />
      <LatestPost />
      <Faq />
      <div className="absolute z-50">
        <TakeSubscriptionModal
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        ></TakeSubscriptionModal>
      </div>
    </div>
  );
};

export default HomePage;
