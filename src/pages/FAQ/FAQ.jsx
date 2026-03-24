import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Container from "../../components/SharedUi/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Link } from "react-router";

const FaqItem = ({ question, answer, isOpen, onClick }) => (
    <div className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-100 bg-white'}`}>
        <button
            onClick={onClick}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        >
            <span className="font-bold text-slate-800">{question}</span>
            {isOpen ? <ChevronUp className="text-emerald-600" /> : <ChevronDown className="text-slate-400" />}
        </button>
        {isOpen && (
            <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-fade-in">
                {answer}
            </div>
        )}
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does the AI fraud detection work?",
            answer: "Risk Radar uses advanced machine learning algorithms to analyze transaction patterns, IP geolocation, and behavioral data in real-time to assign a risk score to every checkout session."
        },
        {
            question: "Is my financial data secure?",
            answer: "Absolutely. We use enterprise-grade 256-bit SSL encryption. We never store raw credit card information; all payment processing is handled by Stripe, a PCI Level 1 Service Provider."
        },
        {
            question: "Can I integrate Risk Radar with my existing website?",
            answer: "Yes, we provide a robust REST API and pre-built React hooks. Our technical team can help you get integrated in less than an hour."
        },
        {
            question: "What happens if a transaction is flagged?",
            answer: "Flagged transactions are moved to 'Review Required' status. You can manually approve them in your dashboard or set up automated rules to block high-risk scores immediately."
        }
    ];

    return (
        <section className="py-20 bg-slate-50/50">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <SectionHeader
                        subtitle="Common Questions"
                        title={
                            <span className="text-slate-900">
                                Everything you <br />
                                <span className="text-emerald-600">need to know.</span>
                            </span>
                        }
                    />

                    <div className="space-y-4 mt-12">
                        {faqs.map((faq, index) => (
                            <FaqItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-white border border-slate-100 rounded-3xl flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                                <HelpCircle size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Still have questions?</h4>
                                <p className="text-sm text-slate-500">We’re here to help you 24/7.</p>
                            </div>
                        </div>
                        <Link to='/contact-us'>
                            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                                Contact Support
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FAQ;