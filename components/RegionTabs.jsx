'use client';

import { useState } from 'react';

export default function RegionTabs({ regions }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex overflow-x-auto pb-2 mb-3 border-b">
        {regions.map((region, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`whitespace-nowrap px-3 py-1 text-[10px] font-medium mr-1 flex-shrink-0 rounded-t-lg ${
              activeTab === index
                ? 'bg-blue-100 text-blue-800 font-bold border-b-2 border-blue-800'
                : 'bg-gray-100'
            }`}
          >
            {region.title.split(',')[0]}
          </button>
        ))}
      </div>

      <div className="tab-panels">
        {regions.map((region, index) => (
          <div
            key={index}
            className={activeTab === index ? 'block' : 'hidden'}
          >
            <h3 className="text-sm font-bold mb-2">{region.title}</h3>
            <ul className="list-disc pl-5 text-xs">
              {region.schools.map((school, idx) => (
                <li key={idx} className="mb-1">{school}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
