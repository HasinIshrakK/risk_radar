import React from "react";
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Container from "../../components/SharedUi/Container";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactUs = () => {
  return (
    <section>
      <Container>
        <SectionHeader
          subtitle="Contact Our Team"
          title={
            <span className="text-slate-900">
              Let’s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
                scale your
              </span>{" "}
              <br />
              financial{" "}
              <span className="underline decoration-emerald-400/50 italic">
                intelligence.
              </span>
            </span>
          }
          titlePera="Have questions about our AI-driven portfoli management or API integrations? Were here to help."
        />

        {/* <div className="max-w-7xl mx-auto py-14  md:py-20"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Connect with us</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-emerald-100 text-emerald-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Support</h3>
                    <p className="text-slate-500">
                      Expect a response within 2 hours.
                    </p>
                    <p className="text-emerald-600 font-medium mt-1">
                      support@finai-tech.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-emerald-100 text-emerald-600">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Live Chat</h3>
                    <p className="text-slate-500">
                      Available 24/7 for Enterprise clients.
                    </p>
                    <button className="mt-2 text-sm font-bold text-slate-900 underline decoration-emerald-400 hover:text-emerald-700 transition-colors">
                      Start a conversation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge Section */}
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 mb-2">
                <ShieldCheck size={20} />
                <span className="font-bold text-sm uppercase">
                  Secure Communication
                </span>
              </div>
              <p className="text-sm text-slate-500">
                All data transmitted through this form is encrypted using
                256-bit SSL technology. Your financial data remains private.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-emerald-900/5 border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  placeholder="jane@company.ai"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-4 rounded-2xl shadow-xl shadow-emerald-100 transition-all duration-300 hover:scale-[1.02] active:scale-95 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* </div> */}
      </Container>
    </section>
  );
};
export default ContactUs;
