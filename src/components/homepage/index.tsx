import React from 'react'
import { CarouselDefault } from './Carousel'
import LatestMobiles from './LatestMobiles'
import { Button, Input, Typography } from '@material-tailwind/react'
import TopBrands from './TopBrands'
import { FooterWithSocialLinks } from '../Layout/Footer'

const Homepage = () => {
    return (
        <>
            <div className="h-[35rem] mx-4 mt-2">
                <CarouselDefault />
            </div>
            <div className='mx-4'>
                <div className='text-center mt-4 mb-6'>
                    <Typography variant='h6' className='text-2xl'>Latest Smart Phones</Typography>
                </div>
                <div className='flex justify-around mt-8 flex-wrap'>
                    <LatestMobiles />
                    <LatestMobiles />
                    <LatestMobiles />
                    <LatestMobiles />
                </div>
                <div className='mt-10 md:p-10 w-full'>
                    <div className='text-center mt-4 mb-6'>
                        <Typography variant='h6' className='text-2xl'>Top Brands</Typography>
                    </div>
                    <div className='overflow-x-auto scroll-smooth'>
                        <TopBrands />
                    </div>
                </div>
                <div className='mt-10 bg-gray-300 rounded p-10'>
                    <div className='text-center mt-6 mb-6'>
                        <Typography variant='h6' className='text-2xl text-black'>News Letter</Typography>
                        <Typography variant='h6' className='text-sm mt-4 text-black'>*Enter your email and get updates & offers on your email</Typography>
                    </div>
                    <div className='flex md:flex-row flex-col mx-24 md:justify-center items-center'>
                        <div className='mr-4'>
                            <Input label='Email' crossOrigin="undefined" className='md:w-96 w-full' />
                        </div>
                        <div className='md:mt-0 mt-4'>
                            <Button variant='filled'>SUBSCRIBE</Button>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <FooterWithSocialLinks />
                </div>
            </div>
        </>
    )
}

export default Homepage