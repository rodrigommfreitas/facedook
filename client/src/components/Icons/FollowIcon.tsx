import { IconProps } from '../../globals/types';

export const FollowIcon = ({ width = '1em', height = '1em' }: IconProps) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z'
        clipRule='evenodd'
      ></path>
      <path
        fillRule='evenodd'
        d='M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};
