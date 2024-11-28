import Image from 'next/image';
import React from 'react'
import Comment from './comment';

const Creators = () => {
    const comments = [
        {
            name: "Williams Mike",
            comment: "Soutle is exceptionally easy to use and the video outputs are crisp and an excellent product. I highly recommend Soutle for whatever your video creation needs are.",
            title: "Content Creator"
        },
        {
            name: "Rita James",
            comment: "Soutle is an awesome platform that has made video creation and making amazing YT Shorts and more, not only fun, but practical and efficient. Being able to access and create easily, is so important to me. Thanks Soutle for making it happen.",
            title: "Content Creator"
        },
        {
            name: "Faith C.",
            comment: "I love the realistic AI images and their voice-over feature. It makes making reels so easy specially for creators who don't want to use their own images. I love love love this tool.",
            title: "Content Creator"
        },
        {
            name: "Seun Fred",
            comment: "Soutle is an AI online tool that helps you to simplify professional video production",
            title: "Content Creator"
        }
    ]
  return (
    <div className='min-h-screen bg-blue-500 relative md:px-24 px-16 pb-16 mt-4'>
        <div className='style_customShapeDivider__ey9uI'>
            <Image src={"/curve.svg"} alt='' className='w-full h-auto bg-transparent' width={300} height={300} />
        </div>
        <div className='creators-sub-container text-white w-full h-full flex items-center justify-center'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h2 className='title-heading !text-white mt-40'>How Does It Work?</h2>
                <h2 className='title-paragraph'>Engaging Videos In One Button Click</h2>
                <div className='grid grid-cols-2 w-full gap-12 mt-12'>
                    {
                        comments.map((comment, index) =>
                        <Comment
                            comment={comment.comment}
                            name={comment.name}
                            title={comment.title}
                            key={index}
                        />)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Creators;
