import { Link } from 'react-router-dom'
import { IMAGES, PLACEHOLDER_IMAGES, imagePair } from '../../config/images'
import { Button } from '../ui/Button'
import { OptimizedImage } from '../ui/OptimizedImage'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

const volunteerImages = [
  {
    ...imagePair(IMAGES.volunteer.packing, PLACEHOLDER_IMAGES.volunteer.packing),
    alt: 'Volunteer packing birthday supplies',
  },
  {
    ...imagePair(IMAGES.volunteer.baking, PLACEHOLDER_IMAGES.volunteer.baking),
    alt: 'Baker decorating a birthday cake',
  },
]

export function VolunteerTeaser() {
  return (
    <section aria-labelledby="volunteer-teaser-heading" className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="overflow-hidden rounded-4xl bg-gradient-to-br from-secondary to-[#127070] p-6 sm:p-8 md:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="Get involved"
                  title="Join the Celebration"
                  subtitle="Whether you bake cakes or deliver bundles, your time makes birthdays happen."
                  align="left"
                  light
                />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button as={Link} to="/volunteer" variant="white" size="md">
                    Become a Volunteer
                  </Button>
                  <Button
                    as={Link}
                    to="/volunteer"
                    variant="ghost"
                    size="md"
                    className="border-2 border-white/30 text-white hover:bg-white/10"
                  >
                    Sign Up to Bake
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {volunteerImages.map((image, index) => (
                  <OptimizedImage
                    key={image.alt}
                    src={image.src}
                    fallback={image.fallback}
                    alt={image.alt}
                    className={`aspect-square rounded-2xl object-cover shadow-card ${index === 1 ? 'mt-6 sm:mt-8' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
