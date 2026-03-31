import Swal from "sweetalert2";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Container from "../../components/SharedUi/Container";
import {
  ShieldCheck,
  Zap,
  Check,
  MapPin,
  LayoutDashboard,
  Lock,
  BarChart3,
  Shield,
  Sparkles,
} from "lucide-react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import useAxios from "../../hooks/useAxios";

const Services = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log("AuthContext user:", user);

  const services = [
    {
      title: "Real-Time Fraud Shield",
      description:
        "Our core engine analyzes every transaction in under 150ms. It stops fraudulent activity before the funds leave the account.",
      icon: ShieldCheck, // Pass the component itself
      tag: "Core Engine",
    },
    {
      title: "Behavioral Intelligence",
      description:
        "Detects 'Impossible Travel' and anomalous spending patterns by comparing GPS/IP locations in real-time.",
      icon: MapPin,
      tag: "Smart Logic",
    },
    {
      title: "Velocity & Burst Control",
      description:
        "Powered by Redis, we monitor transaction frequency to trigger immediate protective blocks on bot attacks.",
      icon: Zap,
      tag: "Redis Powered",
    },
    {
      title: "Admin Control Center",
      description:
        "A high-performance WebSocket dashboard providing a live feed. Manually override flags with a single click.",
      icon: LayoutDashboard,
      tag: "Full Visibility",
    },
    {
      title: "Brute-Force Protection",
      description:
        "Implements failed login throttling using Redis TTL to prevent credential stuffing and account takeovers.",
      icon: Lock,
      tag: "Security",
    },
    {
      title: "Risk Weighted Analytics",
      description:
        "Every transaction receives a dynamic score. Scale your security sensitivity based on global risk trends.",
      icon: BarChart3,
      tag: "Analytics",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small startups and local payment gateways.",
      features: [
        "Up to 1,000 txns/mo",
        "Real-time Risk Engine",
        "Basic Dashboard",
        "Email Support",
      ],
      isPopular: false,
    },
    {
      name: "Pro",
      price: "199",
      description:
        "Best for scaling fintech apps with high transaction volume.",
      features: [
        "Up to 50,000 txns/mo",
        "Impossible Travel Logic",
        "Redis Analytics",
        "24/7 Support",
        "API Integration",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "299",
      description: "Dedicated infrastructure for banks and large institutions.",
      features: [
        "Unlimited Transactions",
        "Custom Algorithms",
        "Account Manager",
        "On-premise Deployment",
        "SLA Guarantee",
      ],
      isPopular: false,
    },
  ];

  const handlePayment = async (plan) => {
    if (!user) {
      Swal.fire({ icon: "warning", title: "Login Required", text: "Please sign in to continue." });
      return;
    }

    // Initial price
    let currentPrice = parseFloat(plan.price);

    const { value: finalData } = await Swal.fire({
      title: `<span class="text-2xl font-black text-slate-800">Checkout</span>`,
      html: `
      <div class="text-left mt-4 space-y-4">
        <div class="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <p class="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Selected Plan</p>
            <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-slate-800">${plan.name}</span>
                <span class="text-2xl font-black text-emerald-600">$<span id="display-price">${plan.price}</span></span>
            </div>
        </div>

        <div class="space-y-2">
            <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Promo Code</label>
            <div class="flex gap-2">
                <input id="promo-input" type="text" placeholder="e.g. RISKFREE20" 
                       class="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none uppercase font-bold text-sm">
                <button id="check-promo-btn" type="button" 
                        class="px-4 py-3 bg-slate-900 text-white rounded-xl font-bold text-xs hover:bg-emerald-600 transition-all active:scale-95">
                    Check
                </button>
            </div>
            <p id="promo-msg" class="text-[11px] font-bold mt-1 ml-1 hidden"></p>
        </div>
      </div>
    `,
      showCancelButton: true,
      confirmButtonText: "Complete Payment",
      confirmButtonColor: "#10b981",
      customClass: { popup: "rounded-[2.5rem] p-8", confirmButton: "w-full py-4 rounded-xl font-black" },

      // logic to handle the "Check" button click inside the modal
      didOpen: () => {
        const checkBtn = document.getElementById('check-promo-btn');
        const promoInput = document.getElementById('promo-input');
        const promoMsg = document.getElementById('promo-msg');
        const displayPrice = document.getElementById('display-price');

        checkBtn.addEventListener('click', () => {
          const code = promoInput.value.toUpperCase().trim();

          // Reset messages
          promoMsg.classList.remove('hidden', 'text-emerald-600', 'text-rose-500');

          if (code === "RISKFREE20") {
            const discount = currentPrice * 0.2;
            const newPrice = (currentPrice - discount).toFixed(2);
            displayPrice.innerText = newPrice;
            promoMsg.innerText = "✓ 20% Discount Applied!";
            promoMsg.classList.add('text-emerald-600');
            promoInput.disabled = true; // Lock it in
            checkBtn.disabled = true;
            checkBtn.classList.add('opacity-50');
          }
          else if (code === "RADAR14") {
            promoMsg.innerText = "✕ Code 'RADAR14' has expired.";
            promoMsg.classList.add('text-rose-500');
          }
          else if (code === "") {
            promoMsg.innerText = "Please enter a code.";
            promoMsg.classList.add('text-slate-400');
          }
          else {
            promoMsg.innerText = "✕ Invalid promo code.";
            promoMsg.classList.add('text-rose-500');
          }
        });
      },
      preConfirm: () => {
        const displayPrice = document.getElementById('display-price').innerText;
        const promoInput = document.getElementById('promo-input').value;
        return {
          finalAmount: displayPrice,
          appliedCode: promoInput.toUpperCase()
        };
      }
    });

    if (!finalData) return;

    try {
      const paymentInfo = {
        amount: finalData.finalAmount,
        plansId: plan.name.toLowerCase(),
        name: plan.name,
        email: user.email,
        userId: user._id,
        promoCode: finalData.appliedCode
      };

      const axiosInstance = useAxios();
      const res = await axiosInstance.post("/api/payment/checkout", paymentInfo);
      window.location.assign(res.data.url);

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Payment Error",
        text: error.response?.data?.message || "Something went wrong during checkout.",
      });
    }
  };



  return (
    <div>
      <Container>
        {/* 1. HERO SECTION */}
        <SectionHeader
          subtitle="Enterprise Security & Our Services"
          title={
            <span className="text-slate-900 leading-tight">
              Modern Risk Management <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-green-500">
                Built for Speed.
              </span>
            </span>
          }
          titlePera="RiskRadar provides an ultra-low-latency security layer for financial institutions, detecting and preventing fraud the moment it happens without slowing down your customers."
        />

        {/* 2. SERVICES GRID - Show the value first */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-16">
          {services.map((service, index) => {
            // Extract the component and rename it with a Capital letter
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className="group relative p-8 bg-white border border-slate-200/60 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  {/* MODERN ICON CONTAINER */}
                  <div className="relative w-16 h-16 mb-8">
                    <div className="absolute inset-0 bg-emerald-400 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
                    <div className="relative w-full h-full bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-all duration-500 transform group-hover:-rotate-12 shadow-sm">
                      {/* Render the icon normally here */}
                      <IconComponent className="w-8 h-8 text-emerald-600 group-hover:text-white transition-all duration-500 stroke-[1.5px]" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[15px] leading-relaxed group-hover:text-slate-600 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. PRICING SECTION - Follow up with the cost */}
        <div className="mt-16 md:mt-36">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Reference Badge */}
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider mb-6 shadow-xl shadow-green-500/20 group cursor-default">
              <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Trusted & Verified
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Simple, Transparent{" "}
              <span className="text-green-600">Pricing</span>
            </h2>
            <p className="text-slate-600 md:text-lg max-w-2xl font-medium">
              Choose the plan that fits your transaction volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py10">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-[2.5rem] transition-all duration-500 flex flex-col overflow-hidden ${plan.isPopular
                  ? "bg-white border-2 border-emerald-500/20 shadow-[0_20px_50px_rgba(16,185,129,0.15)] scale-105 z-10"
                  : "bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1"
                  }`}
              >
                {/* --- GRADIENT BLUR EFFECTS --- */}
                {plan.isPopular ? (
                  <>
                    {/* Intense Top Glow for Popular Plan */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl group-hover:bg-emerald-300/50 transition-colors duration-700"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-100/40 rounded-full blur-3xl"></div>
                  </>
                ) : (
                  /* Subtle Corner Blur for Standard Plans */
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-slate-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}

                {/* Popular Badge with Gradient */}
                {plan.isPopular && (
                  <span className="absolute top-5 right-8 bg-linear-to-r from-emerald-600 to-green-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-200">
                    Most Popular
                  </span>
                )}

                <div className="relative z-10">
                  <h3 className="text-sm font-black text-emerald-700 uppercase tracking-widest mb-2">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
                      {plan.price !== "Custom" ? `$${plan.price}` : plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-slate-400 font-semibold ml-2 text-lg">
                        /mo
                      </span>
                    )}
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 h-10">
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent mb-8"></div>

                  <ul className="space-y-4 mb-10 grow">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-slate-600 text-[14px] font-medium group-hover:text-slate-900 transition-colors"
                      >
                        <div className="mr-3 p-1 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors">
                          <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3px]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePayment(plan)}
                    className={`w-full py-5 rounded-[1.5rem] font-bold text-sm transition-all duration-300 transform active:scale-95 ${plan.isPopular
                      ? "bg-slate-900 text-white hover:bg-emerald-600 shadow-xl shadow-emerald-100"
                      : "bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-100"
                      }`}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. MODERN CTA SECTION */}
        <section className="mt-36 mb-20">
          <div className="relative rounded-[3rem] bg-slate-900 p-10 md:p-20 overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to secure <br />
                  <span className="text-emerald-400">your infrastructure?</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-md mx-auto lg:mx-0">
                  Connect your payment gateway to RiskRadar and experience
                  sub-150ms protection today.
                </p>
              </div>
              <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-lg active:scale-95 whitespace-nowrap">
                Get Started Now
              </button>
            </div>
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full -ml-32 -mb-32 blur-2xl"></div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Services;
