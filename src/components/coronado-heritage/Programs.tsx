import React from 'react'

interface Program {
  title: string
  description: string
}

const programs: Program[] = [
  {
    title: 'Site Stewardship',
    description:
      'Hands-on care of historic structures, trails, and grounds at our partner sites in the Santa Rita and Huachuca Mountains.',
  },
  {
    title: 'Interpretation & Education',
    description:
      'Public tours, school visits, and signage that bring early Arizona mining and ranching history to forest visitors.',
  },
  {
    title: 'Partnership Coordination',
    description:
      'Sustained collaboration with the Coronado National Forest, Arizona Trails Association, and other heritage partners.',
  },
  {
    title: 'Volunteer Service Days',
    description:
      'Workdays where volunteers help with preservation projects, maintenance, hosting, and special events.',
  },
]

const Programs: React.FC = () => {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="bg-paper py-20 md:py-28">
      <div className="ffc-container">
        <div className="max-w-[760px] mb-12 md:mb-16">
          <p
            className="uppercase tracking-[0.24em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-primary)] mb-3"
            id="aria-font"
          >
            What We Do
          </p>
          <h2
            id="programs-heading"
            className="text-[32px] md:text-[42px] leading-[1.15] font-semibold text-[var(--ffc-earth)]"
          >
            Four programs, one shared landscape.
          </h2>
        </div>
        <ul className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <li
              key={program.title}
              className="rounded-xl border border-[var(--ffc-earth)]/15 bg-[var(--ffc-sand)]/40 p-6 md:p-7 transition-shadow hover:shadow-md"
            >
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[var(--ffc-primary)] mb-3">
                {program.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-[var(--ffc-black)]/80" id="aria-font">
                {program.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Programs
