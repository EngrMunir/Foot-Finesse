import Banner from './Banner';
import Faq from './Faq';
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
      <LatestCollection />
      <LatestPost />
      <Faq />
    </div>
  );
};

export default HomePage;
