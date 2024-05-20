import Image from 'next/image'
import React from 'react'
import bg from '../../../public/assets/images/bg.jpg'

export default function Header() {





    return (
        <>
            <div className='bg-orange-600 -z-10'>
                <div className='main-div flex flex-col justify-center items-center md:gap-y-4 md:flex md:flex-row md:justify-center md:items-center'>
                    <Image width={1000} height={100} src={bg}
                        className='relative w-full h-full'
                    />
                    <div className='part-1 absolute md:mx-10 flex justify-center space-y-8 items-center flex-col '>
                        <div className='  text-2xl text-white font-bold md:text-5xl'>
                            <h1>Heading</h1>
                        </div>
                        <div>
                            <p className='text-center text-white'>
                                The most popular eCommerce templates available today for any website! These templates will work well with technology, fashion, apparel, jewelry,  home goods, gadgets, or other eCommerce products.
                            </p>
                        </div>
                        <div className=''>

                            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore More...</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
