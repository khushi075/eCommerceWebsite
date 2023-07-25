
import { Menu, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, UserIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CategoryNav from './CategoryNav'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useSAuthContext } from '../hooks/useSAuthContext'
import { useSLogout } from '../hooks/useSLogout'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const products = [
    { name: 'Art & Stationery', href: '#' },
    { name: 'Handmade Crafts', href: '#' },
    { name: 'Textiles & Fabrics', href: '#' },
    { name: 'Home Decor', href: '#' },
    { name: 'Jewellery & Accessories', href: '#' },
    { name: 'Gift Sets & Hampers', href: '#' },
    { name: 'Footwear', href: '#' },
    { name: 'Ethnic Wear', href: '#' },
    { name: 'Bags & Purses', href: '#' },
    { name: 'Wellness & Beauty Products', href: '#' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const { slogout } = useSLogout();
    const { seller } = useSAuthContext();
    const navigate = useNavigate();

    const handleClick = () => {
        if (user) { 
            logout() 
        }
        else if (seller) {
            slogout()
        }
    }

    const handleClick2 = () => {
        logout();
        navigate('/ssignup');
    }

    return (
        <div className='bg-white'>
            {(user || seller) &&
                <div>
            <header className="z-50 border-black w-screen">
                <nav className="mx-auto flex max-w-9xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
                    <div className="flex lg:hidden justify-center items-center">
                        <button
                            type="button"
                            className="-mx-3 inline-flex items-center justify-center rounded-md px-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <a href='#' className="w-36 flex justify-between items-center bg-gray-200 ml-2 ps-4 pe-2 rounded-full py-1.5">
                            <span className="text-gray-500 text-sm">Search</span>
                            <MagnifyingGlassIcon className="h-5 w-5 ml-2.5" aria-hidden="true" />
                        </a>
                    </div>
                    <div className="hidden justify-start lg:flex-1 lg:flex uppercase text-sm">
                        <a href="#" className="-m-1.5 p-1.5 self-center">
                            <span className="sr-only">Search Bar</span>
                            <MagnifyingGlassIcon className="h-7 w-7" aria-hidden="true" />
                        </a>
                        <a href="#" className="-m-1.5 p-1.5 self-center ml-4 hover:underline">
                            Proudly Local
                        </a>
                        <a href="#" className="-m-1.5 p-1.5 self-center ml-4 hover:underline">
                            Trending
                        </a>
                        <a href="#" className="-m-1.5 p-1.5 self-center ml-4 hover:underline">
                            New
                        </a>

                    </div>
                    <a href='#' className="-m-1.5 hidden lg:flex lg:gap-x-12 leading-6 text-4xl">
                        gini
                    </a>  
                    <div className="flex flex-1 justify-end items-center -mx-4">
                        {user &&
                        <button className='hidden mx-6 p-1.5 border-2 rounded-full md:block bg-black border-black hover:bg-white hover:text-black text-white'>
                            <div onClick={handleClick2} className="text-sm">Become a Seller</div>
                        </button>
                        }
                        <div className="px-2 pt-2">
                            <Menu as="div" >
                                <Menu.Button className='focus:outline-none '>
                                    <span className="sr-only">Open user menu</span>
                                    <UserIcon className='w-6 h-6 hover:fill-black'></UserIcon>
                                </Menu.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-none focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Order History
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    onClick={handleClick}
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 z-50 cursor-pointer')}
                                                >
                                                    Sign out
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                        <a href="#" className="hidden px-2 md:block">
                            <span className="sr-only">View Wishlist</span>
                            <HeartIcon className="h-6 w-6 hover:fill-black" aria-hidden="true" />
                        </a>
                        <a href="#" className="px-2">
                            <span className="sr-only">View Cart</span>
                            <ShoppingBagIcon className="h-6 w-6 hover:fill-black" aria-hidden="true" />
                        </a>
                    </div>
                </nav>
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-liner duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100 translate-x-0"
                            leaveTo="opacity-0 translate-x-[-100%]"
                        >
                            <div className="fixed inset-0 z-10" />
                        </Transition.Child>
                        <div className="fixed inset-y-0 z-10 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="opacity-0 translate-x-[-100%]"
                                enterTo="opacity-100 translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="opacity-100 translate-x-0"
                                leaveTo="opacity-0 translate-x-[-100%]"
                            >
                                <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                    <div className="flex items-center justify-between">
                                        <button
                                            type="button"
                                            className="-m-2.5 rounded-md p-2.5 text-gray-700 focus:outline-none"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-gray-500/10">
                                            <div className="space-y-2 py-6">
                                                <Disclosure as="div" className="-mx-3">
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-50">
                                                                Categories
                                                                <ChevronDownIcon
                                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                                    aria-hidden="true"
                                                                />
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                                {[...products].map((item) => (
                                                                    <Disclosure.Button
                                                                        key={item.name}
                                                                        as="a"
                                                                        href={item.href}
                                                                        className="block rounded-lg py-2 pl-8 pr-3 text-sm  leading-7 text-gray-900 hover:bg-gray-50"
                                                                    >
                                                                        {item.name}
                                                                    </Disclosure.Button>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                                <a
                                                    href="#"
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                                                >
                                                    Become a Seller
                                                </a>
                                                <a
                                                    href="#"
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                                                >
                                                    About Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
            </header>
            <CategoryNav />
            </div> 
            }
            {(!user && !seller) && 
                    <div className="flex justify-between items-center w-screen px-6 py-3">
                   <div className="text-4xl ps-4">gini</div>
                    <div className="flex justify-between items-center gap-x-8 px-6 py-3 text-lg">
                    <Link to='/login' className='hover:underline' >Login</Link>
                    <Link to='/slogin' className='text-white bg-black border-2 border-black rounded-full px-4 py-1 hover:text-black hover:bg-white'>For Sellers</Link>
                    </div>
                    </div>
            }
        </div>
    )
}

export default Navbar