import React from 'react';
import Image from 'next/image';

import Facebook from '../assets/img/logo-facebook.png';
import Instagram from '../assets/img/logo-instagram.png';
import Twitter from '../assets/img/logo-twitter.png';

import Logo from '../assets/svg/logo.svg';
import WhatsApp from '../assets/svg/whatssapp.svg';

export default function Footer() {
  return (
    <footer className='flex flex-col w-full h-[412px] bg-bg justify-center items-center'>
      <div className='flex flex-row gap-4 mt-8'>
        <a href='#'>
          <Image src={Facebook} alt='Facebook' />
        </a>
        <a href='#'>
          <Image src={Instagram} alt='Instagram' />
        </a>
        <a href='#'>
          <Image src={Twitter} alt='Twitter' />
        </a>
      </div>

      <div className='mt-[39px]'>
        <Image src={Logo} alt='Logo barbearia' width={150} height={150} />
      </div>
      <div className='flex flex-row flex-1 items-end '>
        <p className='text-white mt-[39px] font-bold mb-8'>
          Copyright© 2023 | Dev Barbearia - Todos os direitos reservados.
        </p>
        <a href='#' className='absolute right-10 mb-5'>
          <Image src={WhatsApp} alt='Botao whatsapp' width={73} height={73} />
        </a>
      </div>
    </footer>
  );
}
