const TermsAndConditions: React.FC = () => {
    return (
        <div>
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
};

export default TermsAndConditions;

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
