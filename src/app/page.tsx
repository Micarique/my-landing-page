import { Experience } from './components/experienceSection/experience'
import { Footer } from './components/footerSection/footer'
import { Header } from './components/headerSection/header'
import { Info } from './components/informationSection/information'
import { PrimaryButton } from './components/primaryButton/primary-button'
import { SocialButtons } from './components/socialButtonsSection/social-buttons'
import { Technologies } from './components/technologiesSection/technologies'
import './styles/home.scss'
export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Technologies />
      <Info />
      <div className="buttons">
        <SocialButtons />
        <a href="mailto:micarique2010@gmail.com">
          <PrimaryButton text="contact me" />
        </a>
      </div>
      <Footer />
    </main>
  )
}
