import Image from 'next/image'
import React from 'react'
import Orbit from './orbit'

const How = () => {
  return (
    <div className='px-16 md:px-24 font-montserrat'>
        <div className='w-full flex flex-col justify-center items-center mt-16 mb-8'>
            <h2 className='title-heading'>How Does It Work?</h2>
            <h2 className='title-paragraph'>Engaging Videos In One Button Click</h2>
        </div>
        {/* How List */}
        <div className='flex flex-col gap-10'>
            {/* Item 1 */}
            <div className='how-item'>
                <div>
                    <h3 className='how-heading'>1. GENERATE</h3>
                    <h2 className='how-heading-2'>Create Stunning Videos in Seconds</h2>
                    <p className='how-paragraph'>Simply enter your topic and hit "Generate." Our cutting-edge AI will immediately begin crafting a unique video tailored to your topic.</p>
                </div>
                <div className='flex items-center justify-end'>
                    <Image className='w-9/12 h-auto' src={'/work2.jpeg'} alt='Work 1' width={300} height={300}/>
                </div>
            </div>

            {/* Item 2 */}
            <div className='how-item flex-row-reverse'>
                <div>
                    <h3 className='how-heading'>2. CUSTOMIZE</h3>
                    <h2 className='how-heading-2'>Preview and Personalize</h2>
                    <p className='how-paragraph'>Preview your AI-generated video and customize it to truly make it yours. Easily tweak the script, adjust the title, or swap out background music for a perfect final touch.</p>
                </div>
                <div>
                    <Image className='w-9/12 h-auto' src={'/work1.jpeg'} alt='Work 2' width={300} height={300}/>
                </div>
            </div>

            {/* Item 3 */}
            <div className='how-item flex-row'>
                <div>
                    <h3 className='how-heading'>3. CONNECT & AUTOMATE</h3>
                    <h2 className='how-heading-2'>Seamlessly Connect Your Social Media</h2>
                    <p className='how-paragraph'>Connect your channels and share your creation. You can also set automation parameters, choose your posting schedule, and let Soutle handle the rest—ensuring your social media stays active with fresh, unique videos, all on autopilot.</p>
                </div>
                <div className='flex justify-end items-center'>
                    <video src='/media/videos/spiral-video-2.mov' className='w-5/6' autoPlay muted loop playsInline></video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default How
