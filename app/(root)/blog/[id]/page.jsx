// blog/[id]/page.js
import { blogs } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

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
    <div className='min-h-screen flex flex-col'>
      <div className='px-4 sm:px-6 md:px-[40px] lg:px-[80px] py-6 sm:py-10 md:py-16 flex-grow'>
        <Link href="/blog" className="inline-block mb-4 sm:mb-6 text-sm sm:text-base text-blue-600 hover:text-blue-800">
          ← Back to all blogs
        </Link>

        <h1 className='text-[28px] sm:text-[36px] md:text-[45px] lg:text-[50px] font-semibold leading-tight'>{blogPost.title}</h1>

        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 my-4 sm:my-6 md:my-8 overflow-hidden rounded-lg">
          <Image
            src={blogPost.image}
            fill
            style={{objectFit: 'cover'}}
            alt={blogPost.title}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <p className='text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-gray-700'>By {blogPost.author}</p>
          <span className="hidden sm:inline text-gray-400">•</span>
          <p className='text-[14px] sm:text-[16px] text-gray-500'>{blogPost.date}</p>
        </div>

        <div className="prose prose-sm sm:prose max-w-none">
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-700">{blogPost.content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl."}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
