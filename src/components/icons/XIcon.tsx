import { Svg } from '@/types';

const XIcon = ({ width, height }: Svg) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 460.2 416'
        >
            <path
                id='x-twitter'
                d='M389.2,48h70.6L305.6,224.2,487,464H345L233.7,318.6,106.5,464H35.8L200.7,275.5,26.8,48H172.4L272.9,180.9ZM364.4,421.8h39.1L151.1,88h-42Z'
                transform='translate(-26.8 -48)'
                fill='currentColor'
            />
        </svg>
    );
};

export default XIcon;
