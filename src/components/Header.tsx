import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-white/10 py-3"
          : "bg-black/40 backdrop-blur-sm border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white text-sm md:text-base font-light tracking-[0.25em] cursor-pointer">
          INK STUDIO
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#gallery"
            className="text-white text-xs tracking-[0.15em] hover:text-gray-300 transition-all duration-300"
          >
            GALLERY
          </a>

          <a
            href="#artists"
            className="text-white text-xs tracking-[0.15em] hover:text-gray-300 transition-all duration-300"
          >
            ARTISTS
          </a>

          <a
            href="#philosophy"
            className="text-white text-xs tracking-[0.15em] hover:text-gray-300 transition-all duration-300"
          >
            PHILOSOPHY
          </a>

          <a
            href="#contact"
            className="text-white text-xs tracking-[0.15em] hover:text-gray-300 transition-all duration-300"
          >
            CONTACT
          </a>
        </nav>

        {/* CTA */}
        <button className="border border-white text-white text-xs tracking-[0.15em] px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
          BOOK SESSION
        </button>
      </div>
    </header>
  );
}

export default Header;