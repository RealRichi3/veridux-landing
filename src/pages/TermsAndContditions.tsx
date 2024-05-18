const TermsAndConditions: React.FC = () => {
    return (
        <div>
<<<<<<< HEAD
            <header className="bg-[#EBF3FB] px-10 py-7 text-center">
                <h2 className="flex h-20 w-full items-center justify-center rounded-md bg-[#006FCF] text-white md:h-36 lg:h-[218px]">
                    TERMS & CONDITIONS
                </h2>
            </header>
            <section
                aria-labelledby="terms and conditions"
                className="bg-white p-5 md:p-10 lg:p-20"
            >
                <div>
                    <h3 className="text-3xl text-[#006FCF] mb-5">
                        Veridux Terms and Conditions
                    </h3>
                    <p className="text-[#6A6B6C] faq-text mb-5">
                        Welcome to Veridux! These Terms and Conditions ("Terms") govern your
                        use of the Veridux website ("Site") and services ("Services"). By
                        accessing or using the Site or Services, you agree to be bound by
                        these Terms. Please read them carefully before accessing or using
                        the Site or Services.
                    </p>
                </div>
                {termsAndConditions.map((condition, index) => (
                    <div className="mb-6">
                        <h3 className="mb-4 text-[#006FCF] faq-header">
                            {index + 1}. {condition.title}:
                        </h3>
                        <p className="text-[#6A6B6C] faq-text">{condition.paragraph}</p>
                    </div>
                ))}
            </section>
        </div>
    );
=======
          <h3 className="mb-5 text-2xl md:text-3xl text-[#006FCF]">
            Veridux Terms and Conditions
          </h3>
          <p className="faq-text mb-5 text-[#6A6B6C]">
            Welcome to Veridux! These Terms and Conditions ("Terms") govern your
            use of the Veridux website ("Site") and services ("Services"). By
            accessing or using the Site or Services, you agree to be bound by
            these Terms. Please read them carefully before accessing or using
            the Site or Services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold tc-header">1. Introduction</h2>

          <h3 className="text-xl font-bold tc-subheader">1.1. These terms and conditions</h3>
          <p className="tc-paragraph">
            Govern your use of VeriduxPay ("the App"), provided by Veridux ("the
            Company"). By using the App, you agree to be bound by these Terms.
            If you do not agree with these Terms, please do not use the App.
          </p>
          <h3 className="text-xl font-bold tc-subheader">
            1.2. Veridux is a technology company
          </h3>
          <p className="tc-paragraph">
            Veridux is a technology company specializing in the development and
            management of a robust technology platform. This platform empowers
            local service providers, referred to as 'Merchants,' to showcase
            their products and services on the VeriduxPay app. The App basically
            is for the purchase of airtime, data packages, flight bookings,
            hotel booking, payment of utility bills such as electricity and
            docoders etc. Moreover, VeriduxPay acts as an intermediary,
            facilitating the coordination of planned or immediate product
            deliveries within specified time frames.
          </p>
          <h3 className="text-xl font-bold tc-subheader">
            1.3. VeruduxPay as a versatile Technology
          </h3>
          <p className="tc-paragraph">
            VeriduxPay also operates as a versatile Technology Platform for
            on-demand services facilitated through electronic means. Its core
            mission is to streamline the process for individuals seeking
            assistance with tasks, services, and in-person purchases from local
            merchants.
          </p>
          <h3 className="text-xl font-bold tc-subheader">
            1.4. VeriduxPay as an intermediary
          </h3>
          <p className="tc-paragraph">
            In all scenarios, VeriduxPay serves exclusively as an intermediary.
            Its responsibility is confined to managing the app, which acts as a
            conduit for communication between Users, and Merchants. VeriduxPay
            assumes no liability for the products and services offered through
            the app or for the execution of any tasks or deliveries requested
            via the app.
          </p>
          <h3 className="text-xl font-bold tc-subheader">
            1.5. VeriduxPay as a technology platform
          </h3>
          <p className="tc-paragraph">
            Upon accessing the site and/or the app and creating a profile, all
            Users, explicitly acknowledge and consent to adhere to these General
            Terms, the Privacy Policy, and the Cookie Policy, all of which are
            readily available online. Users, and Merchants who do not agree with
            these General Terms and/or Policies are encouraged to refrain from
            using the platform.
          </p>
        </div>

        <div>
          <h2 className="tc-header">2. Registration and Account</h2>

          <h3 className="text-xl font-bold tc-subheader">2.1. Usernames and Passwords</h3>
          <p className="tc-paragraph">
            When registering on the app, Users are required to select a username
            and password. Both the username and password are strictly
            confidential, personal, and non-transferable. To enhance account
            security, VeriduxPay strongly advises Users against using the same
            login credentials as those used on other platforms. However, it's
            important to note that VeriduxPay cannot guarantee the absolute
            security of user accounts or profiles.
          </p>
          <h3 className="text-xl font-bold tc-subheader">2.2. Registration Details</h3>
          <p className="tc-paragraph">
            To complete their registration on the app, Users must furnish
            specific details, including a username, email address, telephone
            number, and bank card information, among others. Once the
            registration process is finalized, all Users gain access to, and the
            ability to modify, their profiles as they see fit. VeriduxPay does
            not retain users' payment data, as this data will be processed and
            stored by the designated payment service provider, in accordance
            with the information provided in these General Terms and the Privacy
            Policy.
          </p>
          <h3 className="text-xl font-bold tc-subheader">2.3. Accuracy Information</h3>
          <p className="tc-paragraph">
            Users affirm that all information pertaining to their identity and
            qualifications submitted to VeriduxPay through the app's
            registration forms is true, precise, and complete. Furthermore,
            Users commit to keeping their information current and up-to-date. In
            the event that a User provides false, inaccurate, or incomplete
            information, or if VeriduxPay has justifiable grounds to question
            the truth, accuracy, or integrity of the information, VeriduxPay
            reserves the right to deny the User access to the app, its content,
            and services, both presently and in the future.
          </p>
          <h3 className="text-xl font-bold tc-subheader">2.4. Account Security</h3>
          <p className="tc-paragraph">
            Users pledge not to disclose their account details or grant third
            parties access to their account. Users bear sole responsibility for
            any use of their account details or services on the site by third
            parties, including any statements or content entered into the app,
            as well as any other actions conducted under their username and
            password. VeriduxPay cannot validate the identity of registered
            Users, and thus, it cannot be held liable for the unauthorized use
            of a registered User's identity by unregistered third parties. Users
            are required to promptly notify VeriduxPay, using the communication
            channels provided by VeriduxPay, in the event their login
            credentials are stolen, disclosed, or lost.
          </p>
          <h3 className="text-xl font-bold tc-subheader">2.5. Account Information</h3>
          <p className="tc-paragraph">
            To use certain features of the App, you may need to register an
            account. You agree to provide accurate and up-to-date information
            during the registration process and to keep your account information
            current.
          </p>
          <h3 className="text-xl font-bold tc-subheader">2.6. Unauthorized Use</h3>
          <p className="tc-paragraph">
            User pledges to notify VeriduxPay immediately of any unauthorized
            use of its account.
          </p>
        </div>

        <div>
          <h2 className="tc-header">3. Orders and Payments</h2>

          <h3 className="text-xl font-bold tc-subheader">3.1. Placing Orders </h3>
          <p className="tc-paragraph">
            VeriduxPay, as a versatile Technology Platform, enables duly
            registered Users on the app to place various types of orders.
            Through the app, Users can purchase products and/or services
            directly from the Merchants.
          </p>
          <h3 className="text-xl font-bold tc-subheader">3.2. Payment Agreement</h3>
          <p className="tc-paragraph">
            By placing an order through the App, the User agrees to pay the
            specified price for the product or service ordered. Prices are
            subject to change without notice.
          </p>
          <h3 className="text-xl font-bold tc-subheader">3.3. Payment Methods</h3>
          <p className="tc-paragraph">
            We accept payment methods as specified on the App. Payment
            information is processed securely, and we do not store payment
            details.
          </p>
        </div>

        <div>
          <h2 className="tc-header">4. Delivery and Returns</h2>

          <h3 className="text-xl font-bold tc-subheader">4.1. Delivery Information </h3>
          <p className="tc-paragraph">
            Delivery times and fees are specified on the App and may vary based
            on your location and usage.
          </p>
          <h3 className="text-xl font-bold tc-subheader">4.2. Dispute Resolution</h3>
          <p className="tc-paragraph">
            In the event of a dispute, VeriduxPay may provide the first line of
            support and may reimburse the User if this is deemed appropriate. In
            case VeriduxPay becomes aware that the User who is requesting a
            refund of an Order, has made a fraudulent use of the APP, this
            request will be immediately rejected.
          </p>
          <h3 className="text-xl font-bold tc-subheader">4.3. Refund Policy</h3>
          <p className="tc-paragraph">
            Notwithstanding the above, VeriduxPay shall not be obliged to
            implement any refund due to defects on the Merchant’s products and
            services. Further, any refund done by VeriduxPay due its high
            standards in Users’ satisfaction, shall not be considered as a
            waiver of this exclusion of liability which is inherent to
            VeriduxPay’s condition of a mere intermediary. Additionally, any
            refund for unperformed services as well as its corresponding refund
            shall be managed by the User directly with the Merchant.
          </p>
        </div>

        <div>
          <h2 className="tc-header">5. Privacy and Data Security</h2>

          <h3 className="text-xl font-bold tc-subheader">5.1. VeriduxPay Privacy Policy </h3>
          <p className="tc-paragraph">
            At VeriduxPay, we believe in transparency and safeguarding User
            privacy. VeriduxPay Privacy Policy is designed to provide a
            comprehensive understanding of how VeriduxPay gather, employ, and
            secure User personal information. When User choose to use the
            VeriduxPay App, it signifies User’s voluntary agreement to adhere to
            and abide by the principles and regulations outlined in VeriduxPay
            Privacy Policy. User commitment to this policy ensures that the User
            personal data is handled with care and in accordance with the User
            expectations. User must not disclose personal information to third
            parties.
          </p>
        </div>

        <div>
          <h2 className="tc-header">6. User Conduct</h2>

          <h3 className="text-xl font-bold tc-subheader">6.1. Lawful Use </h3>
          <p className="tc-paragraph">
            The User agrees not to use the App for any unlawful or prohibited
            purpose.
          </p>

          <h3 className="text-xl font-bold tc-subheader">6.2. Prohibited Activities </h3>
          <p className="tc-paragraph">
            User must not transmit any harmful code, engage in hacking, or
            disrupt the App's functionality.
          </p>
        </div>

        <div>
          <h2 className="tc-header">7. Intellectual Property</h2>

          <h3 className="text-xl font-bold tc-subheader">7.1. Ownership </h3>
          <p className="tc-paragraph">
            All content on the App, including text, images, logos, and
            trademarks, are the intellectual property of the VeriduxPay and are
            protected by applicable copyright and trademark laws.
          </p>

          <h3 className="text-xl font-bold tc-subheader">7.2. Use Restrictions </h3>
          <p className="tc-paragraph">
            User or any other party may not use, reproduce, or distribute
            VeriduxPay content without our written permission.
          </p>
        </div>

        <div>
          <h2 className="tc-header">8. Termination</h2>

          <p className="tc-paragraph">
            VeriduxPay reserves the right to terminate or suspend User account
            or access to the App at its discretion, with or without cause.
          </p>
        </div>

        <div>
          <h2 className="tc-header">
            9. Disclaimers and Limitation of Liability
          </h2>

          <h3 className="text-xl font-bold tc-subheader">9.1. Warranty </h3>
          <p className="tc-paragraph">
            The App is provided "as is" without any warranty or guarantee.
            VeriduxPay does not guarantee that the App will be error-free or
            uninterrupted.
          </p>

          <h3 className="text-xl font-bold tc-subheader">9.2. Limitation of Liability </h3>
          <p className="tc-paragraph">
            To the fullest extent permitted by law, VeriduxPay shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages.
          </p>
        </div>

        <div>
          <h2 className="tc-header">
            10. Governing Law and Jurisdiction
          </h2>

          <h3 className="text-xl font-bold tc-subheader">10.1. Applicability of Laws </h3>
          <p className="tc-paragraph">
            These Terms shall be governed by and construed in accordance with
            the laws of Nigeria. Any disputes arising from these Terms shall be
            subject to the exclusive jurisdiction of the Nigerian courts.
          </p>
        </div>

        <div>
          <h2 className="tc-header">11. Changes to Terms</h2>

          <h3 className="text-xl font-bold tc-subheader">11.1. Modification of Terms </h3>
          <p className="tc-paragraph">
            VeriduxPay reserves the right to change, modify, or update these
            Terms at any time. Changes will be posted on the App, and it is the
            User’s responsibility to review these Terms periodically.
          </p>
        </div>

        <div>
          <h2 className="tc-header">12. Severability</h2>

          <h3 className="text-xl font-bold tc-subheader">12.1. Invalid Clauses </h3>
          <p className="tc-paragraph">
            If any of the clauses of these General Terms are found to be
            voidable or void by operation of law, such clause(s) shall be deemed
            not to have been included. 12.1.Such declaration of nullity will not
            cause the other clauses to be void, and these shall remain valid and
            effective between the Parties.
          </p>
        </div>
      </section>
    </div>
  );
>>>>>>> emeke-branch
};

