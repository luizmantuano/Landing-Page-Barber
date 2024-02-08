import React from 'react';
import Image from 'next/image';

const Images = require('../assets/svg/images.svg');

export default function About() {
  return (
    <section className='flex flex-1 h-[506px] bg-bg '>
      <div className='flex flex-row '>
        <div className='pl-[87px] mt-[-90px]'>
          <Image src={Images} alt='Imagem sobre a barbearia' className='object-cover' />
        </div>

        <div className='flex flex-col w-[540px]  ml-[160px] mt-[48px]'>
          <h2 className='text-[44px] font-bold text-white'>SOBRE</h2>
          <p className='mt-[21px] text-white text-[18px]'>
            Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus.
            Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros
            mattis a quis sem sodales.
          </p>
          <p className='mt-[19px] text-white text-[18px]'>
            Horário de funcionamento: <strong>09:00</strong> ás <strong>19:00</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
