import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const icons = [
  { background: "bg-amber-500", label: "₿", name: "Bitcoin" },
  { background: "bg-amber-800", label: "Ξ", name: "Ethereum" },
  { background: "bg-gradient-to-tr from-blue-600 to-purple-700", label: "◎", name: "Solana" },
  { background: "", label: "🅑", name: "Binance" },
  { background: "", label: "✕", name: "Ripple" },
  { background: "", label: "Ð", name: "Dogecoin" },
  { background: "", label: "₳", name: "Cardano" },
  { background: "", label: "●", name: "Polkadot" },
  { background: "", label: "Ł", name: "Litecoin" },
  { background: "", label: "Λ", name: "Avalanche" },
  { background: "", label: "🔗", name: "Chainlink" },
  { background: "", label: "🦄", name: "Uniswap" },
  { background: "", label: "★", name: "Stellar" },
  { background: "", label: "T", name: "Tron" },
  { background: "bg-gray-500", label: "🐕", name: "Shiba Inu" },
  { background: "", label: "ɱ", name: "Monero" },
];

const CryptoSlider = ({ className = "", direction = "left" }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    let anim;

    function startAnim() {
      gsap.set(el, { x: 0 });
      const distance = el.scrollWidth / 2;
      if (anim) anim.kill();
      anim = gsap.to(el, {
        x: direction === "left" ? -distance : distance,
        duration: 20,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => {
            const val = parseFloat(x);
            return direction === "left"
              ? (val % -distance)
              : ((val % distance) - distance);
          })
        }
      });
    }

    startAnim();
    window.addEventListener("resize", startAnim);

    return () => {
      if (anim) anim.kill();
      window.removeEventListener("resize", startAnim);
    };
  }, [direction]);

  return (
    <div
      ref={sliderRef}
      className={`flex gap-4 whitespace-nowrap ${className}`}
      style={{ willChange: "transform" }}
    >
      {[...Array(2)].map((_, repeatIdx) =>
        icons.map((icon, idx) => (
          <div
            className="gap-3 flex rounded-full ps-2 pe-4 py-1 border-2 border-white/20 items-center"
            key={`${repeatIdx}-${idx}`}
          >
            <div className={`${icon.background} size-11 rounded-full text-center content-center border-1 border-white/10 shadow-2xl shadow-white/30 text-2xl font-semibold`}>
              {icon.label}
            </div>
            <div className="flex flex-1 gap-2">
              <div>
                <h5>{icon.name}</h5>
              </div>
              <div className={`${(idx % 2) ? "text-green-400" : "text-red-400"}`}>
                <h5>+40%</h5>
              </div>
            </div>
          </div>
                ))
          )
        }; 


        </div>
        )}


export default CryptoSlider;
   