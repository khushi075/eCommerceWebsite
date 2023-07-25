import { TrashIcon,HeartIcon } from '@heroicons/react/24/outline'

const people = [
    {
        name: 'Product Name',
        email: 'Store Name',
        role: 'Price',
        imageUrl:
            './images/img1.jpg',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Product Name',
        email: 'Store Name',
        role: 'Price',
        imageUrl:
            './images/img2.jpg',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Product Name',
        email: 'Store Name',
        role: 'Business Relations',
        imageUrl:
            './images/img3.jpg',
        lastSeen: null,
    },
    {
        name: 'Product Name',
        email: 'Store Name',
        role: 'Front-end Developer',
        imageUrl:
            './images/img4.jpg',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Product Name',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            './images/img5.jpg',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Product Name',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            './images/img6.jpg',
        lastSeen: null,
    },
]

const Orders = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-300 pb-6 pt-24">
                <h1 className="text-4xl font-medium">Shopping Bag</h1>
            </div>
            <div role="list" className="divide-y divide-gray-100 max-w-5xl">
                {people.map((person) => (
                    <div key={person.email} className="flex justify-between items-center py-5">
                        <div className="flex gap-x-4">
                            <img className="h-28 w-28 sm:h-40 sm:w-40 flex-none rounded-md bg-gray-50 object-cover object-center" src={person.imageUrl} alt="" />
                            <div className="min-w-0 flex-col flex justify-center">
                                <p className="font-medium leading-6 text-gray-900">{person.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                                <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                            </div>
                        </div>
                        <div className="flex items-end justify-center gap-x-16">
                        <div className="">
                                <HeartIcon className="h-6 w-6 text-gray-500 hover:fill-gray-500" />
                            </div>
                            <div className="pr-6">
                                <TrashIcon className="h-6 w-6 text-gray-500 hover:fill-gray-500" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Orders
