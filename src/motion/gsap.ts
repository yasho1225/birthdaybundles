import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const MOTION = {
  ease: 'power3.out',
  snap: 'back.out(1.35)',
  duration: 0.75,
} as const

export { gsap, ScrollTrigger, useGSAP }
