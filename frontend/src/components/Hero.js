const Hero = () => {
    return (
        <>
        <div className="h-screen60 bg-cover bg-top bg-gradient-to-b from-black to-yellow-800 relative -z-10">
            <img src="./images/hero.jpg" alt="backgroung" className="h-full w-full bg-cover absolute mix-blend-overlay -z-10"/>
            <div className="flex justify-center items-center h-full text-sm text-white text-center md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dignissimos atque quasi. Ipsa, facilis sunt eius nisi temporibus consequatur velit sequi nulla? Eveniet explicabo cum soluta assumenda rem, labore non!
            </div>
        </div>
        </>
    ) 
}

export default Hero