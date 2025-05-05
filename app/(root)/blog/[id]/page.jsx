// blog/[id]/page.js
import { blogs } from '@/constants';
import Image from 'next/image';

export async function generateStaticParams() {
  // Return an array of objects with the id param for each blog post
  // For example, if you have 4 blog posts as shown in your constants
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ];
}

export default function BlogPost({ params }) {
  const { id } = params;

  // Find the specific blog post by its key
  const blogPost = blogs.find((blog) => blog.key === parseInt(id));

  if (!blogPost) return <p>Blog post not found</p>;

  return (
    <div className='px-[20px] md:px-[80px] py-20 '>
      {/* <div className='blog_header relative flex items-center justify-center'>
    </div> */}

      <h1 className='text-[50px] font-semibold'>{blogPost.title}</h1>
      <Image src={blogPost.image} className='w-full mt-8' width={500} height={500} alt={blogPost.title} />
      <p className='mt-5 text-[18px] font-semibold'>By {blogPost.author} on {blogPost.date}</p>
      <p>{blogPost.content}</p> {/* Add blog content here if you have it */}
    </div>
  );
}
