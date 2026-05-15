import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Coronado National Forest Heritage Society website.',
}

export default function PrivacyPolicy() {
  return (
    <main className="pt-[120px] md:pt-[140px] pb-20 bg-paper">
      <article className="mx-auto max-w-3xl px-4">
        <p className="uppercase tracking-[0.24em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-primary)] mb-3 aria-font">
          Policies
        </p>
        <h1 className="text-[36px] md:text-[44px] font-semibold text-[var(--ffc-earth)] mb-6">
          Privacy Policy
        </h1>
        <div className="space-y-5 text-[17px] leading-[1.7] text-[var(--ffc-black)]/85 aria-font">
          <p>
            The Coronado National Forest Heritage Society (&quot;we&quot;, &quot;us&quot;) operates
            this website to share information about our mission and our two partner chapters. This
            privacy policy explains what limited information we collect and how we use it.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">
            Information we collect
          </h2>
          <p>
            This site is a static informational website. We do not run forms, accounts, or analytics
            cookies that personally identify visitors. Standard server logs may record IP address,
            browser type, and pages visited for security and performance.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">
            Third-party links
          </h2>
          <p>
            Our site links out to our partner chapters (Friends of the Brown Canyon Ranch and
            Friends of Kentucky Camp) and to public services such as GuideStar. Those sites have
            their own privacy practices, which we do not control.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">Contact</h2>
          <p>
            Questions about this policy? Email{' '}
            <a
              href="mailto:info@coronadonationalforestheritagesociety.org"
              className="text-[var(--ffc-primary)] underline underline-offset-4 hover:text-[var(--ffc-earth)]"
            >
              info@coronadonationalforestheritagesociety.org
            </a>
            .
          </p>
        </div>
        <p className="mt-12 text-[15px] aria-font">
          <Link
            href="/"
            className="text-[var(--ffc-primary)] hover:text-[var(--ffc-earth)] underline underline-offset-4"
          >
            &larr; Back to home
          </Link>
        </p>
      </article>
    </main>
  )
}
