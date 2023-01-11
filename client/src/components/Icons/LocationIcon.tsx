import { IconProps } from '../../globals/types';

export const LocationIcon = ({ width = '1em', height = '1em' }: IconProps) => {
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
      <path
        fillRule='evenodd'
        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};
