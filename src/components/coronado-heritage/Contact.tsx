import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[var(--ffc-sand)] py-20 md:py-28"
    >
      <div className="ffc-container">
        <div className="max-w-[820px] mb-12 md:mb-16">
          <p
            className="uppercase tracking-[0.24em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-primary)] mb-3"
            id="aria-font"
          >
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="text-[32px] md:text-[42px] leading-[1.15] font-semibold text-[var(--ffc-earth)]"
          >
            Questions, partnerships, or press inquiries?
          </h2>
        </div>
        <ul className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <li className="rounded-xl bg-paper border border-[var(--ffc-earth)]/15 p-7">
            <Phone className="h-8 w-8 text-[var(--ffc-primary)] mb-4" aria-hidden="true" />
            <h3 className="text-[20px] font-semibold text-[var(--ffc-earth)] mb-2">By Phone</h3>
            <p className="text-[16px] text-[var(--ffc-black)]/75 mb-3" id="aria-font">
              Sierra Vista Ranger District line.
            </p>
            <a
              href="tel:5203780311"
              className="text-[17px] font-semibold text-[var(--ffc-primary)] hover:text-[var(--ffc-earth)]"
            >
              (520) 378-0311
            </a>
          </li>
          <li className="rounded-xl bg-paper border border-[var(--ffc-earth)]/15 p-7">
            <Mail className="h-8 w-8 text-[var(--ffc-primary)] mb-4" aria-hidden="true" />
            <h3 className="text-[20px] font-semibold text-[var(--ffc-earth)] mb-2">By Email</h3>
            <p className="text-[16px] text-[var(--ffc-black)]/75 mb-3" id="aria-font">
              Send us a note and we&apos;ll route it to the right coordinator.
            </p>
            <a
              href="mailto:info@coronadonationalforestheritagesociety.org"
              className="text-[15px] font-semibold text-[var(--ffc-primary)] hover:text-[var(--ffc-earth)] break-all"
            >
              info@coronadonationalforestheritagesociety.org
            </a>
          </li>
          <li className="rounded-xl bg-paper border border-[var(--ffc-earth)]/15 p-7">
            <MapPin className="h-8 w-8 text-[var(--ffc-primary)] mb-4" aria-hidden="true" />
            <h3 className="text-[20px] font-semibold text-[var(--ffc-earth)] mb-2">Where We Are</h3>
            <p className="text-[16px] text-[var(--ffc-black)]/75" id="aria-font">
              Coronado National Forest
              <br />
              Sierra Vista Ranger District
              <br />
              Southern Arizona
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
