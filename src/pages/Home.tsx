import { Hero } from '../components/sections/Hero'
import { HowItWorks } from '../components/sections/HowItWorks'
import { MissionOverview } from '../components/sections/MissionOverview'
import { StoryTeaser } from '../components/sections/StoryTeaser'
import { VolunteerTeaser } from '../components/sections/VolunteerTeaser'
import { Testimonials } from '../components/sections/Testimonials'
import { FinalCta } from '../components/sections/FinalCta'

export function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <MissionOverview />
      <StoryTeaser />
      <VolunteerTeaser />
      <Testimonials />
      <FinalCta />
    </>
  )
}
