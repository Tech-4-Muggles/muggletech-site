export const metadata = {
  title: "Terms of Use — MuggleTech",
  description: "The rules for using MuggleTech products and this website.",
};

export default function Terms() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold">Terms of Use</h1>
      <p className="text-sm text-[var(--muted)]">Last updated: March 2025</p>

      <p className="text-[var(--muted)]">
        These Terms apply to your use of the MuggleTech website at muggletech.net and our products including the J.A.N.E. Chrome extension. By using our site or products, you agree to these Terms and to our <a className="underline" href="/privacy">Privacy Policy</a>.
      </p>

      <h2 className="text-xl font-semibold">1. Who we are</h2>
      <p className="text-[var(--muted)]">
        MuggleTech LLC is a United States company. We build practical AI tools and related services.
      </p>

      <h2 className="text-xl font-semibold">2. Using our site and products</h2>
      <ul className="list-disc pl-6 space-y-2 text-[var(--muted)]">
        <li>You must comply with applicable laws and these Terms.</li>
        <li>Do not misuse our services, interfere with their operation, or attempt to access them using a method other than the provided interfaces.</li>
        <li>Do not upload unlawful, harmful, infringing, or confidential content that you do not have a right to share.</li>
        <li>You are responsible for the accuracy of information you submit to us.</li>
      </ul>

      <h2 className="text-xl font-semibold">3. J.A.N.E. license</h2>
      <p className="text-[var(--muted)]">
        Subject to these Terms, we grant you a limited, revocable, non exclusive, non transferable license to use J.A.N.E. for personal or internal business purposes. You may not reverse engineer, resell, or redistribute the extension or its components except where allowed by law.
      </p>

      <h2 className="text-xl font-semibold">4. Third party services</h2>
      <p className="text-[var(--muted)]">
        Our site and products may link to or rely on third party services such as model providers, analytics, payment processors, or form platforms. Your use of those services is governed by their own terms and policies. We are not responsible for third party services.
      </p>

      <h2 className="text-xl font-semibold">5. Intellectual property</h2>
      <p className="text-[var(--muted)]">
        We and our licensors own all rights in our site, code, logos, and content. Using our services does not give you ownership of any intellectual property in our services or the content you access. If you send us feedback, you grant us a royalty free, worldwide license to use it to improve our products.
      </p>

      <h2 className="text-xl font-semibold">6. No warranties</h2>
      <p className="text-[var(--muted)]">
        Services are provided as is and as available. To the fullest extent allowed by law, we disclaim all warranties including implied warranties of merchantability, fitness for a particular purpose, and non infringement. We do not promise uninterrupted or error free service.
      </p>

      <h2 className="text-xl font-semibold">7. Limitation of liability</h2>
      <p className="text-[var(--muted)]">
        To the fullest extent allowed by law, MuggleTech and its officers, employees, and agents will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits or revenues. Our total liability for any claim related to the services will not exceed one hundred US dollars.
      </p>

      <h2 className="text-xl font-semibold">8. Indemnity</h2>
      <p className="text-[var(--muted)]">
        You agree to defend and indemnify MuggleTech against claims, damages, and costs arising from your misuse of the services or violation of these Terms.
      </p>

      <h2 className="text-xl font-semibold">9. Termination</h2>
      <p className="text-[var(--muted)]">
        You may stop using our services at any time. We may suspend or end access if you violate these Terms or use the services in a way that creates risk. Sections that by their nature should survive will survive termination.
      </p>

      <h2 className="text-xl font-semibold">10. Changes</h2>
      <p className="text-[var(--muted)]">
        We may change these Terms. If changes are important, we will update the date at the top and post the new version here.
      </p>

      <h2 className="text-xl font-semibold">11. Governing law</h2>
      <p className="text-[var(--muted)]">
        These Terms are governed by the laws of the State of Michigan, United States, without regard to conflict of law rules. Courts located in Michigan will have exclusive jurisdiction.
      </p>

      <h2 className="text-xl font-semibold">12. Contact</h2>
      <p className="text-[var(--muted)]">
        Questions about these Terms can be sent through the contact form on our site or by phone at{" "}
        <a className="underline" href="tel:+16178938998">+1 617 893 8998</a>.
      </p>
    </section>
  );
}