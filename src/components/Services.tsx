import React from 'react'

import Corte1 from '../assets/img/corte1.png';
import Corte2 from '../assets/img/corte2.png';
import Corte3 from '../assets/img/corte3.png';
import Image from 'next/image';


export default function Services() {
  return (
    <section className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center mt-[58px] w-[900px] '>
          <h2 className='text-bg font-bold text-[44px]'>SERVIÇOS</h2>
          <p className='mt-[24px] text-center text-[18px] font-medium'>
            Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus.
            Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros
            mattis a quis sem sodales.
          </p>
        </div>

        <section className='flex flex-row gap-10 mt-[44px] w-full justify-center items-center'>
          <div className='w-[354px] h-[389] shadow-2xl rounded-3xl'>
            <Image src={Corte1} alt='Corte normal' />
            <div className='flex flex-row justify-between p-6 items-center'>
              <strong className='text-[18px]'>Corte normal</strong>
              <button className='bg-red-500 text-white w-[101px] h-[34px] rounded-lg font-bold hover:bg-red-700'>
                R$ 25,00
              </button>
            </div>
          </div>

          <div className='w-[354px] h-[389] shadow-2xl rounded-3xl'>
            <Image src={Corte2} alt='Barba completa' />
            <div className='flex flex-row justify-between items-center p-6'>
              <strong className='text-[18px]'>Barba completa</strong>
              <button className='bg-red-500 text-white w-[101px] h-[34px] rounded-lg font-bold hover:bg-red-700'>
                R$ 30,00
              </button>
            </div>
          </div>

          <div className='w-[354px] h-[389] shadow-2xl rounded-3xl'>
            <Image src={Corte3} alt='Corte e barba' />
            <div className='flex flex-row justify-between p-6 items-center'>
              <strong className='text-[18px]'>Corte e barba</strong>
              <button className='bg-red-500 text-white w-[101px] h-[34px] rounded-lg font-bold hover:bg-red-700'>
                R$ 75,00
              </button>
            </div>
          </div>
        </section>
      </section>
  )
}
