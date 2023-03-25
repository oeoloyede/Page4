import { memo, SVGProps } from 'react';

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 74 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_117_70)'>
      <rect width={73.1733} height={43.3735} rx={20} fill='url(#paint0_linear_117_70)' />
      <path
        d='M37.064 7.24097L39.7582 16.9147H48.4767L41.4233 22.8934L44.1174 32.5672L37.064 26.5885L30.0106 32.5672L32.7047 22.8934L25.6513 16.9147H34.3698L37.064 7.24097Z'
        fill='#D9D9D9'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_117_70'
        x1={51.4923}
        y1={-3.36321e-7}
        x2={39.9525}
        y2={47.7859}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF00D6' />
        <stop offset={1} stopColor='#FF4D00' />
      </linearGradient>
      <clipPath id='clip0_117_70'>
        <rect width={73.1733} height={43.3735} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(UploadIcon);
export { Memo as UploadIcon };
