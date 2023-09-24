import React from 'react';
import Image from 'next/image';
import apple from '../../assets/images/appleLogo.jpg';
import vivo from '../../assets/images/vivoLogo.jpg';
import mi from '../../assets/images/miLogo.jpg';
import { Button } from '@material-tailwind/react';

const Brands = () => {
    return (
        <>
        <div className='flex justify-center'>
        <Button variant='filled' className='bg-[#1252A5] w-28 mr-10'>SAMSUNG</Button>
        <Button variant='filled' className='bg-gray-800 w-28 mr-10'>APPLE</Button>
            <Button variant='filled' className='bg-[#3E8544] w-28 mr-10'>OPPO</Button>
            <Button variant='filled' className='bg-[#4758FF] w-28 mr-10'>VIVO</Button>
            <Button variant='filled' className='bg-[#F16919] w-28 mr-10'>MI</Button>
            <Button variant='filled' className='bg-[#FED51C] w-28 mr-10'>POCO</Button>
        </div>
        </>
    )
}

export default Brands