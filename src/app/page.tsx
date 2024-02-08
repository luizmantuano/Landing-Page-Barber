'use client';

import Header from '@/components/Header';
import About from '@/components/About';
import Services from '@/components/Services';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <body>
      <Header />
      <About />
      <Services />
      <div className='flex justify-center items-center mt-[146px]'>
        <h2 className='text-[34px] font-bold'>Venha conhecer</h2>
      </div>
      <Map />
      <Footer />
    </body>
  );
}
