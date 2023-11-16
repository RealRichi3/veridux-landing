/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Col, Row } from "antd"
import { GoodIcon } from "../components/GoodIcon"
import { QouteIcon } from "../components/QouteIcon"
import { ToastContainer, toast } from "react-toast"
import { Footer } from "../components/Footer"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { SERVER_URL } from "../constants"

interface WaitListForm {
    name: string,
    email: string,
    interests: string[],
    other_interests: string,
    reg_type: 'vendor' | 'buyer'
}

interface Interests {
    vendor: {
        _id: string,
        type: 'vendor',
        value: string
    }[]
    buyer: {
        _id: string,
        type: 'buyer',
        value: string
    }[]
}

interface WaitListResponse {
    success: boolean,
    message: string,
    data: {
        interests: [
            Interests['vendor'][number] | Interests['buyer'][number]
        ]
    }
}

export const Home = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [waitlistForm, setWaitlistForm] = useState({} as WaitListForm)
    const [interests, setInterests] = useState({} as Interests)

    const scrollToRef = () => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const isFormValid = () => {
        // Check if all required fields are filled
        return (
            waitlistForm.name &&
            waitlistForm.email &&
            waitlistForm.reg_type &&
            waitlistForm.interests &&
            waitlistForm.interests.length > 0
        );
    };

    const updateForm = ({ key, value }: { key: keyof WaitListForm, value: string }) => {
        if (key === 'interests') {
            const interests_ = waitlistForm.interests || []
            if (interests_.includes(value)) {
                interests_.splice(interests_.indexOf(value), 1)
            } else {
                interests_.push(value)
            }
            return setWaitlistForm({ ...waitlistForm, interests: interests_ })
        }

        if (key === 'reg_type') {
            return setWaitlistForm({ ...waitlistForm, interests: [], [key]: value as 'buyer' | 'vendor' })
        }

        setWaitlistForm({ ...waitlistForm, [key]: value })
    }

    const joinWaitlist = () => {
        axios.post(`${SERVER_URL}/waitlist/join`, { ...waitlistForm, other_interests: [waitlistForm.other_interests], waitlist_interests: waitlistForm.interests }).then((res) => {
            toast.success(res.data.message, {})
            setWaitlistForm({ name: '', email: '' } as WaitListForm)
            setTimeout(() => { window.open('/') }, 1000)
        }).catch((err) => {
            toast.error(err.response.data.message)
        }).finally(() => setWaitlistForm({} as WaitListForm
        ))
    }

    useEffect(() => {
        axios.get<WaitListResponse>(`${SERVER_URL}/waitlist/interest`).then((res) => {
            const responseData = res.data.data
            const vendorsInterests = responseData.interests.filter((interest) => interest.type === 'vendor') as Interests['vendor']
            const buyersInterests = responseData.interests.filter((interest) => interest.type === 'buyer') as Interests['buyer']

            setInterests({ vendor: vendorsInterests, buyer: buyersInterests })
        })
    }, [])

    return (
        <div className="landingPage">
            <ToastContainer position="top-right" />
            <Header scrollIntoView={scrollToRef} />
            <div className="container">
                <Hero scrollIntoView={scrollToRef} origin={'home'} />
                <div className="why-choose-us">
                    <h2>Why choose our</h2>
                    <h2>platform?</h2>
                    <Row gutter={[32, 32]} style={{ margin: "35px" }}>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item" onClick={scrollToRef}>
                                <GoodIcon />
                                <span>
                                    <b>Suppliers:</b> Effortless Product Management
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item">
                                <GoodIcon />
                                <span>
                                    <b>For Users:</b> Access huge catalogue of products
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item">
                                <GoodIcon />
                                <span>
                                    <b>Suppliers:</b> Reach a wider Audience
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item">
                                <GoodIcon />
                                <span>
                                    <b>For Users:</b> Get discounts of purchases
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item">
                                <GoodIcon />
                                <span>
                                    <b>Suppliers:</b> Secure Payment Handling
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item">
                                <GoodIcon />
                                <span>
                                    <b>For Users:</b> Earn bonuses on referrals
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="what-they-say">
                    <h2>What They say About</h2>
                    <h2>Veridux</h2>
                    <div className="what-they-say_inner">
                        <Row justify={"space-between"} align={"middle"}>
                            <Col xs={24} md={12}>
                                <img src={"/girl.png"} alt="Girl" />
                            </Col>
                            <Col xs={24} md={10}>
                                <QouteIcon />
                                <div style={{ marginTop: "30px" }}>
                                    <p>"We love Veridux! Our</p>
                                    <p>designers were using it for their</p>
                                    <p>projects, so clients already knew</p>
                                    <p>what Landingfolio was and how</p>
                                    <p>to use it."</p>
                                </div>
                                <div className="reviewer">
                                    <small>
                                        <b>Jenny Wilson</b>
                                    </small>
                                    {/* <small style={{ color: "#52525B" }}>Co-Founder of</small>
                                    <TrackerCompanyIcon /> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="what-are-you-waiting-for" ref={ref}>
                    <Row align={"middle"}>
                        <Col xs={24} md={12}>
                            <h2>What are you waiting for</h2>
                            <h2 >Join the waitlist</h2>

                            <div style={{ marginTop: "2.5rem" }}>
                                <div className="waitlist-form">
                                    <input placeholder="Name" onChange={(e) => updateForm({ key: "name", value: e.target.value })} value={waitlistForm.name} />
                                    <input placeholder="Email" onChange={(e) => updateForm({ key: "email", value: e.target.value })} value={waitlistForm.email} />
                                    {/* Drop down of interest to pick from  */}
                                    <div className="regTypeArea">
                                        <p style={{ textAlign: 'left', width: "100%", fontSize: '18px', marginTop: 20 }}> Register as</p>
                                        <div className="radio">
                                            <label>
                                                Supplier
                                                <input
                                                    className="radio-button"
                                                    type="radio"
                                                    value="vendor"
                                                    checked={waitlistForm.reg_type === 'vendor'}
                                                    onChange={() => updateForm({ key: "reg_type", value: 'vendor' })}
                                                />
                                            </label>
                                            <label>
                                                Buyer
                                                <input
                                                    className="radio-button"
                                                    type="radio"
                                                    value="Buyer"
                                                    checked={waitlistForm.reg_type === 'buyer'}
                                                    onChange={() => updateForm({ key: "reg_type", value: 'buyer' })}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="interests">
                                        <label className="head"> Interests </label>
                                        {
                                            waitlistForm.reg_type &&
                                            interests[waitlistForm.reg_type].map((interest) => (
                                                <div className="interest" key={interest._id} onClick={() => updateForm({ key: 'interests', value: interest._id })}>
                                                    <label htmlFor={`interest_${interest._id}`}>{interest.value}</label>
                                                    <input
                                                        type="checkbox"
                                                        id={interest._id}
                                                        value={interest.value}
                                                        checked={waitlistForm.interests?.includes(interest._id) ? true : false}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <input placeholder="Other interests" onChange={(e) => updateForm({ key: 'other_interests', value: e.target.value })} />
                                </div>
                            </div>
                            <div ref={ref}>
                                <button
                                    className="btn-primary"
                                    style={{
                                        borderRadius: "47px",
                                        fontSize: "16px",
                                        marginTop: "50px",
                                        border: 0,
                                        background: !isFormValid() ? "#E5E5E5" : "#006fcf",
                                    }}
                                    disabled={!isFormValid()}
                                    onClick={joinWaitlist}
                                >
                                    Join now
                                </button>
                            </div>
                        </Col>
                        <Col xs={24} md={12} className="phone2">
                            <img src="/phone2.svg" alt="Veridux Mobile App" />
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}
