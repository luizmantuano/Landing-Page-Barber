import React, { useEffect } from 'react';

import Logo from '../assets/svg/logo.svg';
import Facebook from '../assets/img/logo-facebook.png';
import Instagram from '../assets/img/logo-instagram.png';
import Twitter from '../assets/img/logo-twitter.png';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='flex  items-center justify-center bg-bg-header bg-center bg-cover'>
      <header className='md:w-full w-[620px] h-[815px]'>
        <nav className='flex flex-col items-center md:flex-row md:justify-between mt-10'>
          <div className='flex flex-row h-8 gap-3 ml-8' data-aos='fade-down'>
            <a href='#' className='hover:-translate-y-1'>
              <Image src={Facebook} alt='facebook' />
            </a>
            <a href='#' className='hover:-translate-y-1'>
              <Image src={Instagram} alt='facebook' />
            </a>
            <a href='#' className='hover:-translate-y-1'>
              <Image src={Twitter} alt='facebook' />
            </a>
          </div>
          <div className='header-logo mt-[55px]' data-aos='fade-up' data-aos-delay='300'>
            <Image
              src={Logo}
              alt='Logo da barbearia'
              width={150}
              height={150}
              data-aos='flip-up'
              data-aos-delay='300'
              data-aos-duration='1500'
            />
          </div>
          <div className='mr-8'>
            <button
              className='w-[155px] items-center justify-center p-1 border rounded-sm hover:bg-red-500 hover:border-red-500 hidden md:flex'
              data-aos='fade-down'
            >
              <a
                href='https://api.whatsapp.com/send?phone=5500000000000&text=Quero%20fazer%20um%20agendamento%20hoje!'
                target='_blank'
                className='text-white'
              >
                Agendar horário
              </a>
            </button>
          </div>
        </nav>

        <main
          className='flex flex-col justify-center items-center text-white mt-[104px]'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <h1 className='text-[34px] md:text-[48px] text-center font-bold'>
            ESTILO É UM REFLEXO DA SUA  ATITUDE E SUA PERSONALIDADE.
          </h1>
          <p className='md:text-[18px] mt-[7px]'>Horário de funcionamento: 09:00 ás 19:00</p>
          <button className='bg-red-500 w-[200px] h-[50px] mt-[58px] hover:scale-110 ease-in-out duration-300 delay-150 hover:animate-spin'>
            <a
              href='https://api.whatsapp.com/send?phone=5500000000000&text=Quero%20fazer%20um%20agendamento%20hoje!'
              target='_blank'
              className='text-[20px]'
            >
              Agendar horário
            </a>
          </button>
        </main>
      </header>
    </div>
  );
}
