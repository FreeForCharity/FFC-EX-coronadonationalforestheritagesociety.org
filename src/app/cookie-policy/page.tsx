import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How the Coronado National Forest Heritage Society website uses cookies and similar technologies, and your choices.',
}

export default function CookiePolicy() {
  return (
    <main className="pt-[120px] md:pt-[140px] pb-20 bg-paper">
      <article className="mx-auto max-w-3xl px-4">
        <p className="uppercase tracking-[0.24em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-primary)] mb-3 aria-font">
          Policies
        </p>
        <h1 className="text-[36px] md:text-[44px] font-semibold text-[var(--ffc-earth)] mb-6">
          Cookie Policy
        </h1>
        <div className="space-y-5 text-[17px] leading-[1.7] text-[var(--ffc-black)]/85 aria-font">
          <p>
            This policy explains how the Coronado National Forest Heritage Society website
            (coronadonationalforestheritagesociety.org) uses cookies and similar technologies, and
            how you can control them.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">
            What are cookies?
          </h2>
          <p>
            Cookies are small text files stored on your device. They help websites function,
            remember preferences, and measure how a site is used.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">
            How we use cookies
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Necessary and functional.</strong> A small amount of information may be stored
              to make the site work and to remember your cookie choices. These are set regardless of
              consent because the site cannot function without them.
            </li>
            <li>
              <strong>Analytics (on by default).</strong> We use Google Tag Manager and Google
              Analytics 4 to understand aggregate site usage. Analytics runs by default, and Google
              Analytics 4 sets a first-party cookie (for example, <code>_ga</code>) when you visit.
              You can opt out at any time using our cookie banner &mdash; declining stops analytics
              on this browser and deletes those cookies.
            </li>
            <li>
              <strong>Third-party.</strong> Some pages link out to our partner chapters (Friends of
              the Brown Canyon Ranch and Friends of Kentucky Camp) and to public services such as
              GuideStar. Those services may set their own cookies when used.
            </li>
          </ul>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">
            Managing your choices
          </h2>
          <p>
            Analytics runs by default so we can measure aggregate usage, but you are always free to
            opt out. Our cookie-consent banner lets you decline (or customize) non-essential
            cookies: declining stops analytics on this browser and removes analytics cookies such as{' '}
            <code>_ga</code>. You can also clear this site&apos;s cookies and stored data in your
            browser settings, which brings the banner back on your next visit so you can choose
            differently.
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
