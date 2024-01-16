import {FaPlay} from "react-icons/fa";


export default function Devices(){
    return(
        <div className='flex flex-col items-start py-20 px-12 gap-6' id='devices'>
            <h1 className='font-manrope text-3xl'>We Provide you streaming experience across various devices.</h1>
            <p className='text-primary-grey-text'>With StreamVibe, you can enjoy your favorite movies and TV shows
                anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that
                you never miss a moment of entertainment.</p>

            <div className='inline-flex gap-4 mt-20'>
                <div className='flex flex-col p-5 w-84 border-2 gap-4 border-primary-grey rounded-lg devices'>
                    <div className='inline-flex items-center gap-4'>
                        <button className='px-4 py-3 bg-primary-grey rounded-lg'>
                            <img src='/homegrid/phone.svg' alt='no'/>

                        </button>
                        <h1 className='font-manrope text-xl'>
                            Smartphones
                        </h1>
                    </div>
                    <p className='text-primary-grey-text'>StreamVibe is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store</p>
                </div>
                <div className='flex flex-col p-5 w-84 border-2 gap-4 border-primary-grey rounded-lg devices'>
                    <div className='inline-flex items-center gap-4'>
                        <button className='px-4 py-3 bg-primary-grey rounded-lg'>
                            <img src='/homegrid/tablet.svg' alt='no'/>

                        </button>
                        <h1 className='font-manrope text-xl'>
                            Tablet
                        </h1>
                    </div>
                    <p className='text-primary-grey-text'>StreamVibe is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store</p>
                </div>
                <div className='flex flex-col p-5 w-84 border-2 gap-4 border-primary-grey rounded-lg devices'>
                    <div className='inline-flex items-center gap-4'>
                        <button className='px-4 py-3 bg-primary-grey rounded-lg'>
                            <img src='/homegrid/laptop.svg' alt='no'/>

                        </button>
                        <h1 className='font-manrope text-xl'>
                            Laptop
                        </h1>
                    </div>
                    <p className='text-primary-grey-text'>StreamVibe is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store</p>
                </div>


            </div>
            <div
                className='bg-[url(/homegrid/hero.png)] mt-20 flex bg-cover w-full min-h-40 justify-between px-12 py-12 items-center'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl'>Start watching today!</h1>
                    <p className='text-primary-grey-text'>Don`t wait! Go ahead with your favourite movies.</p>
                </div>
                <button className='bg-primary flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                    <FaPlay/>
                    Watching Now
                </button>
            </div>
        </div>
    )
}