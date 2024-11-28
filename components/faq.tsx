import React from 'react'
import AccordianContainer from './accordian-container'

const FAQs = () => {
  return (
    <div className='px-16 md:px-24 min-h-screen bg-[#f2f6fb] font-montserrat flex flex-col items-start justify-center'>
        <div className='mb-14'>
            <h2 className='lg:text-5xl md:text-3xl text-2xl font-semibold'>Frequently Asked Questions</h2>
            <p className='md:text-lg text-base text-gray-600 font-semibold md:mt-4 mt-2'>Find quick answers to common questions about Soutle.</p>
        </div>
        <AccordianContainer />
    </div>
  )
}

export default FAQs
