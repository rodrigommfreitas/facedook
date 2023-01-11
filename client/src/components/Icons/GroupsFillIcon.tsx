import { IconProps } from '../../globals/types';

export const GroupsFillIcon = ({
  width = '1em',
  height = '1em',
}: IconProps) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 20 20'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='#4FCAB9' stopOpacity={1} />
          <stop offset='100%' stopColor='#1B74E4' stopOpacity={1} />
        </linearGradient>
      </defs>
      <path
        fill='url(#grad1)'
        d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'
      ></path>
    </svg>
  );
};
