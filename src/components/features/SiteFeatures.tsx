import { BackToTopButton } from './BackToTopButton'
import { CookieBanner } from './CookieBanner'
import { ScrollProgressBar } from './ScrollProgressBar'

export function SiteFeatures() {
  return (
    <>
      <ScrollProgressBar />
      <BackToTopButton />
      <CookieBanner />
    </>
  )
}
