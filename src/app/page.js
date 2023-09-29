import NavBar from '@/components/NavBar/NavBar'
import Hero from '@/components/Hero/Hero'
import staticSectionContent from '@/components/constants/Section_data'
import StaticSection from '@/components/Static_Section/Static_Section'
import Slider from '@/components/Slider/Slider'
import DescriptionBox from '@/components/Description/Description'
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import Message from '@/components/Message/Message'
import TimeLine from '@/components/Timeline/Timeline'
import Work_Section from '@/components/Worksection/Worksections'
import Vacancy_Section from '@/components/Vacancy/VacancySections'


export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center main-wrapper'> 
      <NavBar />
      <Hero />
      <StaticSection content = {staticSectionContent[0]} />
      <Slider />
      <About/>
      <TimeLine />
      <StaticSection content = {staticSectionContent[1]} />
      <DescriptionBox />
      <Message />
      <Work_Section />
      <Vacancy_Section />
      <Footer />
    </main>
  )
}
