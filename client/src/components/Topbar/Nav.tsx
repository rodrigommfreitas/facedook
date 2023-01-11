import { GamesIcon } from '../Icons/GamesIcon';
import { GroupsIcon } from '../Icons/GroupsIcon';
import { HamburgerMenuIcon } from '../Icons/HamburgerMenuIcon';
import { HomeIcon } from '../Icons/HomeIcon';
import { MarketplaceIcon } from '../Icons/MarketplaceIcon';
import { PlayIcon } from '../Icons/PlayIcon';

export const Nav = () => {
  return (
    <nav className='md:absolute md:left-1/2 md:right-1/2 py-1'>
      <ul className='flex gap-2 items-center justify-center'>
        <li className='hidden md:flex justify-center'>
          <a
            href='#'
            className='text-gray-dark hover:bg-gray-light rounded-lg py-[10px] px-5 lg:px-10 active:bg-gray-200 transition-all'
          >
            <HomeIcon height='1.75em' width='1.75em' />
          </a>
        </li>
        <li className='hidden md:flex'>
          <a
            href='#'
            className='text-gray-dark hover:bg-gray-light rounded-lg py-[10px] px-5 lg:px-10 active:bg-gray-200 transition-all'
          >
            <PlayIcon height='1.75em' width='1.75em' />
          </a>
        </li>
        <li className='hidden md:flex'>
          <a
            href='#'
            className='text-gray-dark hover:bg-gray-light rounded-lg py-[10px] px-5 lg:px-10 active:bg-gray-200 transition-all'
          >
            <MarketplaceIcon height='1.75em' width='1.75em' />
          </a>
        </li>
        <li className='hidden md:flex'>
          <a
            href='#'
            className='text-gray-dark hover:bg-gray-light rounded-lg py-[10px] px-5 lg:px-10 active:bg-gray-200 transition-all'
          >
            <GroupsIcon height='1.75em' width='1.75em' />
          </a>
        </li>

        <li className='hidden lg:flex'>
          <a
            href='#'
            className='text-gray-dark hover:bg-gray-light rounded-lg py-[10px] px-5 lg:px-10 active:bg-gray-200 transition-all'
          >
            <GamesIcon height='1.75em' width='1.75em' />
          </a>
        </li>

        <li className='flex lg:hidden'>
          <a
            href='#'
            className='text-gray-dark hover:bg-gray-light rounded-lg py-[10px] px-[10px] md:px-5 lg:px-10 ml-4 md:ml-0 active:bg-gray-200 transition-all'
          >
            <HamburgerMenuIcon height='1.75em' width='1.75em' />
          </a>
        </li>
      </ul>
    </nav>
  );
};
