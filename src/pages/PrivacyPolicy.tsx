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
          <h3 className="text-3xl text-[#006FCF] mb-10">Privacy Policy</h3>
          <p className="faq-text mb-5">
            Welcome to Veridux's Privacy Policy. This document outlines how
            Veridux ("we", "us", or "our") collects, uses, discloses, and
            protects the information you provide when you visit our website or
            use our services.
          </p>
        </div>
        <div className="">
          <div>
            <h3 className="faq-header">1. Information We Collect:</h3>
            <p className="">
              We collect various types of information when you interact with our
              website or use our services
            </p>
            <div className="faq-text">
              <p className="my-5">a. Personal Information:</p>
              <ul className="list-inside list-disc ml-5">
                When you register an account, place an order, or interact with
                our website, we may collect personal information such as:
                <li>Your name</li>
                <li>Email address</li>
                <li>Postal address</li>
                <li>Phone number</li>
                <li>
                  Payment information (credit card details, billing address)
                </li>
              </ul>
              <p>
                We collect this information to provide you with the services you
                request, process your orders, communicate with you, and improve
                our services
              </p>
            </div>
            <div className="faq-text my-5">
              <p className="mb-5">b. Usage Information:</p>
              {/* <p className="mb-0">When you register an account, place an order, or interact with our website, we may collect personal information such as:</p> */}
              <ul className="list-inside list-disc ml-5">
                We automatically collect certain information about your
                interactions with our website and services, including:
                <li>IP address</li>
                <li>Browser Type</li>
                <li>Device Information</li>
                <li>Pages visited</li>
                <li>Clickstream data</li>
                <li>Date and time of visits</li>
              </ul>
              <p>
                We use this information to analyze trends, administer our
                website, track user movements, and gather demographic
                information for aggregate use. This helps us improve the
                functionality and performance of your website and services.
              </p>
            </div>

            <div className="faq-text mb-10">
              <p className="my-5">c. Cookies and Similar Technologies:</p>
              <p>
                We may use cookies, web beacons, and similar technologies to
                collect information about your interactions with our website.
                Cookies are small text files stored on your device that help us
                recognize you and customize your experience. You can control
                cookies through your browser settings, but disabling cookies may
                limit certain features of our website
              </p>
            </div>
          </div>

          <div className="faq-text mb-10">
            <h3 className="faq-header">2. How We Use Your Information:</h3>
            <p className="faq-text mb-5">
              We use the information we collect for various purposes including:
            </p>
            <ul className="list-inside list-disc ml-5">
              <li>Providing and managing our services</li>
              <li>Processing orders and transactions</li>
              <li>
                Communicating with you about your account, orders, and
                promotions.
              </li>
              <li>Customizing and improving our website and services</li>
              <li>Analyzing usage trends and preferences</li>
              <li>Preventing fraudulent activity and ensuring security</li>
            </ul>
          </div>

          <div className="faq-text mb-10">
            <h3 className="faq-header">
              3. Information Sharing and Disclosure:
            </h3>
            <p className="faq-text mb-5">
              We may share your information with third parties under the
              following circumstances:
            </p>
            <ul className="list-inside list-disc ml-5">
              <li>
                Service Providers: We may share your information with trusted
                third-party service providers who assist us in providing and
                improving our services. These service providers are
                contractually obligated to use your information only for the
                purposes of providing services to us.
              </li>
              <li>
                Legal Requirements: We may disclose your information if required
                to do so by law or in response to valid legal requests, such as
                subpoenas, court orders, or legal process.
              </li>
              <li>
                Business Transfers: In the event of a merger, acquisition, or
                sale of all or a portion of our assets, your information may be
                transferred as part of the transaction. We will notify you of
                any such transfer and any changes to our privacy practices.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="faq-header">4. Data Security:</h3>
            <p className="faq-text">
              We take reasonable measures to protect the security of your
              personal information and prevent unauthorized access, disclosure,
              alteration, or destruction. We use encryption, firewalls, and
              other security technologies to safeguard your data. However, no
              method of transmission over the internet or electronic storage is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="faq-header">5. Your Privacy Choices:</h3>
            <p className="faq-text">
              You have the right to access, update, or delete your personal
              information at any time. You may also opt-out of receiving
              promotional communications from us by following the instructions
              provided in the communication or by contacting us directly.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="faq-header">6. Children's Privacy:</h3>
            <p className="faq-text">
              Our website and services are not intended for children under the
              age of 13. We do not knowingly collect personal information from
              children under the age of 13. If you believe we have collected
              personal information from a child under the age of 13, please
              contact us immediately.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="faq-header">7. Updates to this Privacy Policy:</h3>
            <p className="faq-text">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We will notify you
              of any material changes by posting the updated policy on our
              website. We encourage you to review this Privacy Policy
              periodically for the latest information on our privacy practices.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="faq-header">8. Contact Us:</h3>
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
