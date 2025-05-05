'use client';

import { useState } from 'react';

// This is a client component for interactive accordion functionality
export default function EventAccordion({ regions }) {
  const [activeAccordionItem, setActiveAccordionItem] = useState(0);

  const AccordionItem = ({ title, schools, index }) => (
    <article
      className={`accordion-item ${activeAccordionItem === index ? 'active' : ''} rounded-[30px] h-full transition-all duration-300 ease-in-out ${
        activeAccordionItem === index ? 'bg-[#1a1a1a] text-white' : 'bg-gray-300 hover:bg-gray-400 text-black'
      } w-full`}
      style={{
        boxShadow: activeAccordionItem === index ? '0 0 15px rgba(255, 0, 0, 0.2)' : 'none',
        border: activeAccordionItem === index ? '1px solid #ff000030' : 'none'
      }}
    >
      {activeAccordionItem === index && (
        <div className="p-8 h-full flex flex-col justify-between items-start">
          <div className="mb-6">
            {schools.map((school, i) => (
              <p key={i} className="mb-3 flex items-start text-[15px] text-black">
                <span className="mr-2 text-black">◉</span> {school}
              </p>
            ))}
          </div>
          <h1 className="text-xl font-bold text-black">{title}</h1>
        </div>
      )}
    </article>
  );

  return (
    <div className="flex gap-4 h-[600px]">
      {regions.map((region, index) => (
        <div
          key={index}
          className={`overflow-hidden rounded-[30px] transition-all duration-500 ease-in-out cursor-pointer ${
            activeAccordionItem === index
              ? 'w-[70%] shadow-lg shadow-red-400'
              : 'w-[6%] hover:w-[8%]'
          }`}
          onClick={() => setActiveAccordionItem(index)}
        >
          <AccordionItem
            title={region.title}
            schools={region.schools}
            index={index}
          />
        </div>
      ))}
      <style jsx>{`
        .accordion-item {
          border-bottom: 1px solid #e5e7eb;
          cursor: pointer;
        }
        .accordion-item.active {
          background-color: #f9fafb;
        }
        .accordion-item h1 {
          margin-top: 1rem;
          font-weight: bold;
          font-size: 1.25rem;
        }
      `}</style>
    </div>
  );
}
