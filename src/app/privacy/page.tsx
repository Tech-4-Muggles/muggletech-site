export const metadata = {
  title: "Privacy Policy — MuggleTech",
  description: "How MuggleTech collects, uses, and protects your data.",
};

export default function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
      <p className="text-sm text-[var(--muted)]">Last updated: March 2025</p>

      <p className="text-[var(--muted)]">
        MuggleTech LLC builds practical AI tools and a public website at muggletech.net. This policy explains what information we collect, how we use it, and what choices you have. By using our site, our Chrome extension J.A.N.E., or our forms, you agree to this policy.
      </p>

      <h2 className="text-xl font-semibold">Information we collect</h2>
      <ul className="list-disc pl-6 space-y-2 text-[var(--muted)]">
        <li>
          <strong>Site analytics.</strong> We use Plausible Analytics which is privacy friendly and cookie free. Plausible reports aggregated usage only. We do not see personal identities from Plausible.
        </li>
        <li>
          <strong>Contact or careers submissions.</strong> If you submit a form, we receive the fields you provide, for example name, email, message, and any links you choose to share. If you embed a Google Form, Google may collect additional technical data as described in their policy.
        </li>
        <li>
          <strong>Payments and donations.</strong> If you use our Buy Me a Coffee page, payment processing is handled by that provider. We receive your name or message if you choose to share it. We do not receive your full card details.
        </li>
        <li>
          <strong>Extension usage.</strong> J.A.N.E. runs locally in your browser. Content you view or analyze with the extension is processed on your device or by the model provider you configure in the extension. We do not use our marketing site to collect your resume content or job descriptions.
        </li>
        <li>
          <strong>Technical logs.</strong> Our hosting platform may log standard server events such as IP address and user agent for security and reliability.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">How we use information</h2>
      <ul className="list-disc pl-6 space-y-2 text-[var(--muted)]">
        <li>To operate and improve our site, products, and services</li>
        <li>To respond to inquiries and support requests</li>
        <li>To evaluate internship and hiring applications</li>
        <li>To understand usage in aggregate so we can build better features</li>
      </ul>

      <h2 className="text-xl font-semibold">Legal bases</h2>
      <p className="text-[var(--muted)]">
        Where required, we rely on consent, performance of a contract, legitimate interest, and compliance with law.
      </p>

      <h2 className="text-xl font-semibold">Sharing</h2>
      <p className="text-[var(--muted)]">
        We do not sell personal information. We share information with service providers that help us run the site and forms, for example our web host, Plausible, Google Forms, and Buy Me a Coffee. These providers process data on our behalf under their privacy terms.
      </p>

      <h2 className="text-xl font-semibold">Retention</h2>
      <p className="text-[var(--muted)]">
        We keep form submissions as long as needed for the purpose they were collected, then delete or anonymize them. Analytics data is retained in aggregate as provided by the analytics provider.
      </p>

      <h2 className="text-xl font-semibold">Security</h2>
      <p className="text-[var(--muted)]">
        We use reasonable administrative and technical safeguards. No method of transmission or storage is fully secure, so we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold">Your choices</h2>
      <ul className="list-disc pl-6 space-y-2 text-[var(--muted)]">
        <li>You can contact us to request access, correction, or deletion of your form submissions.</li>
        <li>You can choose not to submit forms or donations.</li>
        <li>Plausible is cookie free. If you use content blockers, page views may not be recorded.</li>
      </ul>

      <h2 className="text-xl font-semibold">Children</h2>
      <p className="text-[var(--muted)]">
        Our site and products are not intended for children under 13. We do not knowingly collect data from children under 13.
      </p>

      <h2 className="text-xl font-semibold">International transfers</h2>
      <p className="text-[var(--muted)]">
        Our providers may store or process data in other countries. By using our services you consent to the transfer of your information to those locations subject to applicable law.
      </p>

      <h2 className="text-xl font-semibold">Third party links</h2>
      <p className="text-[var(--muted)]">
        Our site links to external services, for example LinkedIn, Buy Me a Coffee, and the Chrome Web Store. Their practices are governed by their own policies.
      </p>

      <h2 className="text-xl font-semibold">Cookies</h2>
      <p className="text-[var(--muted)]">
        Plausible runs without cookies. Other embedded services like Google Forms may use cookies. See our <a className="underline" href="/cookies">Cookies page</a> for more details.
      </p>

      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="text-[var(--muted)]">
        If you have questions, email us or call us. Phone: <a className="underline" href="tel:+16178938998">+1 617 893 8998</a>. You can also use the contact form on the home page.
      </p>

      <h2 className="text-xl font-semibold">Changes to this policy</h2>
      <p className="text-[var(--muted)]">
        We may update this policy. If changes are important, we will update the date at the top and post the new version here.
      </p>
    </section>
  );
}