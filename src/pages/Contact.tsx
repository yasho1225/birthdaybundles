import { useRef, useState, type FormEvent } from 'react'
import { LINKS } from '../config/links'
import { CONTACT_INFO } from '../config/content'
import { Button } from '../components/ui/Button'
import { ConfirmModal } from '../components/ui/ConfirmModal'
import { CopyButton } from '../components/ui/CopyButton'
import { ExternalLink } from '../components/ui/ExternalLink'
import { PageHeader } from '../components/ui/PageHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const validate = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {}
    const name = formData.get('name')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    if (!name) newErrors.name = 'Name is required'
    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!message) newErrors.message = 'Message is required'

    return newErrors
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormError(null)

    const formData = new FormData(event.currentTarget)
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setFormError('Please fix the errors below before sending your message.')
      return
    }

    setErrors({})
    setShowConfirm(true)
  }

  const confirmSubmit = () => {
    setShowConfirm(false)
    formRef.current?.submit()
    setSubmitted(true)
  }

  const inputClass = (hasError: boolean) =>
    `mt-2 w-full rounded-xl border bg-surface px-4 py-3.5 font-body text-ink transition-colors focus-ring ${
      hasError ? 'border-primary' : 'border-ink/15 focus:border-secondary dark:border-white/15'
    }`

  const errorCount = Object.keys(errors).length

  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title="Contact Us"
        subtitle="Have a question, partnership idea, or want to get involved? We'd love to hear from you."
      />

      <section aria-labelledby="contact-form-heading" className="section-padding">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-5">
            <ScrollReveal className="lg:col-span-3">
              <SectionHeading
                id="contact-form-heading"
                eyebrow="Write to us"
                title="Send a Message"
                subtitle="We'll get back to you within 2 business days."
                align="left"
              />

              {submitted ? (
                <div
                  className="mt-8 rounded-3xl border border-secondary/30 bg-secondary/10 p-8 dark:bg-secondary/20"
                  role="status"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-white" aria-hidden="true">✓</span>
                    <div>
                      <p className="font-heading text-lg font-bold text-secondary-fg">
                        Message sent successfully!
                      </p>
                      <p className="mt-2 font-body text-muted">
                        Thank you for reaching out. We will get back to you within 2 business days.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  ref={formRef}
                  action={LINKS.contactForm}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                  noValidate
                >
                  {formError && (
                    <div
                      className="rounded-2xl border border-primary/30 bg-primary/5 p-4 dark:bg-primary/10"
                      role="alert"
                      aria-live="assertive"
                    >
                      <p className="font-heading text-sm font-bold text-primary">{formError}</p>
                      {errorCount > 0 && (
                        <p className="mt-1 font-body text-sm text-muted">
                          {errorCount} field{errorCount > 1 ? 's' : ''} need{errorCount === 1 ? 's' : ''} your attention.
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="font-heading text-sm font-bold text-ink">
                      Name <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-sm text-primary" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="font-heading text-sm font-bold text-ink">
                      Email <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-sm text-primary" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="font-heading text-sm font-bold text-ink">
                      Message <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`${inputClass(!!errors.message)} resize-y`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-sm text-primary" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg">
                    Send Message
                  </Button>

                  <p className="font-body text-sm text-subtle">
                    Prefer email?{' '}
                    <a
                      href={LINKS.contactEmail}
                      className="interactive-link text-secondary-fg underline focus-ring rounded"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal delay={120} className="lg:col-span-2">
              <div className="card-surface h-full p-8">
                <h2 className="font-heading text-lg font-bold text-ink">Get in Touch</h2>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="font-heading text-xs font-bold uppercase tracking-widest text-subtle">
                      Email
                    </dt>
                    <dd className="mt-1 flex flex-wrap items-center gap-2">
                      <a
                        href={LINKS.contactEmail}
                        className="interactive-link font-body text-secondary-fg focus-ring rounded"
                      >
                        {CONTACT_INFO.email}
                      </a>
                      <CopyButton value={CONTACT_INFO.email} />
                    </dd>
                  </div>
                  <div>
                    <dt className="font-heading text-xs font-bold uppercase tracking-widest text-subtle">
                      Phone
                    </dt>
                    <dd className="mt-1 font-body text-ink">{CONTACT_INFO.phone}</dd>
                  </div>
                  <div>
                    <dt className="font-heading text-xs font-bold uppercase tracking-widest text-subtle">
                      Address
                    </dt>
                    <dd className="mt-1 font-body leading-relaxed text-ink">
                      {CONTACT_INFO.address}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 border-t border-ink/8 pt-8 dark:border-white/10">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-subtle">
                    Follow Us
                  </h3>
                  <ExternalLink
                    href={LINKS.instagram}
                    className="interactive-link mt-4 inline-flex items-center gap-2.5 font-body font-bold text-secondary-fg focus-ring rounded"
                  >
                    <InstagramIcon />
                    @birthdaybundles
                  </ExternalLink>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ConfirmModal
        isOpen={showConfirm}
        title="Send your message?"
        message="We'll receive your message and respond within 2 business days."
        confirmLabel="Send Message"
        onConfirm={confirmSubmit}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  )
}
