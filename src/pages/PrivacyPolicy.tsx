import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ReactNode } from "react";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

const PrivacyPolicy = () => {
    return (
        <div className="faqs">
            <Header />
            <div className="container" style={{ paddingTop: '40px', height: '100%', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Privacy policy</h1>
                <div style={{ overflowY: 'auto', maxHeight: '1000px', marginBottom: '50px' }}>
                    <div className="privacy-policy-container">
                        <p className="privacy-policy-intro">
                            Welcome to VeriduxPay, an App provided by Veridux, where we prioritize the security and privacy of your personal information. This comprehensive Privacy Policy is designed to elucidate how we collect, employ, share, and safeguard your sensitive data when you engage with our mobile application.
                        </p>

                        <Section title="User Agreement" >
                            <p>By using our app, you explicitly indicate your acceptance and agreement with the terms stipulated in this Privacy Policy.</p>
                        </Section>

                        <Section title="Collection of Personal Information" >
                            <ul>
                                <li>Email: We gather your email address to facilitate effective communication.</li>
                                <li>Name: Your name is collected to personalize your interactions within the app.</li>
                                <li>Phone Numbers: Essential for account verification and communication.</li>
                                <li>Bank Verification Number (BVN): Collected for identity verification and robust fraud prevention measures.</li>
                                <li>Identification Documents: Specific documents are gathered to verify identity and fortify our fraud protection mechanisms.</li>
                            </ul>
                        </Section>

                        <Section title="Usage Data" >
                            <p>We may collect data on your interactions with our app, including usage patterns, preferences, and interactions.</p>
                        </Section>

                        <Section title="How We Use Your Information" >
                            <ul>
                                <li>Identity Verification: Ensuring the security and authenticity of your account.</li>
                                <li>Fraud Protection: Detecting and preventing fraudulent activities.</li>
                                <li>Communication: Sending crucial information, updates, and notifications.</li>
                                <li>App Improvement: Analyzing usage patterns to enhance our app's features and performance.</li>
                            </ul>
                        </Section>

                        <Section title="Data Security" >
                            <ul>
                                <li>Encryption: BVN is securely stored in encrypted forms in our database.</li>
                                <li>Secure Storage: Identification documents are safeguarded in secure cloud storage services.</li>
                                <li>Access Controls: Access to sensitive data is restricted to authorized personnel.</li>
                            </ul>
                        </Section>

                        <Section title="Sharing with External Providers" >
                            <p>Certain information, such as identification documents and BVN, may be shared with external providers solely for identity verification and fraud protection purposes.</p>
                        </Section>

                        <Section title="Data Retention" >
                            <p>We retain your data as long as your account remains active, including identification details essential for ongoing fraud detection efforts.</p>
                        </Section>

                        <Section title="User Consent and Opt-out" >
                            <p>By using our app, you explicitly consent to the collection and retention of your data for identity verification and fraud protection. Due to the nature of fraud prevention, certain identification details cannot be removed upon user request.</p>
                        </Section>

                        <Section title="Changes to This Privacy Policy" >
                            <p>We may update this Privacy Policy to reflect changes in our practices or for legal reasons. Significant changes will be communicated through the app or other designated channels.</p>
                        </Section>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

const Section = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <div style={{ marginTop: '30px', padding: '10px' }}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};


// const Section = ({ title, children }: { title: string, children: ReactNode }) => {
//     return (
//         <div style={{ marginTop: '10px' }}>
//             <h4>{title}</h4>
//             {children}
//         </div>
//     );
// };

export default PrivacyPolicy;