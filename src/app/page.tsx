'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

import WhatsApp from '../assets/svg/whatssapp.svg';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <body>
      <Header />
      <About />
      <Services />
      <div className='flex justify-center items-center mt-[146px]'>
        <h2 className='text-[34px] font-bold'>Venha conhecer</h2>
      </div>
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24018.05401278357!2d-43.24207444054129!3d-22.916211161576282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e6bae2c0001%3A0x203e1a0e878d3b5!2sShopping%20Tijuca!5e0!3m2!1spt-PT!2sbr!4v1708542794896!5m2!1spt-PT!2sbr'
          width='600'
          height='450'
          loading='lazy'
          className='mt-[48px] w-full'
        ></iframe>
      </div>
      <Footer />
      <a
        href='https://api.whatsapp.com/send?phone=5500000000000&text=Quero%20fazer%20um%20agendamento%20hoje!'
        target='_blank'
        className='right-10 bottom-0 mb-5 fixed hover:scale-110'
        data-aos='zoom-in-up'
        data-aos-delay='400'
      >
        <Image src={WhatsApp} alt='Botao whatsapp' className='max-w-[74px]' />
      </a>
    </body>
  );
}
