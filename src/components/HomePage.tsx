import Banner from './Banner';
import LatestCollection from './LatestCollection';
import ShoeSection from './ShoeSection';
import ShopNow from './ShopNow';

const HomePage = () => {
  return (
    <div className=''>
      <Banner />
      <ShoeSection />
      <ShopNow />
      <LatestCollection />
    </div>
  );
};

export default HomePage;
