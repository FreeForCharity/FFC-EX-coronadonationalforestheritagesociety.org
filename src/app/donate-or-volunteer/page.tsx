import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donate or Volunteer',
  description:
    'Donate, become a member, or volunteer with the Coronado National Forest Heritage Society. Memberships and giving are coordinated through our two chapters: Brown Canyon Ranch and Kentucky Camp.',
}

interface ChapterAction {
  name: string
  description: string
  location: string
  siteUrl: string
  joinUrl: string
  joinLabel: string
}

const chapters: ChapterAction[] = [
  {
    name: 'Friends of the Brown Canyon Ranch',
    description:
      'A historic ranch and visitor site at the foot of the Huachuca Mountains. The chapter accepts memberships, donations, and volunteer signups directly.',
    location: 'Sierra Vista, AZ',
    siteUrl: 'https://browncanyonranch.org',
    joinUrl: 'https://browncanyonranch.org/join/',
    joinLabel: 'Join / Donate / Volunteer',
  },
  {
    name: 'Friends of Kentucky Camp',
    description:
      'An early-1900s gold mining settlement in the Santa Rita Mountains. The chapter handles dues, donations, and volunteer coordination.',
    location: 'Sonoita, AZ',
    siteUrl: 'http://kentuckycamp.org',
    joinUrl: 'https://www.kentuckycamp.org/duesanddonation/duesanddonation.htm',
    joinLabel: 'Dues and donations',
  },
]

export default function DonateOrVolunteerPage() {
  return (
    <main className="pt-[120px] md:pt-[140px] pb-20 bg-paper">
      <section className="ffc-container">
        <header className="max-w-[820px] mb-12">
          <p className="uppercase tracking-[0.24em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-primary)] mb-3 aria-font">
            Donate or Volunteer
          </p>
          <h1 className="text-[36px] md:text-[48px] leading-[1.1] font-semibold text-[var(--ffc-earth)] mb-5">
            Three ways to support heritage in southern Arizona.
          </h1>
          <p className="text-[18px] leading-[1.7] text-[var(--ffc-black)]/85 aria-font">
            Donations, memberships, and volunteer signups for the Coronado National Forest Heritage
            Society are handled directly by our two chapters. Choose the site that calls to you, or
            give to both.
          </p>
        </header>

        <ul className="grid gap-6 md:gap-8 md:grid-cols-2 mb-16">
          {chapters.map((chapter) => (
            <li
              key={chapter.name}
              className="flex flex-col rounded-xl border border-[var(--ffc-earth)]/15 bg-[var(--ffc-sand)]/40 p-7 md:p-8"
            >
              <p className="text-[12px] uppercase tracking-[0.22em] font-semibold text-[var(--ffc-primary)] mb-3 aria-font">
                {chapter.location}
              </p>
              <h2 className="text-[24px] md:text-[26px] font-semibold text-[var(--ffc-earth)] mb-3">
                {chapter.name}
              </h2>
              <p className="text-[16px] md:text-[17px] leading-[1.65] text-[var(--ffc-black)]/80 mb-6 aria-font">
                {chapter.description}
              </p>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={chapter.joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 rounded-md bg-[var(--ffc-primary)] px-5 py-3 text-[15px] font-semibold text-paper hover:bg-[var(--ffc-earth)] transition-colors"
                >
                  <span>{chapter.joinLabel}</span>
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={chapter.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 rounded-md border-2 border-[var(--ffc-primary)] px-5 py-3 text-[15px] font-semibold text-[var(--ffc-primary)] hover:bg-[var(--ffc-sand)] transition-colors"
                >
                  <span>Visit chapter website</span>
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <section
          aria-labelledby="contact-options"
          className="rounded-xl bg-[var(--ffc-sand)] border border-[var(--ffc-earth)]/15 p-8 md:p-10"
        >
          <h2
            id="contact-options"
            className="text-[26px] md:text-[30px] font-semibold text-[var(--ffc-earth)] mb-3"
          >
            Want to talk to a person first?
          </h2>
          <p className="text-[17px] leading-[1.7] text-[var(--ffc-black)]/85 mb-6 max-w-[640px] aria-font">
            Reach out and we&apos;ll connect you with the right chapter coordinator. We typically
            respond within a few business days.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:5203780311"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--ffc-primary)] px-5 py-3 text-[15px] font-semibold text-paper hover:bg-[var(--ffc-earth)] transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              (520) 378-0311
            </a>
            <a
              href="mailto:info@coronadonationalforestheritagesociety.org"
              className="inline-flex items-center gap-2 rounded-md border-2 border-[var(--ffc-primary)] px-5 py-3 text-[15px] font-semibold text-[var(--ffc-primary)] hover:bg-paper transition-colors"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Email us
            </a>
            <a
              href="https://www.guidestar.org/profile/86-0802156"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-[var(--ffc-earth)]/40 px-5 py-3 text-[15px] font-semibold text-[var(--ffc-earth)] hover:bg-paper transition-colors"
            >
              GuideStar profile
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-6 text-[14px] text-[var(--ffc-black)]/60 aria-font">
            EIN: 86-0802156 · Coronado National Forest Heritage Society is a 501(c)(3) nonprofit.
          </p>
        </section>

        <p className="mt-12 text-[15px] aria-font">
          <Link
            href="/"
            className="text-[var(--ffc-primary)] hover:text-[var(--ffc-earth)] underline underline-offset-4"
          >
            &larr; Back to home
          </Link>
        </p>
      </section>
    </main>
  )
}
