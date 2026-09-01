import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { captureUtmParams } from './utils/utm'

const Donate = lazy(() => import('./pages/Donate').then((m) => ({ default: m.Donate })))
const Volunteer = lazy(() =>
  import('./pages/Volunteer').then((m) => ({ default: m.Volunteer })),
)
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <p className="font-heading text-sm font-bold uppercase tracking-wider text-ink/40">
        Loading...
      </p>
    </div>
  )
}

export default function App() {
  useEffect(() => {
    captureUtmParams()
  }, [])

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="donate"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Donate />
                </Suspense>
              }
            />
            <Route
              path="volunteer"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Volunteer />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<PageLoader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Contact />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
