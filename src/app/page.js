import NavBar from '@/components/NavBar/NavBar'
import Hero from '@/components/Hero/Hero'
import staticSectionContent from '@/components/constants/Section_data'
import StaticSection from '@/components/Static_Section/Static_Section'
import Slider from '@/components/Slider/Slider'
import DescriptionBox from '@/components/Description/Description'
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'


export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center'> 
      <NavBar />
      <Hero />
      <StaticSection content = {staticSectionContent[0]} />
      <Slider />
      <About/>
      <StaticSection content = {staticSectionContent[1]} />
      <DescriptionBox />
      <Footer />
    </main>
  )
}
