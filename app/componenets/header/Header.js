import Image from 'next/image'
import React from 'react'
import bg from '../../../public/assets/images/bg.jpg'

export default function Header() {


    


    return (
        <>
            <div className='bg-orange-600 '>
                <div className='main-div flex flex-col md:flex md:flex-row md:justify-center md:items-center'>
                    <Image width={1000} height={500} src={bg}
                    className='relative w-full h-full'
                    />
                    <div className='part-1 absolute'>
                        <div>
                            <h1>Heading</h1>
                        </div>
                        <div>
                            <p>
                                The most popular eCommerce templates available today for any website! These templates will work well with technology, fashion, apparel, jewelry,  home goods, gadgets, or other eCommerce products. Many of them operate as multi-vendor marketplaces, too, for you to have the freedom you deserve.
                            </p>
                        </div>
                        <div>
                            <button>
                                Explore more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
