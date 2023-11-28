import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ReactNode } from "react";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Button } from "antd";

const Terms = () => {
    return (
        <div className="faqs">
            <Header />
            <div className="container" style={{ paddingTop: '40px', height: '100%', maxWidth: '800px', margin: 'auto'}}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Terms and Condition</h1>
                <div style={{ overflowY: 'auto', maxHeight: '1000px', marginBottom: '50px' }}>
                    <div>
                        <Section title="1. Introduction">
                            <Subsection title="1.1. These terms and conditions">
                                <p>Govern your use of VeriduxPay ("the App"), provided by Veridux ("the Company").</p>
                                <p>By using the App, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the App.</p>
                            </Subsection>
                            <Subsection title="1.2. Veridux is a technology company">
                                <p>Veridux is a technology company specializing in the development and management of a robust technology platform. This platform empowers local service providers, referred to as 'Merchants,' to showcase their products and services on the VeriduxPay app. The App basically is for the purchase of airtime, data packages, flight bookings, hotel booking, payment of utility bills such as electricity and docoders etc. Moreover, VeriduxPay acts as an intermediary, facilitating the coordination of planned or immediate product deliveries within specified time frames.</p>
                            </Subsection>
                            <Subsection title="1.3. VeriduxPay as a versatile Technology">
                                <p>VeriduxPay also operates as a versatile Technology Platform for on-demand services facilitated through electronic means. Its core mission is to streamline the process for individuals seeking assistance with tasks, services, and in-person purchases from local merchants. </p>
                            </Subsection>
                            <Subsection title="1.4 VeriduxPay as an intermediary">
                                <p> In all scenarios, VeriduxPay serves exclusively as an intermediary. Its responsibility is confined to managing the app, which acts as a conduit for communication between Users, and Merchants. VeriduxPay assumes no liability for the products and services offered through the app or for the execution of any tasks or deliveries requested via the app.</p>
                            </Subsection>
                            <Subsection title="1.5. VeriduxPay as a technology platform">
                                <p> 1.5.Upon accessing the site and/or the app and creating a profile, all Users, explicitly acknowledge and consent to adhere to these General Terms, the Privacy Policy, and the Cookie Policy, all of which are readily available online. Users, and Merchants who do not agree with these General Terms and/or Policies are encouraged to refrain from using the platform.</p>
                            </Subsection>
                        </Section>

                        <Section title="2. Registration and Account">
                            <Subsection title="2.1. Usernames and Passwords">
                                <p>When registering on the app, Users are required to select a username and password...</p>
                            </Subsection>
                            <Subsection title="2.2. Registration Details">
                                <p>To complete their registration on the app, Users must furnish specific details...</p>
                            </Subsection>
                            <Subsection title="2.3. Accuracy of Information">
                                <p>Users affirm that all information pertaining to their identity and qualifications...</p>
                            </Subsection>
                            <Subsection title="2.4. Account Security">
                                <p>Users pledge not to disclose their account details or grant third parties access...</p>
                            </Subsection>
                            <Subsection title="2.5. Account Information">
                                <p>To use certain features of the App, you may need to register an account...</p>
                            </Subsection>
                            <Subsection title="2.6. Unauthorized Use">
                                <p>User pledges to notify VeriduxPay immediately of any unauthorized use of its account...</p>
                            </Subsection>
                        </Section>


                        <Section title="3. Orders and Payments">
                            <Subsection title="3.1. Placing Orders">
                                <p>VeriduxPay, as a versatile Technology Platform, enables duly registered Users on the app to place various types of orders...</p>
                            </Subsection>
                            <Subsection title="3.2. Payment Agreement">
                                <p>By placing an order through the App, the User agrees to pay the specified price for the product or service ordered. Prices are subject to change without notice.</p>
                            </Subsection>
                            <Subsection title="3.3. Payment Methods">
                                <p>We accept payment methods as specified on the App. Payment information is processed securely, and we do not store payment details.</p>
                            </Subsection>
                        </Section>

                        <Section title="4. Delivery and Returns">
                            <Subsection title="4.1. Delivery Information">
                                <p>Delivery times and fees are specified on the App and may vary based on your location and usage.</p>
                            </Subsection>
                            <Subsection title="4.2. Dispute Resolution">
                                <p>In the event of a dispute, VeriduxPay may provide the first line of support and may reimburse the User if this is deemed appropriate...</p>
                            </Subsection>
                            <Subsection title="4.3. Refund Policy">
                                <p>Notwithstanding the above, VeriduxPay shall not be obliged to implement any refund due to defects on the Merchant’s products and services...</p>
                            </Subsection>
                        </Section>

                        <Section title="5. Privacy and Data Security">
                            <Subsection title="5.1. VeriduxPay Privacy Policy">
                                <p>At VeriduxPay, we believe in transparency and safeguarding User privacy...</p>
                            </Subsection>
                        </Section>

                        <Section title="6. User Conduct">
                            <Subsection title="6.1. Lawful Use">
                                <p>The User agrees not to use the App for any unlawful or prohibited purpose.</p>
                            </Subsection>
                            <Subsection title="6.2. Prohibited Activities">
                                <p>User must not transmit any harmful code, engage in hacking, or disrupt the App's functionality.</p>
                            </Subsection>
                        </Section>

                        <Section title="7. Intellectual Property">
                            <Subsection title="7.1. Ownership">
                                <p>All content on the App, including text, images, logos, and trademarks, are the intellectual property of VeriduxPay...</p>
                            </Subsection>
                            <Subsection title="7.2. Use Restrictions">
                                <p>User or any other party may not use, reproduce, or distribute VeriduxPay content without our written permission.</p>
                            </Subsection>
                        </Section>

                        <Section title="8. Termination">
                            <p>VeriduxPay reserves the right to terminate or suspend User account or access to the App at its discretion, with or without cause.</p>
                        </Section>

                        <Section title="9. Disclaimers and Limitation of Liability">
                            <Subsection title="9.1. Warranty">
                                <p>The App is provided "as is" without any warranty or guarantee. VeriduxPay does not guarantee that the App will be error-free or uninterrupted.</p>
                            </Subsection>
                            <Subsection title="9.2. Limitation of Liability">
                                <p>To the fullest extent permitted by law, VeriduxPay shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                            </Subsection>
                        </Section>

                        <Section title="10. Governing Law and Jurisdiction">
                            <Subsection title="10.1. Applicability of Laws">
                                <p>These Terms shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the Nigerian courts.</p>
                            </Subsection>
                        </Section>

                        <Section title="11. Changes to Terms">
                            <Subsection title="11.1. Modification of Terms">
                                <p>VeriduxPay reserves the right to change, modify, or update these Terms at any time. Changes will be posted on the App, and it is the User’s responsibility to review these Terms periodically.</p>
                            </Subsection>
                        </Section>

                        <Section title="12. Severability">
                            <Subsection title="12.1. Invalid Clauses">
                                <p>If any of the clauses of these General Terms are found to be voidable or void by operation of law, such clause(s) shall be deemed not to have been included...</p>
                            </Subsection>
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
        <div style={{ marginTop: '30px' }}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

const Subsection = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <div style={{ marginTop: '10px' }}>
            <h4>{title}</h4>
            {children}
        </div>
    );
};

export default Terms;