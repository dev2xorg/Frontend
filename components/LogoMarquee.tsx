'use client'
import { useTheme } from 'next-themes'
import Marquee from 'react-fast-marquee'
//import { AmazonIcon, AppleIcon, GoogleIcon, MetaIcon, MicrosoftIcon } from '../constants/index'

function BrandMarquee() {
    const { theme } = useTheme()
    const gradientColor =  'rgb(249, 2439, 248)'

    return (
        <div className='grid border-black border overflow-hidden h-[100px]'>
            <Marquee autoFill gradient gradientWidth={150} gradientColor={gradientColor}>
                <div className='mx-10'>
                    <img src='./Cisco.png' className='w-full h-[100px]' />
                </div>
                <div className='mx-10'>

                </div>
                <div className='mx-10'>
                    <img src='./delta.png' className='w-full h-[50px]' />
                </div>
                <div className='mx-10'>
                    <img src='./DevRev.png' className='w-full h-[120px]' />
                </div>
                <div className='mx-10'>
                    <img src='./logo1.png' className='w-full h-[100px]' />
                </div>
                <div className='mx-10'>
                    <img src='./tm.png' className='w-full h-[50px]' />
                </div>
            </Marquee>
        </div>
    )
}

export default BrandMarquee