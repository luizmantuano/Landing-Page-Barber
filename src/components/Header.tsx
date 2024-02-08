import React from 'react';

import Logo from '../assets/svg/logo.svg';

import Facebook from '../assets/img/logo-facebook.png';
import Instagram from '../assets/img/logo-instagram.png';
import Twitter from '../assets/img/logo-twitter.png';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex  items-center justify-center bg-bg-header bg-center bg-cover'>
      <header className='w-full h-[815px]'>
        <nav className='flex flex-row justify-between mt-10'>
          <div className='flex flex-row gap-3 ml-8'>
            <a href='#'>
              <Image src={Facebook} alt='facebook' />
            </a>
            <a href='#'>
              <Image src={Instagram} alt='facebook' />
            </a>
            <a href='#'>
              <Image src={Twitter} alt='facebook' />
            </a>
          </div>
          <div className='header-logo'>
            <Image src={Logo} alt='Logo da barbearia' width={150} height={150} />
          </div>
          <div className='mr-8'>
            <button className='flex w-[155px] items-center justify-center p-1 border rounded-sm'>
              <span className='text-white font-bold'>Agendar horário</span>
            </button>
          </div>
        </nav>

        <main className='flex flex-col justify-center items-center text-white mt-[104px]'>
          <h1 className='text-[48px] text-center font-bold'>
            ESTILO É UM REFLEXO DA SUA <br /> ATITUDE E SUA PERSONALIDADE.
          </h1>
          <p className='text-[18px] mt-[7px]'>Horário de funcionamento: 09:00 ás 19:00</p>
          <button className='bg-red-500 w-[200px] h-[50px] mt-[58px]'>
            <span className='text-[20px]'>Agendar horário</span>
          </button>
        </main>
      </header>
    </div>
  );
}
