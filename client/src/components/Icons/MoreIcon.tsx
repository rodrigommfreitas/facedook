import { IconProps } from '../../globals/types';

export const MoreIcon = ({ width = '1em', height = '1em' }: IconProps) => {
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
      <circle cx='12' cy='12' r='1'></circle>
      <circle cx='19' cy='12' r='1'></circle>
      <circle cx='5' cy='12' r='1'></circle>
    </svg>
  );
};
