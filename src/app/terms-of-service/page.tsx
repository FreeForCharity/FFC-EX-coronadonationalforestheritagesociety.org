import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for the Coronado National Forest Heritage Society website.',
}

export default function TermsOfService() {
  return (
    <main className="pt-[120px] md:pt-[140px] pb-20 bg-paper">
      <article className="mx-auto max-w-3xl px-4">
        <p className="uppercase tracking-[0.24em] text-[12px] md:text-[13px] font-semibold text-[var(--ffc-primary)] mb-3 aria-font">
          Policies
        </p>
        <h1 className="text-[36px] md:text-[44px] font-semibold text-[var(--ffc-earth)] mb-6">
          Terms of Service
        </h1>
        <div className="space-y-5 text-[17px] leading-[1.7] text-[var(--ffc-black)]/85 aria-font">
          <p>
            By using coronadonationalforestheritagesociety.org you agree to these basic terms. The
            site provides information about the Coronado National Forest Heritage Society, a
            501(c)(3) nonprofit (EIN 86-0802156), and our two partner chapters.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">Content</h2>
          <p>
            Text, images, and other content are provided for informational and educational purposes.
            We strive for accuracy but make no warranty as to completeness or fitness for any
            particular purpose.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">Donations</h2>
          <p>
            Donation and membership processing is handled by our chapters on their own websites.
            Their terms and refund policies apply to those transactions.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">
            Limitation of liability
          </h2>
          <p>
            The Coronado National Forest Heritage Society is not liable for any indirect or
            consequential damages arising from use of this site or any third-party link.
          </p>
          <h2 className="text-[22px] font-semibold text-[var(--ffc-earth)] pt-2">Contact</h2>
          <p>
            Questions about these terms? Email{' '}
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
