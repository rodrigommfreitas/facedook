import { IconProps } from '../../globals/types';

export const LiveVideoIcon = ({ width = '1em', height = '1em' }: IconProps) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      version='1.2'
      baseProfile='tiny'
      viewBox='0 0 24 24'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M22.525 7.149c-.16-.099-.342-.149-.525-.149-.153 0-.306.035-.447.105l-2.553 1.277v-.382c0-1.654-1.346-3-3-3h-11c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-.382l2.553 1.276c.141.071.294.106.447.106.183 0 .365-.05.525-.149.295-.183.475-.504.475-.851v-8c0-.347-.18-.668-.475-.851zm-15.525 6.351c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5z'></path>
    </svg>
  );
};
