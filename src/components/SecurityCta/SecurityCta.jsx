import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import Container from "../SharedUi/Container";

const SecurityCta = () => {
  return (
    <Container>
      <section className="relative overflow-hidden md:mb-24">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(#4ADE80 0.5px, transparent 0.5px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/20 blur-[120px] rounded-full"></div>
        <div className="mx-auto relative">
          <div className="bg-gradient-to-b from-white/20 to-transparent p-[1px] rounded-[2rem]">
            <div className="bg-[#0B0F1A] backdrop-blur-xl rounded-[2rem] p-8 md:p-16 text-center border border-white/5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8 animate-pulse">
                <ShieldCheck size={14} />
                <span>AI-POWERED PROTECTION ACTIVE</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Secure Your Transactions <br className="hidden md:block" />{" "}
                Today
              </h2>

              {/* Description */}
              <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
                Protect your financial platform with AI-powered real-time
                <span className="text-emerald-400"> fraud detection</span> and
                intelligent <span className="text-white">risk monitoring</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group relative px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden">
                  <span>Request a Demo</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all flex items-center gap-2">
                  <PlayCircle size={18} className="text-emerald-400" />
                  <span>View How It Works</span>
                </button>
              </div>

              {/* Trust Footer */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-xs text-gray-500 font-mono tracking-widest uppercase">
                  Trusted by 500+ Financial Institutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default SecurityCta;
