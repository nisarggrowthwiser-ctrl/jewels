import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BRAND_NAME, BRAND_COMPANY, BRAND_COPY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BRAND_NAME}`,
  description: `Terms and Conditions governing the use of the mobile application and website operated by ${BRAND_NAME} Pvt. Ltd. (A Unit of ${BRAND_COMPANY}). Review ordering, pricing, PAN requirements, 7-day return policy, and consumer rights.`,
  openGraph: {
    title: `Terms & Conditions | ${BRAND_NAME}`,
    description: `Official Terms & Conditions of ${BRAND_NAME} Pvt. Ltd.`,
    type: "website",
  },
};

export default function TermsPage() {
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
              Legal & Compliance
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[54px] font-normal tracking-tight text-[#1C1A17] leading-tight">
              Terms & Conditions
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
                These Terms and Conditions govern the use of the mobile application and website operated by{" "}
                <strong className="font-medium text-[#1C1A17]">Vernaura Jewels</strong> (hereinafter referred to as &ldquo;Vernaura Jewels,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a unit of <strong>{BRAND_COMPANY}</strong>.
              </p>
              <p>
                By accessing, browsing, registering on, or purchasing products through our Website, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.
              </p>
            </div>

            {/* 1. Your Obligations */}
            <section className="space-y-5 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                1. Your Obligations
              </h2>
              <div className="space-y-4">
                <p>
                  <strong>a)</strong> You must provide true, accurate, current, and complete information while registering on our Website or placing an order.
                </p>
                <p>
                  <strong>b)</strong> You are responsible for maintaining and promptly updating your registration details to ensure that the information remains accurate and complete. Vernaura Jewels reserves the right to verify the information provided by you and request additional documents or details where necessary for order processing, payment verification, fraud prevention, or delivery.
                </p>
                <p className="text-[15px] sm:text-[16px] text-[#6B6358] italic">
                  If any information provided by you is found to be false, inaccurate, incomplete, or misleading, we may suspend or terminate your account or refuse to process your order, subject to applicable law.
                </p>
                <p>
                  <strong>c)</strong> You must ensure that the shipping address, recipient&apos;s name, contact number, and other delivery details provided at checkout are correct. If delivery fails due to incorrect information supplied by you, any additional delivery or re-delivery charges may be payable by you, where applicable and permitted by law.
                </p>
                <p>
                  <strong>d)</strong> Before placing an order, you must carefully review the product description, specifications, jewellery details, price, applicable taxes, and other relevant information displayed on the Website.
                </p>
                <p>
                  <strong>e)</strong> Delivery timelines may be affected by circumstances beyond our reasonable control, including natural disasters, government restrictions, public emergencies, pandemics, transportation disruptions, and other unforeseen events. We will make reasonable efforts to communicate material delays.
                </p>
                <p>
                  <strong>f)</strong> Customers should review the product details, materials, dimensions, care instructions, and other relevant information before purchasing. Our products must be used and maintained in accordance with the instructions provided. Nothing in these Terms excludes any consumer rights or remedies available under applicable law.
                </p>
              </div>
            </section>

            {/* 2. Eligibility */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                2. Eligibility
              </h2>
              <p>
                <strong>a)</strong> Individuals under 18 years of age are not permitted to independently use the Website to enter into purchase contracts. Orders for minors must be placed by a parent or legal guardian.
              </p>
              <p>
                <strong>b)</strong> Users must be legally competent to enter into a binding contract under applicable Indian law.
              </p>
              <p>
                <strong>c)</strong> Customers accessing the Website from outside India are responsible for complying with applicable local laws. However, Vernaura Jewels currently accepts orders for delivery within India only.
              </p>
            </section>

            {/* 3. Pricing and Payment Terms */}
            <section className="space-y-5 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                3. Pricing and Payment Terms
              </h2>

              <div className="space-y-3">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  3.1 Domestic Orders
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>a)</strong> All product prices are displayed in Indian Rupees (INR), unless otherwise stated.
                  </p>
                  <p>
                    <strong>b)</strong> Prices are subject to change without prior notice. The price applicable to an order will be the price displayed at the time the order is placed, subject to confirmation and correction of genuine pricing errors in accordance with applicable law.
                  </p>
                  <p>
                    <strong>c)</strong> Applicable taxes, including CGST, SGST, or IGST, will be charged as required under Indian law. The applicable tax details will be displayed on the invoice.
                  </p>
                  <p>
                    <strong>d)</strong> Payments must be made through the payment methods made available on our Website. Orders may be processed after successful payment authorization or confirmation, as applicable.
                  </p>
                  <p>
                    <strong>e)</strong> If an international credit or debit card is permitted by our payment gateway for a domestic transaction, the transaction will be processed in INR. Currency conversion charges or other fees imposed by the card issuer or payment provider may apply.
                  </p>
                  <p>
                    <strong>f)</strong> We may request additional information or supporting documents where reasonably necessary to verify a transaction, subject to applicable law and our privacy policy.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  3.2 International Orders
                </h3>
                <p>
                  Vernaura Jewels currently accepts orders for delivery within India only. International shipping and delivery are not available at present.
                </p>
                <p>
                  Any future change to our international shipping arrangements will be communicated through our Website or other official communication channels.
                </p>
              </div>
            </section>

            {/* 4. PAN Card Requirements */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                4. PAN Card Requirements
              </h2>
              <p>
                <strong>a)</strong> Customers must provide their PAN details and supporting documentation wherever required under applicable law or our lawful verification procedures.
              </p>
              <p>
                <strong>b)</strong> For jewellery purchases exceeding <strong>₹2,00,000</strong>, customers may be required to provide a valid PAN card and any other legally required information or documentation.
              </p>
              <p>
                <strong>c)</strong> Where PAN verification is required, the customer must ensure that the billing name matches the name associated with the PAN details provided. A mismatch or failure to complete verification may result in additional verification, a delay in processing, or cancellation of the order where legally permissible.
              </p>
              <p>
                <strong>d)</strong> Customers must provide genuine and valid documents. Any collection, use, storage, or verification of PAN information will be carried out in accordance with applicable law and our privacy policy.
              </p>
            </section>

            {/* 5. Order Acceptance and Confirmation */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                5. Order Acceptance and Confirmation
              </h2>
              <p>
                <strong>a)</strong> All product listings on our Website constitute invitations to make an offer to purchase. An order placed by a customer constitutes an offer to purchase the selected product under these Terms and Conditions.
              </p>
              <p>
                <strong>b)</strong> Submission of an order or receipt of an automated order confirmation does not necessarily constitute final acceptance of the order.
              </p>
              <p>
                <strong>c)</strong> We reserve the right to accept, reject, or cancel an order, in whole or in part, for legitimate reasons, including product unavailability, genuine pricing or listing errors, payment verification issues, suspected fraudulent activity, regulatory restrictions, or other lawful reasons.
              </p>
              <p>
                <strong>d)</strong> If an order is rejected or cancelled after payment has been received, the applicable refund will be processed in accordance with our refund policy and applicable law.
              </p>
              <p>
                <strong>e)</strong> Where an order contains multiple products, individual products may be dispatched separately. Dispatch of a product may constitute acceptance of the offer for that product.
              </p>
              <p>
                <strong>f)</strong> We may contact you to obtain additional information required to process or verify your order.
              </p>
            </section>

            {/* 6. Order Cancellation */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                6. Order Cancellation
              </h2>
              <p>
                <strong>a)</strong> Customers should carefully review their order before completing the purchase.
              </p>
              <p>
                <strong>b)</strong> Once an order has been placed, customer-requested cancellation may be restricted depending on the order&apos;s processing, customization, and dispatch status. Any cancellation restrictions will be communicated through the applicable order terms and will remain subject to mandatory rights under applicable law.
              </p>
              <p>
                <strong>c)</strong> Vernaura Jewels reserves the right to cancel an order for legitimate reasons, including product unavailability, incorrect pricing, failed payment verification, suspected fraud, or legal and regulatory restrictions.
              </p>
              <p>
                <strong>d)</strong> Customers will be notified if an order is cancelled fully or partially. Where payment has already been collected, any applicable refund will be initiated in accordance with the refund policy.
              </p>
            </section>

            {/* 7. Order Restrictions */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                7. Order Restrictions
              </h2>
              <p>
                Vernaura Jewels reserves the right to impose reasonable restrictions on order quantities or transaction values to prevent fraud, comply with legal requirements, manage stock availability, and protect customers.
              </p>
              <p>
                Restrictions may apply to orders associated with the same customer account, payment instrument, billing address, or shipping address. Where an order is restricted or cancelled, the customer will be notified where reasonably practicable.
              </p>
            </section>

            {/* 8. Return Policy */}
            <section className="space-y-5 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                8. Return Policy
              </h2>
              <p>
                Vernaura Jewels aims to provide customers with a satisfactory shopping experience.
              </p>

              <div className="space-y-4">
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1A17] font-medium pt-1">
                  8.1 Seven-Day Return Policy for Domestic Orders
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>a)</strong> Eligible domestic orders may be returned within <strong>7 days from the date of delivery</strong> if the product is damaged, defective, incorrect, or otherwise qualifies for a return under the applicable product and consumer terms.
                  </p>
                  <p>
                    <strong>b)</strong> Products must be returned unused and in their original condition, with original packaging, tags, certificates, invoice, and accompanying accessories, wherever applicable.
                  </p>
                  <p>
                    <strong>c)</strong> Customers must contact our customer support team or visit an authorized showroom, if applicable, to initiate a return. The available return method and instructions will be communicated by our team.
                  </p>
                  <p>
                    <strong>d)</strong> Customers should report any visible damage, missing items, or incorrect products promptly and provide supporting photographs or other information reasonably required to assess the claim.
                  </p>
                  <p>
                    <strong>e)</strong> Return requests should be raised within 7 days of delivery. This policy does not limit any mandatory rights or remedies available to consumers under applicable law.
                  </p>
                  <p>
                    <strong>f)</strong> Certain products, including customized or personalized jewellery, may be subject to specific return conditions disclosed before purchase, subject to applicable law.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Refund Policy */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                9. Refund Policy
              </h2>
              <p>
                <strong>a)</strong> Approved refunds will be processed after the returned product has been received and inspected, where inspection is necessary.
              </p>
              <p>
                <strong>b)</strong> The returned product must satisfy the applicable return conditions. Refunds will not be denied solely because a customer cannot provide a particular document if alternative evidence is reasonably sufficient under applicable law.
              </p>
              <p>
                <strong>c)</strong> Refunds will generally be issued to the original payment method. If an alternative refund method is required, our customer support team will communicate the applicable process.
              </p>
              <p>
                <strong>d)</strong> Refund processing time may vary depending on the payment provider, bank, and inspection requirements. We will initiate approved refunds within a reasonable period and communicate any material delay.
              </p>
              <p>
                <strong>e)</strong> If a payment is deducted from the customer&apos;s account but the transaction fails or the order is not successfully confirmed, the amount will be refunded or reversed in accordance with the payment provider&apos;s process.
              </p>
              <p>
                <strong>f)</strong> Any refund eligibility, deductions, or processing conditions will be subject to applicable consumer protection laws.
              </p>
            </section>

            {/* 10. Fraudulent Transactions and Misuse */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                10. Fraudulent Transactions and Misuse
              </h2>
              <p>
                Vernaura Jewels reserves the right to investigate suspected fraudulent transactions, unauthorized use of payment instruments, identity misrepresentation, or other unlawful activity involving the Website.
              </p>
              <p>
                Where legally permissible, we may suspend or cancel suspicious orders, restrict access to accounts, recover legally recoverable losses, and initiate appropriate civil or criminal proceedings.
              </p>
              <p className="text-[15px] sm:text-[16px] text-[#6B6358] italic">
                Nothing in this clause authorizes the Company to impose charges or recover amounts except as permitted by applicable law.
              </p>
            </section>

            {/* 11. Disclaimer */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                11. Disclaimer
              </h2>
              <p>
                <strong>a)</strong> The Website and its content are provided on an &ldquo;as available&rdquo; basis, subject to applicable law. We make reasonable efforts to maintain accurate product information and reliable Website operations but do not guarantee uninterrupted or error-free access.
              </p>
              <p>
                <strong>b)</strong> To the extent permitted by law, we disclaim warranties that are not expressly provided by us or required by applicable law. Nothing in this clause excludes statutory warranties, consumer protections, or other mandatory legal rights.
              </p>
              <p>
                <strong>c)</strong> We make reasonable efforts to display jewellery colours, designs, sizes, materials, and other product details accurately. However, differences in screen settings, lighting, photography, or display technology may result in variations between displayed images and the actual product.
              </p>
              <p>
                <strong>d)</strong> Product packaging may vary from images shown on the Website, provided that the product supplied conforms to the applicable description and legal requirements.
              </p>
              <p>
                <strong>e)</strong> Product descriptions, prices, availability, and other Website information may be updated from time to time. Material errors will be addressed in accordance with applicable law.
              </p>
              <p>
                <strong>f)</strong> If any provision of this disclaimer is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.
              </p>
            </section>

            {/* 12. Limitation of Liability */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                12. Limitation of Liability
              </h2>
              <p>
                To the extent permitted by applicable law, Vernaura Jewels shall not be liable for indirect or consequential losses arising from the use of the Website or delays in delivery caused by circumstances beyond our reasonable control.
              </p>
              <p>
                Nothing in these Terms and Conditions excludes or limits liability where such exclusion or limitation is prohibited by law, including liability for fraud, wilful misconduct, or mandatory consumer remedies.
              </p>
            </section>

            {/* 13. Force Majeure */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                13. Force Majeure
              </h2>
              <p>
                Vernaura Jewels shall not be responsible for delays or failures in performing its obligations to the extent caused by events beyond its reasonable control, including natural disasters, fires, floods, war, civil unrest, strikes, government restrictions, public emergencies, pandemics, transport disruptions, or interruptions in essential services.
              </p>
              <p>
                We will make reasonable efforts to minimize the impact of such events and resume performance when reasonably possible.
              </p>
            </section>

            {/* 14. Suspension and Termination */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                14. Suspension and Termination
              </h2>
              <p>
                Vernaura Jewels may suspend or restrict access to the Website where reasonably necessary for security, fraud prevention, legal compliance, or a material breach of these Terms and Conditions.
              </p>
              <p>
                Where appropriate and legally required, we will provide notice and an opportunity to address the issue. Suspension or termination will not affect accrued rights, applicable refund obligations, or liabilities arising before termination.
              </p>
            </section>

            {/* 15. Privacy and Personal Information */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                15. Privacy and Personal Information
              </h2>
              <p>
                Personal information collected during registration, payment, order processing, PAN verification, and delivery will be handled in accordance with our Privacy Policy and applicable Indian data protection laws.
              </p>
              <p>
                Customers should review our Privacy Policy to understand how personal information is collected, used, stored, disclosed, and protected.
              </p>
            </section>

            {/* 16. Changes to These Terms and Conditions */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                16. Changes to These Terms and Conditions
              </h2>
              <p>
                Vernaura Jewels reserves the right to amend these Terms and Conditions from time to time.
              </p>
              <p>
                Updated terms will be published on the Website with an appropriate effective date. Changes will apply prospectively, subject to applicable law and any mandatory notice or consent requirements. Continued use of the Website after the revised terms take effect may constitute acceptance where legally valid.
              </p>
            </section>

            {/* 17. Governing Law and Jurisdiction */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                17. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India.
              </p>
              <p className="bg-[#F3EFE6] border border-[#E5DFD1] p-4 sm:p-5 rounded-sm">
                Subject to applicable consumer protection laws and the jurisdiction of any other competent authority or forum that cannot lawfully be excluded, courts of competent jurisdiction in <strong>Ahmedabad, Gujarat</strong>, shall have exclusive jurisdiction over disputes arising from these Terms and Conditions.
              </p>
            </section>

            {/* 18. Contact Information */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal tracking-normal pt-2">
                18. Contact Information
              </h2>
              <p>
                For questions, complaints, order-related concerns, or return and refund requests, please contact us using the details below:
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
                <p className="text-xs text-[#7A7264] pt-1">
                  Operating Hours: {contact.hours}
                </p>
              </div>
            </section>

            {/* Back to Home Button (Matching Zaveri & Co Style) */}
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
