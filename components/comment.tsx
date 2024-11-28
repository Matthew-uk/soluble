import React from 'react'

interface CommentInterface {
    name: string;
    title: string;
    comment: string;
}

const Comment:React.FC<CommentInterface> = ({ name, title, comment }) => {
  return (
    <div className='bg-white p-5 md:p-8 rounded-2xl flex flex-col justify-between text-black'>
        <div>{comment}</div>
        <div className='flex items-center justify-end mt-4 gap-2'>
            <span className='w-[40px] h-[40px] bg-blue-500 italic rounded-full p-2 flex items-center justify-center text-white text-center text-lg'>"</span>
            <div className='flex flex-col justify-start mt-1'>
                <h3 className='font-medium'>{name}</h3>
                <h3 className='font-semibold text-gray-500'>{title}</h3>
            </div>
        </div>
    </div>
  )
}

export default Comment
