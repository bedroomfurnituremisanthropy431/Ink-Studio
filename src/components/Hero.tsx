import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = floatingCardRef.current;
    const background = backgroundRef.current;
    const foreground = foregroundRef.current;

    if (!card || !background || !foreground) return;

    // Floating card animation
    gsap.to(card, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      // Floating card strongest movement
      gsap.to(card, {
        x,
        y,
        duration: 0.5,
        ease: "power2.out"
      });

      // Background slow movement
      gsap.to(background, {
        y: y / 3,
        duration: 1,
        ease: "power2.out"
      });

      // Foreground independent movement
      gsap.to(foreground, {
        x: -x / 2,
        y: -y / 2,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;

      gsap.to(background, {
        y: scrollY * 0.15,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(foreground, {
        y: scrollY * 0.08,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background Layer */}
      <div ref={backgroundRef} className="hero-background absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Tattoo art"
          className="w-full h-full object-cover opacity-55 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black"></div>
      </div>

      {/* Foreground Tattoo Layer */}
      <div
        ref={foregroundRef}
        className="absolute left-10 bottom-0 z-10 hidden lg:block"
      >
        <img
          src="https://images.pexels.com/photos/4125610/pexels-photo-4125610.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Foreground tattoo"
          className="w-72 h-[500px] object-cover rounded-2xl opacity-80 shadow-2xl"
        />
      </div>

      {/* Right Glow */}
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-white/3 blur-3xl rounded-full z-0"></div>

      {/* Floating Tattoo Card */}
      <div
        ref={floatingCardRef}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="hero-floating-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <img
            src="https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Tattoo detail"
            className="w-56 h-72 object-cover rounded-xl"
          />
          <p className="text-white text-xs tracking-[0.2em] mt-3 text-center">
            SIGNATURE INK
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="hero-title text-white mb-6 leading-none">
          <span className="block text-5xl md:text-7xl font-light tracking-tight">
            Ink
          </span>
          <span className="block text-5xl md:text-7xl font-serif italic font-light tracking-tight text-gray-200">
            Beyond
          </span>
          <span className="block text-5xl md:text-7xl font-light tracking-tight">
            Skin
          </span>
        </h1>

        <p className="hero-subtitle text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Crafting timeless art on life&apos;s ultimate canvas. Where precision meets passion in every drop of ink.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black text-xs tracking-[0.15em] px-8 py-3.5 rounded-full hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto">
            EXPLORE DESIGNS
          </button>

          <button className="border border-white text-white text-xs tracking-[0.15em] px-8 py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
            BOOK SESSION
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="hero-divider absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/40 to-transparent"></div>
    </section>
  );
}

export default Hero;