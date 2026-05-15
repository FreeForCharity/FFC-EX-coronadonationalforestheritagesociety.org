import React from 'react'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(28,26,23,0.55) 0%, rgba(28,26,23,0.65) 60%, rgba(28,26,23,0.85) 100%), linear-gradient(135deg, #2f5d50 0%, #355c7d 60%, #5c4632 100%)',
      }}
    >
      {/* Subtle topographic contour overlay — evokes canyon terrain */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="cnfhs-topo"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <ellipse
              cx="60"
              cy="60"
              rx="55"
              ry="40"
              fill="none"
              stroke="#e8dcc8"
              strokeWidth="0.6"
            />
            <ellipse
              cx="60"
              cy="60"
              rx="40"
              ry="28"
              fill="none"
              stroke="#e8dcc8"
              strokeWidth="0.6"
            />
            <ellipse
              cx="60"
              cy="60"
              rx="25"
              ry="16"
              fill="none"
              stroke="#e8dcc8"
              strokeWidth="0.6"
            />
            <ellipse
              cx="60"
              cy="60"
              rx="12"
              ry="7"
              fill="none"
              stroke="#e8dcc8"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cnfhs-topo)" />
      </svg>

      <div className="ffc-container relative pt-[160px] pb-[100px] md:pt-[200px] md:pb-[140px]">
        <div className="max-w-[820px] text-paper">
          <p className="uppercase tracking-[0.28em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-yellow)] mb-5 aria-font">
            Coronado National Forest Heritage Society
          </p>
          <h1
            id="hero-heading"
            className="text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05] font-semibold mb-6"
          >
            Preserving Heritage.
            <br />
            Fostering Partnerships.
          </h1>
          <p className="text-[18px] md:text-[20px] leading-[1.6] max-w-[680px] mb-9 text-[#f5efe3] aria-font">
            We safeguard the cultural and natural heritage of the Coronado National Forest through
            preservation, interpretation, and collaboration with two partner chapters in southern
            Arizona.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/donate-or-volunteer"
              className="inline-flex items-center justify-center rounded-md bg-[var(--ffc-yellow)] px-6 py-3 text-[16px] font-semibold text-[var(--ffc-black)] hover:bg-[var(--ffc-accent)] hover:text-paper transition-colors"
            >
              Donate or Volunteer
            </Link>
            <Link
              href="#chapters"
              className="inline-flex items-center justify-center rounded-md border-2 border-paper/80 px-6 py-3 text-[16px] font-semibold text-paper hover:bg-paper hover:text-[var(--ffc-primary)] transition-colors"
            >
              Visit Our Chapters
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
