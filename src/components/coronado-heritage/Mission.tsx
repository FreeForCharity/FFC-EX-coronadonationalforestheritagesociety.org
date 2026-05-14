import React from 'react'

const Mission: React.FC = () => {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="bg-[var(--ffc-sand)] py-20 md:py-28"
    >
      <div className="ffc-container">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <p
              className="uppercase tracking-[0.24em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-primary)] mb-3"
              id="aria-font"
            >
              Our Mission
            </p>
            <h2
              id="mission-heading"
              className="text-[32px] md:text-[42px] leading-[1.15] font-semibold text-[var(--ffc-earth)]"
            >
              Heritage, kept alive on the land it came from.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-[17px] md:text-[18px] leading-[1.7] text-[var(--ffc-black)]/85">
            <p>
              The Coronado National Forest Heritage Society safeguards the cultural and natural
              heritage of the Coronado National Forest through preservation, interpretation, and
              collaboration with the U.S. Forest Service and partner organizations.
            </p>
            <p>
              We act as the parent 501(c)(3) for two volunteer-led chapters that care for
              historically significant sites in the Santa Rita and Huachuca Mountains. Together,
              they bring early Arizona mining and ranching history to life for the next generation
              of visitors.
            </p>
            <dl className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <dt
                  className="text-[12px] uppercase tracking-[0.18em] text-[var(--ffc-primary)] font-semibold"
                  id="aria-font"
                >
                  EIN
                </dt>
                <dd className="text-[18px] font-medium text-[var(--ffc-earth)]">86-0802156</dd>
              </div>
              <div>
                <dt
                  className="text-[12px] uppercase tracking-[0.18em] text-[var(--ffc-primary)] font-semibold"
                  id="aria-font"
                >
                  Tax Status
                </dt>
                <dd className="text-[18px] font-medium text-[var(--ffc-earth)]">501(c)(3)</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
