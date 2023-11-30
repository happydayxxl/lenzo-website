export default function BackgroundVideo() {


    return (
        <div className='flex justify-center w-full items-center h-screen'>
            <video autoPlay={true} muted={true} loop={true} playsInline={true} className='absolute inset-0 object-cover w-full h-screen'>
                <source src="/video/background_effect.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div className='max-w-[1024px] z-10 justify-center items-center flex flex-col gap-10 mb-20'>
                <div className='text-5xl xl:text-7xl z-10'>Len<span className='text-primary'>z</span>o
                </div>
                <div className='text-3xl xl:text-5xl z-10'>Handel & Consulting</div>
            </div>


        </div>

    )


}