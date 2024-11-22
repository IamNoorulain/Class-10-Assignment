import Image from "next/image"

export default function ProductCard() {
    return (
        <div className="container mx-auto px-9">
            <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-20 mb-8">
                    <div className="flex flex-col items-center">
                        <div className="relative w-full aspect-square mb-4">
                            <Image
                                src="/product1.jpg"
                                alt="Product Two"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-lg font-semibold mb-2">PKR 5,000</p>
                        <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Buy Now
                        </button>
                    </div>
                </div>


                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-20 mb-8">
                    <div className="flex flex-col items-center">
                        <div className="relative w-full aspect-square mb-4">
                            <Image
                                src="/product2.png"
                                alt="Product Two"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-lg font-semibold mb-2">PKR 5,000</p>
                        <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Buy Now
                        </button>
                    </div>
                </div>

                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-20 mb-8">
                    <div className="flex flex-col items-center">
                        <div className="relative w-full aspect-square mb-4">
                            <Image
                                src="/product3.jpg"
                                alt="Product Three"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-lg font-semibold mb-2">PKR 5,000</p>
                        <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

