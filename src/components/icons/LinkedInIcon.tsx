import { Svg } from '@/types';

const LinkedInIcon = ({ width, height }: Svg) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 448 447.99'
        >
            <path
                id='linkedin-in'
                d='M100.28,448H7.4V148.9h92.88ZM53.79,108.1C24.09,108.1,0,83.5,0,53.8a53.79,53.79,0,1,1,107.58,0C107.58,83.5,83.48,108.1,53.79,108.1ZM447.9,448H355.22V302.4c0-34.7-.7-79.2-48.29-79.2-48.29,0-55.69,37.7-55.69,76.7V448H158.46V148.9h89.08v40.8h1.3c12.4-23.5,42.69-48.3,87.88-48.3,94,0,111.28,61.9,111.28,142.3V448Z'
                transform='translate(0 -0.01)'
                fill='currentColor'
            />
        </svg>
    );
};

export default LinkedInIcon;
