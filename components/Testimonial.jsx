'use client'

import { testimonials } from '@/constants'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'

const Testimonial = () => {
  const sliderRef = useRef(null);

  // Add touch sliding functionality for mobile
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleMouseUp);
    slider.addEventListener('touchmove', handleTouchMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleMouseUp);
      slider.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className='px-[20px] md:px-[60px] pb-16'>
      <p className='text-[28px] sm:text-[32px] font-semibold text-center mb-6 sm:mb-10'>
        Our students <span className='text-[26px] sm:text-[29px]'> share <br /> their </span> success <br /> stories..
      </p>

      <div className="relative">
        {/* Mobile indicator */}
        <div className="flex justify-center mb-4 md:hidden">
          <div className="h-1 w-16 bg-gray-200 rounded-full relative">
            <div className="absolute h-1 w-4 bg-blue-500 rounded-full left-0"></div>
          </div>
        </div>

        {/* Slider container */}
        <div
          ref={sliderRef}
          className="flex md:justify-between md:px-10 gap-4 sm:gap-6 md:gap-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {testimonials.map((item) => (
            <div
              className='min-w-[280px] sm:min-w-[300px] w-[85vw] sm:w-[350px]  flex-shrink-0 h-[350px] sm:h-[400px] relative bg-none snap-start'
              key={item.key}
            >
              <Image
                src={item.image}
                className='object-cover rounded-[20px]'
                alt={`Testimonial from student ${item.key}`}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 350px, 300px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
