const PrivacyPolicy: React.FC = () => {
  return (
    <div className="text-[#6A6B6C]">
      <header className="bg-[#EBF3FB] px-10 py-7 text-center">
        <h2 className="flex h-20 w-full items-center justify-center rounded-md bg-[#006FCF] text-white md:h-36 lg:h-[218px]">
          PRIVACY POLICY
        </h2>
      </header>
      <section
        aria-labelledby="privacy policy"
        className="mx-auto max-w-[1600px] bg-white p-5 md:p-10 lg:p-20"
      >
        <div className="">
          <h3 className="faq-header">Privacy Policy</h3>
          <p className="faq-text mb-5">
            Welcome to VeriduxPay, an App provided by Veridux, where we
            prioritize the security and privacy of your personal information.
            This comprehensive Privacy Policy is designed to elucidate how we
            collect, employ, share, and safeguard your sensitive data when you
            engage with our mobile application.
          </p>
        </div>
        <div className="">
          <div>
            <h3 className="faq-header">User Agreement</h3>
            <p className="faq-text">
              By using our app, you explicitly indicate your acceptance and
              agreement with the terms stipulated in this Privacy Policy.
            </p>
          </div>
          <div>
            <h3 className="faq-header">Collection of Personal Information</h3>
            <p className="faq-text">
              Email: We gather your email address to facilitate effective
              communication. Name: Your name is collected to personalize your
              interactions within the app. Phone Numbers: Essential for account
              verification and communication. Bank Verification Number (BVN):
              Collected for identity verification and robust fraud prevention
              measures. Identification Documents: Specific documents are
              gathered to verify identity and fortify our fraud protection
              mechanisms.
            </p>
          </div>
          <div>
            <h3 className="faq-header">Usage Data</h3>
            <p className="faq-text">
              We may collect data on your interactions with our app, including
              usage patterns, preferences, and interactions.
            </p>
          </div>
          <div>
            <h3 className="faq-header">How We Use Your Information</h3>
            <p className="faq-text">
              Identity Verification: Ensuring the security and authenticity of
              your account. Fraud Protection: Detecting and preventing
              fraudulent activities. Communication: Sending crucial information,
              updates, and notifications. App Improvement: Analyzing usage
              patterns to enhance our app's features and performance.ms
              stipulated in this Privacy Policy.
            </p>
          </div>
          <div>
            <h3 className="faq-header">Data Security</h3>
            <p className="faq-text">
              Encryption: BVN is securely stored in encrypted forms in our
              database. Secure Storage: Identification documents are safeguarded
              in secure cloud storage services. Access Controls: Access to
              sensitive data is restricted to authorized personnel.
            </p>
          </div>
          <div>
            <h3 className="faq-header">Sharing with External Providers</h3>
            <p className="faq-text">
              Certain information, such as identification documents and BVN, may
              be shared with external providers solely for identity verification
              and fraud protection purposes.
            </p>
          </div>
          <div>
            <h3 className="faq-header">Data Retention</h3>
            <p className="faq-text">
              We retain your data as long as your account remains active,
              including identification details essential for ongoing fraud
              detection efforts.
            </p>
          </div>

          <div>
            <h3 className="faq-header">User Consent and Opt-out</h3>
            <p className="faq-text">
              By using our app, you explicitly consent to the collection and
              retention of your data for identity verification and fraud
              protection. Due to the nature of fraud prevention, certain
              identification details cannot be removed upon user request.
            </p>
          </div>
          <div>
            <h3 className="faq-header">Changes to This Privacy Policy</h3>
            <p className="faq-text">
              We may update this Privacy Policy to reflect changes in our
              practices or for legal reasons. Significant changes will be
              communicated through the app or other designated channels.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="faq-header">Contact Us:</h3>
            <p className="faq-text">
              If you have any questions or concerns about our Privacy Policy or
              our data practices, please contact us at
              <a
                href="mailto:contact@veridux.com"
                className="text-[#006FcF] underline hover:no-underline"
              >
                {" "}
                contact@veridux.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
