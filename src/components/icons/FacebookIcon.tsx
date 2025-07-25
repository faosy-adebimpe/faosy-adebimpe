import { Svg } from '@/types';

const FacebookIcon = ({ width, height }: Svg) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 291.7 512'
        >
            <path
                id='facebook-f'
                d='M80,299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7,20.3-71.5,72.7-71.5,16.3,0,29.4.4,37,1.2V7.9C291.4,4,256.4,0,236.2,0,129.3,0,80,50.5,80,159.4v42.1H14v97.8Z'
                transform='translate(-14)'
                fill='currentColor'
            />
        </svg>
    );
};

export default FacebookIcon;
