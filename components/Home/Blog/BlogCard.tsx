import React from 'react'
import Image from 'next/image'
type Props = {

    image: string;
    title: string;
    date: string;
    tags: string[];
   
}

const BlogCard = ({image, title, date, tags}:Props) => {
  return (
    <div>
      <Image src={image} alt="blog" width={500} height={500} className="object-cover"/>
        <p className="mt-4 text-gray-500 font-medium text-base sm:text-lg">{date}</p>
        <h1 className="mt-5 text-lg sm:text-xl font-bold text-white hover:underline hover:text-green-300 cursor-pointer transition-all duration-300">{title}</h1>
        
        <div className='mt-4 flex gap-2 items-center'>
            {tags.map((tag, index) => (
                <p key={index} className='px-4 py-1.5 bg-green-950 text-white text-sm sm:text-base font-bold rounded-full'>
                    {tag}
                </p>
            ))}
        </div>
    </div>
  )
}

export default BlogCard
