import { Left } from './Left';
import { Nav } from './Nav';
import { Right } from './Right';

export const Topbar = () => {
  return (
    <div className='bg-white sticky top-0 h-14 w-screen px-4 flex md:justify-between shadow-md shadow-gray-200 z-10'>
      <Left />
      <Nav />
      <Right />
    </div>
  );
};
