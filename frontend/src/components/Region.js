import { ArrowRightIcon } from '@heroicons/react/24/outline'

const BestsellerSec = ({ title }) => {
    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: './images/img1.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Store Name',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: './images/img2.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Store Name',
        },
        {
            id: 3,
            name: 'Basic Tee',
            href: '#',
            imageSrc: './images/img3.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Store Name',
        },
        {
            id: 4,
            name: 'Basic Tee',
            href: '#',
            imageSrc: './images/img4.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Store Name',
        },
        {
            id: 5,
            name: 'Basic Tee',
            href: '#',
            imageSrc: './images/img5.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Store Name',
        },
    ]

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-16 pb-4 lg:max-w-7xl lg:px-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-medium">{title}</h1>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="relative aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-h-3 lg:aspect-w-2 lg:h-80 group-hover:brightness-75">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md "
                                    />
                                    <div className="absolute inset-0 flex justify-center items-end text-center">
                                        <h3 className="text-white pb-8 font-medium">
                                            <a href={product.href}>
                                                <span className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestsellerSec