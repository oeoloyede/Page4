import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 47' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.9418 21.8949L14.0129 20.8238V26.466V26.466V27.466H26.0129V26.466V26.466V20.8238L27.0839 21.8949L27.791 21.1878L20.72 14.1167L20.0129 13.4096L19.3058 14.1167L12.2347 21.1878L12.9418 21.8949ZM15.0129 26.466V19.8238L20.0129 14.8238L25.0129 19.8238V26.466H22.0129V22.466V21.466H18.0129V22.466V26.466H15.0129ZM19.0129 22.466V26.466H21.0129V22.466H19.0129Z'
      fill='black'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
