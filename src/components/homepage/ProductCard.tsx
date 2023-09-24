import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Image from "next/image";
import iphone from '../../assets/images/iphone.jpg'

export function ProductCard() {
    return (
        <Card className="mt-6 w-80 bg-gray-300">
            <CardHeader color="blue-gray" className="relative h-56">
                <Image
                    src={iphone}
                    alt="card-image"
                    className="w-full h-full"
                    width={100}
                    height={100}
                />
            </CardHeader>
            <CardBody>
                <div className="flex justify-between">
                    <div>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            iPhone 15
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            ₹ 89,999/-
                        </Typography>
                    </div>
                </div>
                <Typography>
                    Apple iPhone 15 · Display 6.10-inch (1179x2556) · Processor Apple A16 Bionic · Front Camera 12MP · Rear Camera 48MP + 12MP · RAM 8GB · Storage 128GB, 256GB, 512GB..
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}