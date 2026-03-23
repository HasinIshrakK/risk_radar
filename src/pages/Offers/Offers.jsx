import React from "react";
import { Ticket, Users, Zap, ArrowRight, Gift } from "lucide-react";
import Container from "../../components/SharedUi/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import AOS from "aos";
import Swal from "sweetalert2";

const Offers = () => {
  const promoCards = [
    {
      id: 1,
      title: "Early Bird Access",
      description: "Get 20% off your first year of Premium AI Portfolio management.",
      code: "RISKFREE20",
      icon: <Zap className="text-amber-500" size={28} />,
      expiry: "Valid until April 30, 2026",
      gradient: "from-amber-50 to-orange-50",
    },
    {
      id: 2,
      title: "Refer a Friend",
      description: "You and your friend both get a $50 credit toward API usage.",
      code: "REFER50",
      icon: <Users className="text-emerald-500" size={28} />,
      expiry: "Permanent Offer",
      gradient: "from-emerald-50 to-teal-50",
    },
    {
      id: 3,
      title: "Enterprise Trial",
      description: "Unlock full Risk Radar features for 14 days. No credit card required.",
      code: "RADAR14",
      icon: <Gift className="text-blue-500" size={28} />,
      expiry: "Limited Time",
      gradient: "from-blue-50 to-indigo-50",
    },
  ];

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    Swal.fire({
      title: `Code ${code} copied to clipboard!`,
      icon: "success",
      draggable: true
    });
  };

  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          subtitle="Exclusive Benefits"
          title={
            <span className="text-slate-900">
              Unlock Your <br />
              <span className="text-emerald-600">Financial Edge.</span>
            </span>
          }
          titlePera="Maximize your intelligence with our latest promotional offers and referral rewards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {promoCards.map((offer, index) => (
            <div
              key={offer.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative overflow-hidden group p-8 rounded-3xl border border-slate-100 bg-gradient-to-br ${offer.gradient} shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300`}
            >
              <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                {offer.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{offer.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {offer.description}
              </p>

              <div className="flex items-center justify-between bg-white/60 p-4 rounded-2xl border border-white/80">
                <span className="font-mono font-bold text-slate-800 tracking-wider">
                  {offer.code}
                </span>
                <button
                  onClick={() => copyToClipboard(offer.code)}
                  className="text-xs font-bold uppercase text-emerald-700 hover:text-emerald-900 flex items-center gap-1 transition-colors"
                >
                  Copy <ArrowRight size={14} />
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                <Ticket size={12} />
                {offer.expiry}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Offers;