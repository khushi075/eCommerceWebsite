const Section = ({ title }) => {
    const callout = [
        {
            name: 'Desk and Office',
            description: 'Work from home accessories',
            imageSrc: './images/img5.jpg',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '#',
        },
        {
            name: 'Self-Improvement',
            description: 'Journals and note-taking',
            imageSrc: './images/img6.jpg',
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '#',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: './images/img7.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
        {
            name: 'Traveller',
            description: 'Daily commute essentials',
            imageSrc: './images/img8.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
    ]

    return (
        <>
            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 py-16">
                    <div className="mx-auto max-w-2xl sm:py-24 lg:max-w-none lg:py-10">
                        <h2 className="text-3xl font-medium">{title}</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0 lg:gap-y-6">
                            <div key={callout[0].name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 ">
                                    <img
                                        src={callout[0].imageSrc}
                                        alt={callout[0].imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                    <div className="flex justify-end items-start flex-col ml-3 pb-4 flex-wrap">
                                        <h3 className="mt-6 text-sm text-white">
                                            <a href={callout[0].href}>
                                                <span className="absolute inset-0" />
                                                {callout[0].name}
                                            </a>
                                        </h3>
                                        <p className="text-base font-semibold text-white">{callout[0].description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0 lg:gap-y-3">
                                <div key={callout[1].name} className="group relative">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 ">
                                        <img
                                            src={callout[1].imageSrc}
                                            alt={callout[1].imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                        <div className="flex justify-end items-start flex-col ml-3 pb-4">
                                            <h3 className="mt-6 text-sm text-white">
                                                <a href={callout[1].href}>
                                                    <span className="absolute inset-0" />
                                                    {callout[1].name}
                                                </a>
                                            </h3>
                                            <p className="text-base font-semibold text-white">{callout[1].description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div key={callout[2].name} className="group relative">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 ">
                                        <img
                                            src={callout[2].imageSrc}
                                            alt={callout[2].imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                        <div className="flex justify-end items-start flex-col ml-3 pb-4">
                                            <h3 className="mt-6 text-sm text-white">
                                                <a href={callout[2].href}>
                                                    <span className="absolute inset-0" />
                                                    {callout[2].name}
                                                </a>
                                            </h3>
                                            <p className="text-base font-semibold text-white">{callout[2].description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div key={callout[3].name} className="group relative lg:col-span-2">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-2 group-hover:opacity-75 sm:h-64 ">
                                        <img
                                            src={callout[3].imageSrc}
                                            alt={callout[3].imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                        <div className="flex justify-end items-start flex-col ml-3 pb-4">
                                            <h3 className="mt-6 text-sm text-white">
                                                <a href={callout[3].href}>
                                                    <span className="absolute inset-0" />
                                                    {callout[3].name}
                                                </a>
                                            </h3>
                                            <p className="text-base font-semibold text-white">{callout[3].description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Section