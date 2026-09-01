import { Hero } from '../components/sections/Hero'
import { ImpactStats } from '../components/sections/ImpactStats'
import { MissionOverview } from '../components/sections/MissionOverview'
import { StoryTeaser } from '../components/sections/StoryTeaser'
import { VolunteerTeaser } from '../components/sections/VolunteerTeaser'
import { Testimonials } from '../components/sections/Testimonials'
import { FinalCta } from '../components/sections/FinalCta'

export function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <MissionOverview />
      <StoryTeaser />
      <VolunteerTeaser />
      <Testimonials />
      <FinalCta />
    </>
  )
}
