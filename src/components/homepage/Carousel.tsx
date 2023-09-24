import { Button, Carousel } from "@material-tailwind/react";
import carouselImage1 from '../../assets/images/carousel1.jpg';
import carouselImage2 from '../../assets/images/carousel2.jpg';
import carouselImage3 from '../../assets/images/carousel3.jpg';
import Image from "next/image";

export function CarouselDefault() {
    return (
        <Carousel className="rounded-xl md:mb-2 mb-8">
            <div className="flex md:justify-between flex-col md:flex-row items-center">
                <div className="md:w-[50%] w-[100%]">
                    <Image
                        src={carouselImage1}
                        alt="image 1"
                        className="h-full w-full object-cover rounded"
                        width={500}
                        height={200}
                    />
                </div>
                <div className="flex items-center justify-center text-center md:w-[50%] w-[100%] flex-col mt-8 md:mt-0">
                    <span className="text-4xl">OFFER SALE</span>
                    <span className="text-xl mt-4">Get upto 30% discount on your favorite smart phones</span>
                    <div className="mt-5">
                        <Button variant="outlined" className="mx-4 text-white">SHOP NOW</Button>
                        <Button variant="gradient">VIEW MORE</Button>
                    </div>
                </div>
            </div>
            <div className="flex md:justify-between flex-col md:flex-row items-center">
                <div className="md:w-[50%] w-[100%]">
                    <Image
                        src={carouselImage2}
                        alt="image 1"
                        className="h-full w-full object-cover rounded"
                        width={500}
                        height={200}
                    />
                </div>
                <div className="flex items-center justify-center md:w-[50%] w-[100%] flex-col mt-8 md:mt-0">
                    <span className="text-4xl">OFFER SALE</span>
                    <span className="text-xl mt-4">Get upto 30% discount on your favorite smart phones</span>
                    <div className="mt-5">
                        <Button variant="outlined" className="mx-4 text-white">SHOP NOW</Button>
                        <Button variant="gradient">VIEW MORE</Button>
                    </div>
                </div>
            </div>
            <div className="flex md:justify-between flex-col md:flex-row items-center">
                <div className="md:w-[50%] w-[100%]">
                    <Image
                        src={carouselImage3}
                        alt="image 1"
                        className="h-full w-full object-cover rounded"
                        width={500}
                        height={200}
                    />
                </div>
                <div className="flex items-center justify-center md:w-[50%] w-[100%] flex-col mt-8 md:mt-0">
                    <span className="text-4xl">OFFER SALE</span>
                    <span className="text-xl mt-4">Get upto 30% discount on your favorite smart phones</span>
                    <div className="mt-5">
                        <Button variant="outlined" className="mx-4 text-white">SHOP NOW</Button>
                        <Button variant="gradient">VIEW MORE</Button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}