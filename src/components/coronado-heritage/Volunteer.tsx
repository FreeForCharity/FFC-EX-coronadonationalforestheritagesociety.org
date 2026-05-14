import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Volunteer: React.FC = () => {
  return (
    <section id="volunteer" aria-labelledby="volunteer-heading" className="bg-paper py-20 md:py-28">
      <div className="ffc-container">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p
              className="uppercase tracking-[0.24em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-primary)] mb-3"
              id="aria-font"
            >
              Volunteer With Us
            </p>
            <h2
              id="volunteer-heading"
              className="text-[32px] md:text-[42px] leading-[1.15] font-semibold text-[var(--ffc-earth)] mb-5"
            >
              Help preserve the places that tell Arizona&apos;s story.
            </h2>
            <p
              className="text-[17px] md:text-[18px] leading-[1.7] text-[var(--ffc-black)]/80 mb-6"
              id="aria-font"
            >
              Volunteers are the backbone of our chapters. Whether you&apos;d like to help on a
              workday, host visitors, or contribute professional skills, sign up directly through
              the chapter closest to the work you want to do.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://browncanyonranch.org/join/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--ffc-primary)] px-6 py-3 text-[16px] font-semibold text-paper hover:bg-[var(--ffc-earth)] transition-colors"
              >
                Brown Canyon Ranch volunteer
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.kentuckycamp.org/duesanddonation/duesanddonation.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--ffc-secondary)] px-6 py-3 text-[16px] font-semibold text-paper hover:bg-[var(--ffc-earth)] transition-colors"
              >
                Kentucky Camp volunteer
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          <aside
            className="md:col-span-5 rounded-xl bg-[var(--ffc-sand)] border border-[var(--ffc-earth)]/15 p-7 md:p-8"
            aria-label="Coordinator contact"
          >
            <h3 className="text-[20px] font-semibold text-[var(--ffc-primary)] mb-3">
              Prefer to talk first?
            </h3>
            <p
              className="text-[16px] leading-[1.65] text-[var(--ffc-black)]/80 mb-5"
              id="aria-font"
            >
              Reach the Sierra Vista Ranger District or send a note through our contact page and
              we&apos;ll connect you with the right chapter coordinator.
            </p>
            <ul className="space-y-3 text-[16px]">
              <li>
                <a
                  href="tel:5203780311"
                  className="font-semibold text-[var(--ffc-earth)] hover:text-[var(--ffc-primary)]"
                >
                  Call (520) 378-0311
                </a>
              </li>
              <li>
                <a
                  href="/donate-or-volunteer"
                  className="font-semibold text-[var(--ffc-earth)] hover:text-[var(--ffc-primary)] underline underline-offset-4"
                >
                  Visit the Donate or Volunteer page
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Volunteer
