
import dynamic from 'next/dynamic';


export default function Home() {
  
  const About = dynamic (()=> import('../components/home/About'),{})
  const HeroSection = dynamic(() => import('../components/home/HeroSection'))

  return (
    <div>
  
       <HeroSection />
      <About />
   
    </div>
  );
}
