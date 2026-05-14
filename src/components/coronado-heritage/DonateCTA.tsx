import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const DonateCTA: React.FC = () => {
  return (
    <section
      id="donate"
      aria-labelledby="donate-heading"
      className="relative isolate overflow-hidden text-paper"
      style={{
        background:
          'linear-gradient(140deg, var(--ffc-primary) 0%, var(--ffc-secondary) 60%, var(--ffc-earth) 100%)',
      }}
    >
      <div className="ffc-container py-20 md:py-24">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p
              className="uppercase tracking-[0.24em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-yellow)] mb-3"
              id="aria-font"
            >
              Support Heritage
            </p>
            <h2
              id="donate-heading"
              className="text-[32px] md:text-[44px] leading-[1.15] font-semibold mb-5"
            >
              Your gift keeps these places open to the public.
            </h2>
            <p
              className="text-[17px] md:text-[18px] leading-[1.7] text-[#f5efe3]/95 max-w-[640px]"
              id="aria-font"
            >
              Donations are received and managed by each chapter, which is the most direct way to
              fund preservation work on the ground. Pick the place that moves you most—or give to
              both.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col gap-4">
            <a
              href="https://browncanyonranch.org/join/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 rounded-md bg-[var(--ffc-yellow)] px-6 py-4 text-[17px] font-semibold text-[var(--ffc-black)] hover:bg-paper transition-colors"
            >
              <span>Donate to Brown Canyon Ranch</span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.kentuckycamp.org/duesanddonation/duesanddonation.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 rounded-md bg-paper px-6 py-4 text-[17px] font-semibold text-[var(--ffc-primary)] hover:bg-[var(--ffc-yellow)] hover:text-[var(--ffc-black)] transition-colors"
            >
              <span>Donate to Kentucky Camp</span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.guidestar.org/profile/86-0802156"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 rounded-md border-2 border-paper/80 px-6 py-3 text-[15px] font-semibold text-paper hover:bg-paper hover:text-[var(--ffc-primary)] transition-colors"
            >
              <span>View our GuideStar profile</span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonateCTA
