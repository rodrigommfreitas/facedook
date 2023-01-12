import { Feed } from '../components/Feed/Feed';
import { Leftbar } from '../components/Leftbar/Leftbar';
import { Rightbar } from '../components/Rightbar/Rightbar';
import { Topbar } from '../components/Topbar/Topbar';

export const Home = () => {
  return (
    <div className='bg-gray-light w-full h-fit'>
      <Topbar />
      <div className='w-screen flex mt-6'>
        <Leftbar />
        <div className='flex w-full'>
          <Feed />
          <Rightbar />
        </div>
      </div>
    </div>
  );
};