export default TermsAndConditions;

<<<<<<< HEAD
const termsAndConditions = [
    {
        title: "Acceptance of Terms",
        paragraph:
            "By accessing or using the Site or Services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with these Terms, you may not access or use the Site or Services.",
    },
    {
        title: "Use of Site and Services",
        paragraph:
            "You may use the Site and Services for lawful purposes only. You may not use the Site or Services for any illegal or unauthorized purpose. You agree to comply with all applicable laws and regulations when using the Site and Services.",
    },
    {
        title: "Account Registration",
        paragraph:
            "In order to access certain features of the Site or Services, you may be required to register for an account. You agree to provide accurate and complete information when registering for an account and to keep your account information up to date.",
    },
    {
        title: "User Content",
        paragraph:
            'You are solely responsible for any content you upload, submit, or display on the Site or through the Services ("User Content"). You retain ownership of your User Content, but by uploading, submitting, or displaying User Content on the Site or through the Services, you grant Veridux a non-exclusive, royalty-free, worldwide, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content in any form, media, or technology.',
    },
    {
        title: "Intellectual Property Rights",
        paragraph:
            "The Site and Services, including all content, features, and functionality, are owned by Veridux or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of the Site or Services without our prior written consent.",
    },
    {
        title: "Privacy",
        paragraph:
            "Your privacy is important to us. Our Privacy Policy governs our collection, use, and disclosure of your personal information. By using the Site or Services, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy",
    },
    {
        title: "Limitation of Liability",
        paragraph:
            "In no event shall Veridux, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Site or Services; (ii) any conduct or content of any third party on the Site or Services; or (iii) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.",
    },
    {
        title: "Indemnification",
        paragraph:
            "You agree to indemnify and hold Veridux, its officers, directors, employees, and agents harmless from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from or relating to your violation of these Terms or your use of the Site or Services.",
    },
    {
        title: "Governing Law",
        paragraph:
            "These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in [Jurisdiction] for the resolution of any disputes arising out of or related to these Terms or your use of the Site or Services.",
    },
    {
        title: "Changes to Terms",
        paragraph:
            "We reserve the right to modify or replace these Terms at any time without prior notice. Any changes to these Terms will be effective immediately upon posting. Your continued use of the Site or Services after the posting of any changes to these Terms constitutes acceptance of those changes.",
    },
    {
        title: "Contact Us",
        paragraph: `If you have any questions or concerns about these Terms, please contact us at ${(
            <a
                href="mailto:contact@veridux.com"
                className="font-semibold text-[#006FCF] underline hover:no-underline"
            >
                contact@veridux.com
            </a>
        )}`,
    },
];
=======
>>>>>>> emeke-branch
