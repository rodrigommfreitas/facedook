import { IconProps } from '../../globals/types';

export const SmileIcon = ({ width = '1em', height = '1em' }: IconProps) => {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='10'></circle>
      <path d='M8 14s1.5 2 4 2 4-2 4-2'></path>
      <line x1='9' y1='9' x2='9.01' y2='9'></line>
      <line x1='15' y1='9' x2='15.01' y2='9'></line>
    </svg>
  );
};
