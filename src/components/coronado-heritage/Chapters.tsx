import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface Chapter {
  name: string
  blurb: string
  location: string
  siteUrl: string
  joinUrl: string
  joinLabel: string
  accent: string
}

const chapters: Chapter[] = [
  {
    name: 'Friends of the Brown Canyon Ranch',
    blurb:
      'Caring for an early-1900s ranching heritage site tucked into the Huachuca Mountains near Sierra Vista, Arizona.',
    location: 'Huachuca Mountains • Sierra Vista, AZ',
    siteUrl: 'https://browncanyonranch.org',
    joinUrl: 'https://browncanyonranch.org/join/',
    joinLabel: 'Join, donate, or volunteer',
    accent: 'var(--ffc-primary)',
  },
  {
    name: 'Friends of Kentucky Camp',
    blurb:
      'Preserving an early-1900s gold mining settlement in the Santa Rita Mountains near Sonoita, Arizona.',
    location: 'Santa Rita Mountains • Sonoita, AZ',
    siteUrl: 'http://kentuckycamp.org',
    joinUrl: 'https://www.kentuckycamp.org/duesanddonation/duesanddonation.htm',
    joinLabel: 'Dues and donations',
    accent: 'var(--ffc-secondary)',
  },
]

const Chapters: React.FC = () => {
  return (
    <section
      id="chapters"
      aria-labelledby="chapters-heading"
      className="bg-[var(--ffc-earth)] text-paper py-20 md:py-28"
    >
      <div className="ffc-container">
        <div className="max-w-[820px] mb-12 md:mb-16">
          <p className="uppercase tracking-[0.24em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-yellow)] mb-3 aria-font">
            Our Chapters
          </p>
          <h2
            id="chapters-heading"
            className="text-[32px] md:text-[44px] leading-[1.15] font-semibold"
          >
            Two volunteer-led chapters, one mission.
          </h2>
          <p className="mt-5 text-[17px] md:text-[18px] leading-[1.7] text-[#f5efe3]/90 aria-font">
            Membership, donations, and volunteering for the Heritage Society are coordinated through
            the two chapters below. Each chapter operates its own site and welcomes new supporters.
          </p>
        </div>

        <ul className="grid gap-6 md:gap-8 md:grid-cols-2">
          {chapters.map((chapter) => (
            <li
              key={chapter.name}
              className="group relative flex flex-col rounded-xl bg-paper text-[var(--ffc-black)] p-7 md:p-9 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-7 md:top-9 h-10 w-1.5 rounded-r"
                style={{ backgroundColor: chapter.accent }}
              />
              <p
                className="text-[12px] uppercase tracking-[0.22em] font-semibold mb-3 aria-font"
                style={{ color: chapter.accent }}
              >
                {chapter.location}
              </p>
              <h3 className="text-[24px] md:text-[26px] font-semibold mb-3 text-[var(--ffc-earth)]">
                {chapter.name}
              </h3>
              <p className="text-[16px] md:text-[17px] leading-[1.65] text-[var(--ffc-black)]/80 mb-6 aria-font">
                {chapter.blurb}
              </p>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={chapter.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 rounded-md px-5 py-3 text-[15px] font-semibold text-paper transition-colors hover:opacity-90"
                  style={{ backgroundColor: chapter.accent }}
                >
                  <span>Visit chapter website</span>
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={chapter.joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 rounded-md border-2 px-5 py-3 text-[15px] font-semibold transition-colors hover:bg-[var(--ffc-sand)]"
                  style={{ borderColor: chapter.accent, color: chapter.accent }}
                >
                  <span>{chapter.joinLabel}</span>
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Chapters
