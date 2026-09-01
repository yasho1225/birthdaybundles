import { BackToTopButton } from './BackToTopButton'
import { ContactFab } from './ContactFab'
import { CookieBanner } from './CookieBanner'
import { ScrollProgressBar } from './ScrollProgressBar'

export function SiteFeatures() {
  return (
    <>
      <ScrollProgressBar />
      <BackToTopButton />
      <ContactFab />
      <CookieBanner />
    </>
  )
}
