export default function BackgroundVideo() {


    return (
        <div className='flex'>

            <div className='flex justify-center items-center w-full h-screen'>
                <div className='text-7xl z-10'>Len<span className='text-primary'>z</span>o
                </div>
            </div>


            <video autoPlay muted loop className='absolute inset-0 object-cover h-screen xl:h-auto'>

                <source src="/video/background_effect.mp4" type="video/mp4"/>
            </video>
        </div>

    )


}