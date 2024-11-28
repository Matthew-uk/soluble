import React from 'react'
import VideoCardGrid from './card-grid'

const Trailers = () => {
  return (
    <div className='px-24 mt-6 trailer'>
        <div className='flex flex-col items-center justify-center w-full gap-4 mb-4'>
            <h2 className='title-heading'>Created with Soutle</h2>
            <h1 className='title-paragraph'>Unique Videos In Any Niche</h1>
        </div>
        <VideoCardGrid />
    </div>
  )
}

export default Trailers
