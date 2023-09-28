import NavBar from '@/components/NavBar/NavBar'
import Hero from '@/components/Hero/Hero'
import staticSectionContent from '@/components/constants/Section_data'
import StaticSection from '@/components/Static_Section/Static_Section'
import Slider from '@/components/Slider/Slider'


export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center'> 
      <NavBar />
      <Hero />
      <StaticSection content = {staticSectionContent[0]} />
      <StaticSection content = {staticSectionContent[1]} />
      <Slider />
    </main>
  )
}
