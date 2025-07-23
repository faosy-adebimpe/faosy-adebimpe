import { Svg } from '@/types';

const Logo = ({ width, height }: Svg) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            // width='215'
            // height='312'
            viewBox='0 0 215 312'
        >
            <defs>
                <linearGradient
                    id='linear-gradient'
                    x1='0.5'
                    x2='0.5'
                    y2='1'
                    gradientUnits='objectBoundingBox'
                >
                    <stop offset='0' stopColor='#96d7ad' />
                    <stop offset='0.538' stopColor='#74c698' />
                    <stop offset='1' stopColor='#3ec489' />
                </linearGradient>
                <linearGradient
                    id='linear-gradient-2'
                    x1='0.633'
                    y1='0.797'
                    x2='0.734'
                    y2='0.348'
                    gradientUnits='objectBoundingBox'
                >
                    <stop offset='0' stopColor='#07a37c' />
                    <stop offset='0.372' stopColor='#068766' />
                    <stop offset='1' stopColor='#04523e' />
                </linearGradient>
                <filter
                    id='Rectangle_3'
                    x='28'
                    y='101'
                    width='187'
                    height='93'
                    filterUnits='userSpaceOnUse'
                >
                    <feOffset dy='15' />
                    <feGaussianBlur stdDeviation='3' result='blur' />
                    <feFlood floodOpacity='0.161' />
                    <feComposite operator='in' in2='blur' />
                    <feComposite in='SourceGraphic' />
                </filter>
            </defs>
            <g id='Group_1' data-name='Group 1' transform='translate(1231 605)'>
                <path
                    id='Rectangle_1'
                    data-name='Rectangle 1'
                    d='M45,0H96a0,0,0,0,1,0,0V312a0,0,0,0,1,0,0H45A45,45,0,0,1,0,267V45A45,45,0,0,1,45,0Z'
                    transform='translate(-1231 -605)'
                    fill='url(#linear-gradient)'
                />
                <g
                    transform='matrix(1, 0, 0, 1, -1231, -605)'
                    filter='url(#Rectangle_3)'
                >
                    <path
                        id='Rectangle_3-2'
                        data-name='Rectangle 3'
                        d='M45,0H169a0,0,0,0,1,0,0V24a45,45,0,0,1-45,45H0a0,0,0,0,1,0,0V45A45,45,0,0,1,45,0Z'
                        transform='translate(37 101)'
                        fill='url(#linear-gradient-2)'
                    />
                </g>
                <rect
                    id='Rectangle_2'
                    data-name='Rectangle 2'
                    width='59'
                    height='172'
                    transform='translate(-1194 -465)'
                    fill='#07a37c'
                />
            </g>
        </svg>
    );
};

export default Logo;
