import React, { useEffect } from 'react';
import Image from 'next/image';

const Images = require('../assets/svg/images.svg');

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='flex flex-1 h-[972px] md:h-[506px] bg-bg '>
      <div className='flex flex-col md:flex-row'>
        <div className=' mt-[171px] md:mt-[-90px]' data-aos='zoom-in' data-aos-delay='100'>
          <Image src={Images} alt='Imagem sobre a barbearia' className='object-cover md:pl-[87px]' width={1000} height={529}/>
        </div>

        <div
          className='flex flex-col  ml-[160px] mt-[48px]'
          data-aos='zoom-out-left'
          data-aos-delay='250'
        >
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
