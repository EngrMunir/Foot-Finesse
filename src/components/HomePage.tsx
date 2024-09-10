import Banner from './Banner';
import LatestCollection from './LatestCollection';
import LatestPost from './LatestPost';
import ShoeSection from './ShoeSection';
import ShopNow from './ShopNow';

const HomePage = () => {
  return (
    <div className=''>
      <Banner />
      <ShoeSection />
      <ShopNow />
      <LatestCollection/>
      <LatestPost/>
    </div>
  );
};

export default HomePage;
