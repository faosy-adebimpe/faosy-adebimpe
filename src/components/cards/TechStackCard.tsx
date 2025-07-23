import { TechStackType } from '@/types';
import React from 'react';

const TechStackCard = ({ category, skills }: TechStackType) => {
    return (
        <div className='card flex gap-5 flex-col justify-center items-center sm:items-start bg-(--card-background-color) rounded-md p-10 duration-300 transition-all hover:scale-105 hover:bg-(--theme-color)'>
            <h2 className='font-bold text-center sm:text-left'>{category}</h2>
            <p className='text-center sm:text-left'>{skills.join(', ')}</p>
        </div>
    );
};

export default TechStackCard;
