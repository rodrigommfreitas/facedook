import { IconProps } from '../../globals/types';

export const DownIcon = ({ width = '1em', height = '1em' }: IconProps) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M11.998 17L18.998 9 4.998 9z'></path>
    </svg>
  );
};
