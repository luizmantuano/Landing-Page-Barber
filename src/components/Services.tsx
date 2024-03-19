import React, { useEffect } from 'react';

import Corte1 from '../assets/img/corte1.png';
import Corte2 from '../assets/img/corte2.png';
import Corte3 from '../assets/img/corte3.png';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center mt-[58px]'>
        <h2 className='text-bg font-bold text-[44px]'>SERVIÇOS</h2>
        <p className='mt-[24px] text-center text-[18px] font-medium max-w-[400px] md:max-w-[1000px]'>
          Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus.
          Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros
          mattis a quis sem sodales.
        </p>
      </div>

      <section className='flex flex-col md:flex-row gap-10 mt-[44px]  justify-center items-center'>
        <div
          className='flex flex-col shadow-2xl rounded-3xl overflow-hidden'
          data-aos='fade-up'
          data-aos-delay='150'
        >
          <Image src={Corte1} alt='Corte normal' className='hover:scale-110' />
          <div className='flex flex-row justify-between p-6 items-center'>
            <strong className='text-[18px]'>Corte normal</strong>
            <button className='bg-red-500 text-white px-4 py-1 rounded-lg font-bold  cursor-default'>
              R$ 25,00
            </button>
          </div>
        </div>

        <div
          className='flex flex-col shadow-2xl rounded-3xl overflow-hidden'
          data-aos='fade-up'
          data-aos-delay='250'
        >
          <Image src={Corte2} alt='Barba completa' className='hover:scale-110' />
          <div className='flex flex-row justify-between p-6 items-center'>
            <strong className='text-[18px]'>Barba completa</strong>
            <button className='bg-red-500 text-white px-4 py-1 rounded-lg font-bold cursor-default '>
              R$ 30,00
            </button>
          </div>
        </div>

        <div
          className='flex flex-col shadow-2xl rounded-3xl overflow-hidden'
          data-aos='fade-up'
          data-aos-delay='450'
        >
          <Image src={Corte3} alt='Corte e barba' className='hover:scale-110' />
          <div className='flex flex-row justify-between p-6 items-center'>
            <strong className='text-[18px]'>Corte e barba</strong>
            <button className='bg-red-500 text-white px-4 py-1 rounded-lg font-bold cursor-default'>
              R$ 75,00
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
