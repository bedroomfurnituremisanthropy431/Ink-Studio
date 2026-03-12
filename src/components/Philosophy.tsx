import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Philosophy() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: -80
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%"
          }
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: 80
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%"
          }
        }
      );
    }
  }, []);

  return (
    <section id="philosophy" className="philosophy-section py-28 bg-black">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image Section */}
          <div
            ref={imageRef}
            className="philosophy-image-wrapper relative aspect-[3/4] lg:aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-gray-900"
          >
            <img
              src="https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Rose tattoo art"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="philosophy-content">
            <p className="philosophy-label text-gray-500 text-xs tracking-[0.25em] mb-6">
              OUR PHILOSOPHY
            </p>

            <h2 className="philosophy-title text-white text-4xl md:text-5xl font-light leading-tight mb-8">
              Art that lives with you,
              <br />
              not just on you.
            </h2>

            <div className="philosophy-text space-y-6 text-gray-400 text-sm md:text-base leading-relaxed mb-10">
              <p>
                We believe every tattoo is a collaboration between the canvas of human skin and the soul of artistic vision. It&apos;s not just about the ink — it&apos;s about creating timeless permanence, meaning, and identity.
              </p>

              <p>
                Each design reflects precision paired with poetic intent. We use the highest-grade needles and premium Japanese inks engineered to achieve depth, durability, and artistic clarity that endures for years.
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-6 py-2">
              <blockquote className="philosophy-quote text-white text-base italic leading-relaxed">
                "Precision is the price we pay for immortality."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;