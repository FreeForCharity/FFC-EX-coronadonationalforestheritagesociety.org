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
        <p className="text-[15px] text-[var(--ffc-black)]/60 mb-6 aria-font">
          Last updated: August 30, 2026
        </p>
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
            This site is a static informational website. We do not run forms or accounts. Standard
            server logs may record IP address, browser type, and pages visited for security and
            performance.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">
            Analytics and cookies
          </h2>
          <p>
            This site uses Google Tag Manager and Google Analytics 4 to understand, in aggregate,
            how the site is used. These tools run under Google Consent Mode v2 with regional
            defaults:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              If you visit from the European Economic Area, the United Kingdom, or Switzerland,
              Google&apos;s tags set{' '}
              <strong>no analytics or advertising cookies and read no such identifiers</strong>{' '}
              (storage strictly necessary for security or basic site function may still be used).
              Your visit is counted only in an aggregate way, without analytics cookies or
              identifiers that could tie it back to you or to your next visit. This site currently
              offers no way to opt in to analytics cookies, so visitors from these regions always
              remain in that state.
            </li>
            <li>
              Everywhere else, including the United States, Google Analytics cookies are set from
              your first pageview. This site does not yet provide an on-page control to change that;
              you can block or delete these cookies through your browser settings, or use the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-[var(--ffc-primary)] underline underline-offset-4 hover:text-[var(--ffc-earth)]"
              >
                Google Analytics opt-out browser add-on
              </a>
              .
            </li>
          </ul>
          <p>
            Which of these rules applies to your visit is determined by Google from your IP address
            at the time of your visit; IP geolocation is approximate. We do not use session
            recording tools or advertising pixels on this site.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">
            Your rights in the EU, UK, and EEA (GDPR)
          </h2>
          <p>
            If the EU General Data Protection Regulation (GDPR) or the UK GDPR applies to your
            visit, you have the right to: access the personal data we hold about you; have
            inaccurate data rectified; have your data erased; restrict or object to processing;
            receive your data in a portable format; and withdraw any consent you have given at any
            time. Because Google&apos;s tags run without analytics cookies or identifiers for
            visitors in these regions, we hold no analytics identifiers about you. You may also
            lodge a complaint with your national data protection supervisory authority (in the UK,
            the Information Commissioner&apos;s Office). To exercise any of these rights, contact us
            using the details below.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">
            Your California privacy rights (CCPA/CPRA)
          </h2>
          <p>
            We do not sell personal information, and we do not share it for cross-context behavioral
            advertising, as those terms are defined by California law — and have not done so in the
            preceding 12 months. We do not knowingly collect or sell the personal information of
            anyone under 16. California residents have the right to know, access, correct, and
            delete personal information we hold, and not to be discriminated against for exercising
            these rights; submit a request using the contact details below. This site does not read
            or respond to the Global Privacy Control or Do Not Track browser signals; because we do
            not sell or share personal information, there is nothing for those signals to opt out
            of.
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
