import { memo, SVGProps } from 'react';

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 47' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.1294 20.8879C18.2479 20.8879 15.912 23.2238 15.912 26.1053V27.4096H26.3468V26.1053C26.3468 23.2238 24.0109 20.8879 21.1294 20.8879Z'
      stroke='black'
    />
    <ellipse cx={21.1295} cy={16.3227} rx={3.91307} ry={3.91304} stroke='black' strokeLinecap='square' />
  </svg>
);

const Memo = memo(ProfileIcon);
export { Memo as ProfileIcon };
