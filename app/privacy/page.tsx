import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BRAND_NAME, BRAND_COMPANY, BRAND_COPY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND_NAME}`,
  description: `Privacy Policy for ${BRAND_NAME} Pvt. Ltd. (A Unit of ${BRAND_COMPANY}). Learn how we collect, use, protect, and handle your personal data.`,
  openGraph: {
    title: `Privacy Policy | ${BRAND_NAME}`,
    description: `Official Privacy Policy of ${BRAND_NAME} Pvt. Ltd.`,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const contact = BRAND_COPY.contactDetails;
  const websiteUrl = "https://vernaurajewels.com";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#2C241B]">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-3xl lg:max-w-4xl mx-auto px-6 sm:px-10">

          {/* ─── PAGE HEADER (Clean, Centered, Classic Editorial) ─── */}
          <div className="text-center pb-12 sm:pb-16 border-b border-[#E8E2D5]">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#9E7B3B] mb-3 font-medium">
              Legal & Transparency
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[54px] font-normal tracking-tight text-[#1C1A17] leading-tight">
              Privacy Policy
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#6B6358] mt-3 font-light">
              <strong className="font-medium text-[#2C241B]">Vernaura Jewels</strong> &bull; A Unit of {BRAND_COMPANY}
            </p>
          </div>

          {/* ─── LEGAL BODY (Big Font, Effortless Readability, Simple Layout) ─── */}
          <div className="pt-12 sm:pt-16 space-y-10 sm:space-y-12 font-sans text-[16px] sm:text-[18px] text-[#3D372F] leading-[1.85] font-light">

            {/* Preamble */}
            <div className="space-y-5">
              <p>
                <strong className="font-medium text-[#1C1A17]">Vernaura Jewels</strong> (&ldquo;Vernaura Jewels,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy and security of your personal information. We handle personal data in accordance with applicable data protection and privacy laws in India.
              </p>
              <p>
                This Privacy Policy explains what personal information we collect when you visit or use our website, how we use and disclose that information, the choices available to you, and the measures we take to protect your personal data.
              </p>
              <p>
                We do not sell or trade your personally identifiable information. However, we may share your information with trusted third parties that help us operate our website, process payments, deliver products, provide customer support, and conduct our business, subject to appropriate confidentiality and data protection obligations.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <section className="space-y-5 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                1. Information We Collect
              </h2>

              <div className="space-y-4">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  1.1 Information You Provide Directly
                </h3>
                <p>
                  When you register on our website, place an order, contact customer support, or use our services, we may collect personal information such as:
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#4A433A]">
                  <li>Full name</li>
                  <li>Contact number</li>
                  <li>Email address</li>
                  <li>Billing and shipping address</li>
                  <li>Username and account credentials, where applicable</li>
                  <li>Order details and purchase history</li>
                  <li>Payment transaction details and payment status</li>
                  <li>PAN details or identification documents, where legally required or reasonably necessary for verification</li>
                  <li>Information you provide when submitting reviews, feedback, inquiries, or complaints</li>
                </ul>
                <p className="text-[15px] sm:text-[16px] text-[#6B6358] italic pt-1">
                  Payment card details are generally processed by our authorized payment service providers. We do not intend to store complete payment card details on our own systems unless lawfully permitted and appropriately secured.
                </p>
              </div>

              <div className="space-y-4 pt-3">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  1.2 Information Collected Automatically
                </h3>
                <p>
                  When you visit our website, certain technical and usage information may be collected automatically, including:
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#4A433A]">
                  <li>Internet Protocol (IP) address</li>
                  <li>Browser type and operating system</li>
                  <li>Device type and technical identifiers</li>
                  <li>Pages and links visited on our website</li>
                  <li>Date, time, and duration of visits</li>
                  <li>Referring website addresses</li>
                  <li>Website interaction and usage information</li>
                  <li>Standard server log information</li>
                  <li>Cookies and similar tracking technologies, where applicable</li>
                </ul>
                <p>
                  This information helps us maintain website security, understand visitor behaviour, improve performance, and enhance the shopping experience.
                </p>
              </div>

              <div className="space-y-4 pt-3">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  1.3 Information from Other Sources
                </h3>
                <p>
                  Where permitted by applicable law, we may receive information about you from payment service providers, delivery partners, fraud prevention services, publicly available sources, or third-party services that you choose to connect with our website.
                </p>
                <p>
                  We may combine such information with information you provide directly to us for legitimate business purposes, including order processing, verification, security, and customer service.
                </p>
              </div>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="space-y-5 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                2. How We Use Your Information
              </h2>
              <p>We may use the information collected for the following purposes:</p>

              <div className="space-y-3">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  2.1 Order Processing and Service Delivery
                </h3>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#4A433A]">
                  <li>To create and manage customer accounts.</li>
                  <li>To process orders and payments.</li>
                  <li>To arrange shipping and delivery.</li>
                  <li>To manage returns, exchanges, cancellations, and refunds.</li>
                  <li>To communicate order confirmations, dispatch updates, and delivery notifications.</li>
                  <li>To provide customer support and respond to inquiries.</li>
                </ul>
              </div>

              <div className="space-y-3 pt-3">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  2.2 Website Operation and Improvement
                </h3>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#4A433A]">
                  <li>To maintain and improve our website.</li>
                  <li>To personalize your shopping experience.</li>
                  <li>To understand customer preferences and product interests.</li>
                  <li>To identify technical issues and improve website functionality.</li>
                  <li>To develop new products, services, and features.</li>
                </ul>
              </div>

              <div className="space-y-3 pt-3">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  2.3 Marketing and Promotional Communications
                </h3>
                <p>
                  Where you have provided consent or where otherwise permitted by applicable law, we may use your contact information to send promotional offers, product updates, newsletters, announcements, and information about our products and services through email, SMS, telephone, or other permitted communication channels.
                </p>
                <p className="text-[15px] sm:text-[16px] text-[#6B6358] italic">
                  You may opt out of promotional communications by following the unsubscribe instructions in the communication or contacting us directly. Opting out of promotional messages will not prevent us from sending essential service-related communications, such as order or payment updates.
                </p>
              </div>

              <div className="space-y-3 pt-3">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  2.4 Analytics and Research
                </h3>
                <p>
                  We may analyze website usage and customer preferences to understand shopping patterns, improve our products and services, and prepare aggregated or anonymized statistics.
                </p>
                <p>
                  Where appropriate, aggregated or anonymized information may be shared with service providers, business partners, or other parties for legitimate business and analytical purposes.
                </p>
              </div>

              <div className="space-y-3 pt-3">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  2.5 Reviews and Customer Feedback
                </h3>
                <p>
                  If you submit a product review, testimonial, comment, or other content intended for public display, we may publish it on our website or use it in our marketing materials, subject to applicable law and any permissions required.
                </p>
                <p className="text-[15px] sm:text-[16px] text-[#6B6358] italic">
                  Please avoid including sensitive personal information in publicly visible reviews or comments.
                </p>
              </div>

              <div className="space-y-3 pt-3">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  2.6 Legal Compliance and Security
                </h3>
                <p>
                  We may process your information to comply with applicable laws, respond to lawful requests, verify transactions, prevent fraud, protect our rights, resolve disputes, and maintain the security of our website and customers.
                </p>
              </div>
            </section>

            {/* 3. Disclosure of Personal Information */}
            <section className="space-y-5 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                3. Disclosure of Personal Information
              </h2>
              <p>
                We may share your personal information with the following categories of recipients when necessary and permitted by law:
              </p>

              <div className="space-y-2">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  3.1 Service Providers
                </h3>
                <p>
                  We may engage third-party service providers for website hosting, maintenance, analytics, marketing, payment processing, shipping, delivery, customer support, and other business operations. These providers may access only the information reasonably necessary to perform their services and are expected to protect the information in accordance with applicable contractual and legal obligations.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  3.2 Payment and Delivery Partners
                </h3>
                <p>
                  We may share relevant information with payment gateways, banks, courier companies, logistics providers, and delivery partners to process transactions, verify payments, and deliver your orders.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  3.3 Legal and Regulatory Authorities
                </h3>
                <p>
                  We may disclose information where required by law, a valid legal process, a regulatory obligation, or a lawful request from a competent authority. We may also disclose information when reasonably necessary to investigate fraud, enforce our terms, protect our legal rights, or safeguard our customers and business.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  3.4 Business Transfers
                </h3>
                <p>
                  If our business undergoes a merger, restructuring, acquisition, sale, or transfer of assets, relevant information may be transferred as part of that transaction, subject to applicable law and appropriate safeguards.
                </p>
                <p className="text-[15px] sm:text-[16px] text-[#6B6358] italic">
                  We do not authorize third parties receiving personal information from us to use it for unrelated purposes without a lawful basis.
                </p>
              </div>
            </section>

            {/* 4. Cookies and Similar Technologies */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                4. Cookies and Similar Technologies
              </h2>
              <p>
                Our website may use cookies and similar technologies to improve functionality, remember preferences, maintain sessions, understand website traffic, and support relevant advertising where applicable.
              </p>
              <p>
                You may manage or disable cookies through your browser settings. However, disabling certain cookies may affect some website features or functionality.
              </p>
              <p>
                Where required by applicable law, we will obtain consent before using non-essential cookies or similar technologies.
              </p>
            </section>

            {/* 5. Your Choices and Privacy Rights */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                5. Your Choices and Privacy Rights
              </h2>
              <p>Subject to applicable law, you may have the right to:</p>
              <ul className="list-disc list-outside pl-6 space-y-2 text-[#4A433A]">
                <li>Request access to personal information associated with you.</li>
                <li>Request correction or updating of inaccurate information.</li>
                <li>Request deletion of personal information where legally applicable.</li>
                <li>Withdraw consent for processing where the processing is based on consent.</li>
                <li>Opt out of promotional communications.</li>
                <li>Raise concerns or submit complaints regarding the handling of your personal information.</li>
              </ul>
              <p>
                To exercise your rights, please contact us using the details provided in the Contact Information section below. We may need to verify your identity before processing your request.
              </p>
              <p className="text-[15px] sm:text-[16px] text-[#6B6358] italic">
                Certain information may need to be retained to meet legal, accounting, tax, fraud prevention, or other legitimate obligations.
              </p>
            </section>

            {/* 6. Data Security */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                6. Data Security
              </h2>
              <p>
                Protecting your personal information is important to us. We take reasonable technical, organizational, and administrative measures designed to protect personal data against unauthorized access, disclosure, alteration, loss, or misuse.
              </p>
              <p>
                These measures may include access controls, secure payment processing, system monitoring, and appropriate safeguards for our service providers.
              </p>
              <p>
                However, no website, electronic transmission, or data storage system can be guaranteed to be completely secure. While we take reasonable steps to protect your information, we cannot guarantee absolute security.
              </p>
              <p>
                You are responsible for keeping your account credentials confidential and notifying us promptly if you suspect unauthorized access to your account.
              </p>
            </section>

            {/* 7. Data Retention */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                7. Data Retention
              </h2>
              <p>
                We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, including order processing, customer service, dispute resolution, fraud prevention, and compliance with legal obligations.
              </p>
              <p>
                The applicable retention period may vary depending on the type of information and the purpose for which it was collected.
              </p>
              <p>
                When information is no longer required, we will take reasonable steps to delete it, anonymize it, or otherwise handle it in accordance with applicable law.
              </p>
            </section>

            {/* 8. Links to Third-Party Websites */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                8. Links to Third-Party Websites
              </h2>
              <p>
                Our website may contain links to third-party websites, payment services, social media platforms, or other external resources.
              </p>
              <p>
                Vernaura Jewels does not control and is not responsible for the privacy practices, security, or content of third-party websites.
              </p>
              <p>
                When you visit an external website, its own privacy policy and terms may apply. We encourage you to review those policies before providing personal information to third parties.
              </p>
            </section>

            {/* 9. Children's Privacy */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our website is intended for individuals who are legally eligible to enter into purchase transactions under applicable law. Individuals under 18 years of age should not independently place orders or enter into purchase contracts through our website.
              </p>
              <p>
                If a parent or legal guardian places an order on behalf of a minor, the parent or legal guardian is responsible for the transaction.
              </p>
              <p>
                We do not knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law. If you believe that personal information has been collected unlawfully, please contact us so that we can review the matter.
              </p>
            </section>

            {/* 10. Changes to This Privacy Policy */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                Vernaura Jewels may update this Privacy Policy from time to time to reflect changes in our business practices, website functionality, services, or applicable legal requirements.
              </p>
              <p>
                Any revised policy will be published on our website with an updated effective date. Where required by applicable law, we will provide notice of material changes or obtain any necessary consent.
              </p>
              <p>
                We encourage you to review this page periodically to stay informed about how we protect your personal information.
              </p>
            </section>

            {/* 11. Contact Information */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                11. Contact Information
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, you may contact us using the details below:
              </p>

              <div className="bg-[#F3EFE6] border border-[#E5DFD1] p-6 sm:p-8 space-y-3 rounded-sm my-6 text-[16px] sm:text-[17px]">
                <p>
                  <strong className="text-[#1C1A17]">Company Name:</strong> Vernaura Jewels (A Unit of {BRAND_COMPANY})
                </p>
                <p>
                  <strong className="text-[#1C1A17]">Website:</strong>{" "}
                  <a href={websiteUrl} className="text-[#9E7B3B] hover:underline">
                    {websiteUrl}
                  </a>
                </p>
                <p>
                  <strong className="text-[#1C1A17]">Registered Office:</strong>{" "}
                  {contact.address}
                </p>
                <p>
                  <strong className="text-[#1C1A17]">Email:</strong>{" "}
                  <a href={`mailto:${contact.email}`} className="text-[#9E7B3B] hover:underline">
                    {contact.email}
                  </a>
                </p>
                <p>
                  <strong className="text-[#1C1A17]">Contact Number:</strong>{" "}
                  <a href={`tel:${contact.phone}`} className="text-[#9E7B3B] hover:underline">
                    {contact.phone}
                  </a>
                </p>
              </div>
            </section>

            {/* Back to Home Button (Zaveri & Co Style) */}
            <div className="pt-12 sm:pt-16 pb-6 text-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-10 sm:px-14 py-3 sm:py-3.5 rounded-full border border-[#2C241B] text-[#2C241B] hover:bg-[#2C241B] hover:text-[#FAF9F5] transition-all duration-300 font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-medium"
              >
                Back to Home
              </Link>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
