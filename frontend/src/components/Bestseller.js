import {ArrowRightIcon} from '@heroicons/react/24/outline'
import { useProductContext } from '../hooks/useProductContext'
import { useSAuthContext } from '../hooks/useSAuthContext'

const BestsellerSec = ({ title, products}) => {
    // const products = [
    //     {
    //         id: 1,
    //         name: 'Basic Tee',
    //         href: '#',
    //         imageSrc: './images/img1.jpg',
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: '$35',
    //         color: 'Store Name',
    //     },
    //     {
    //         id: 2,
    //         name: 'Basic Tee',
    //         href: '#',
    //         imageSrc: './images/img2.jpg',
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: '$35',
    //         color: 'Store Name',
    //     },
    //     {
    //         id: 3,
    //         name: 'Basic Tee',
    //         href: '#',
    //         imageSrc: './images/img3.jpg',
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: '$35',
    //         color: 'Store Name',
    //     },
    //     {
    //         id: 4,
    //         name: 'Basic Tee',
    //         href: '#',
    //         imageSrc: './images/img4.jpg',
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: '$35',
    //         color: 'Store Name',
    //     },
    // ]
    // const { dispatch } = useProductContext();
    // const { seller } = useSAuthContext();

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-16 pb-4 lg:max-w-7xl lg:px-8">
                    <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-medium">{title}</h1>
                    <a href='../pages/AllProd' className="hidden md:flex md:items-center md:gap-x-2.5">
                        View All
                        <span><ArrowRightIcon className='h-6 w-6'/></span>
                    </a>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:brightness-75 lg:h-80">
                                    <img
                                        src={URL.createObjectURL(product.photo)}
                                        alt="product"
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-center items-center text-center">
                                    <div>
                                        <p className="mt-1 text-sm text-gray-500">{product.store}</p>
                                        <h3 className="text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="font-medium text-gray-900">{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center mt-3 gap-x-2.5 md:hidden">
                        View All
                        <span><ArrowRightIcon className='h-6 w-6'/></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestsellerSec