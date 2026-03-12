import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PortfolioHighlights() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Mandala tattoo design",
      category: "MANDALA"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Geometric tattoo design",
      category: "GEOMETRIC"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/4125610/pexels-photo-4125610.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Floral tattoo design",
      category: "FLORAL"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Portrait tattoo design",
      category: "PORTRAIT"
    }
  ];

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%"
          }
        }
      );

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;

        gsap.to(card, {
          rotateX,
          rotateY,
          y: -8,
          duration: 0.4,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section id="gallery" className="portfolio-section py-28 bg-black">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="portfolio-title text-white text-4xl md:text-5xl font-light mb-3">
            Portfolio Highlights
          </h2>
          <p className="portfolio-subtitle text-gray-500 text-xs tracking-[0.2em]">
            HANDPICKED MASTERWORKS
          </p>
        </div>

        {/* Grid */}
        <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="portfolio-card group relative overflow-hidden aspect-[3/4] rounded-2xl bg-gray-900 border border-white/10 shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1400px"
              }}
            >
              {/* Back Layer */}
              <img
                src={item.image}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ transform: "translateZ(20px)" }}
              />

              {/* Mid Layer */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                style={{ transform: "translateZ(35px)" }}
              ></div>

              {/* Front Layer Label */}
              <div
                className="absolute bottom-5 left-5 z-10"
                style={{ transform: "translateZ(60px)" }}
              >
                <p className="text-white text-xs tracking-[0.25em]">
                  {item.category}
                </p>
              </div>

              {/* Depth Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioHighlights;