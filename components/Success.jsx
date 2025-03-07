import { success } from '@/constants'
import React from 'react'

const Success = () => {
  return (
    <div className='success'>
        <div>
        <p className='text-[36px] font-bold text-center mb-10'>Our Success</p>

            <div className='flex space-x-10'>
                    {
                        success.map((item) => (
                            <div key={item.key} className='max-w-[250px]'>
                    <p className='text-[36px] font-bold'>{item.count}</p>
                    <p className='text-[12px] mt-6'>{item.info}</p>
                </div>
                        ))
                    }
            </div>
        </div>
    </div>
  )
}

export default Success
