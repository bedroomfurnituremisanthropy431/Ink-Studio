function Footer() {
  return (
    <footer className="footer-section bg-black border-t border-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="footer-brand">
            <h3 className="text-white text-sm font-light tracking-[0.2em] mb-4">
              INK STUDIO
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Crafting legacy art by the finest tattoo makers in New York and beyond.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="text-white text-xs tracking-[0.15em] mb-4">
              STUDIO
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#gallery" className="text-gray-500 text-xs hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#artists" className="text-gray-500 text-xs hover:text-white transition-colors">
                  Artists
                </a>
              </li>
              <li>
                <a href="#roots" className="text-gray-500 text-xs hover:text-white transition-colors">
                  Our Roots
                </a>
              </li>
              <li>
                <a href="#respect" className="text-gray-500 text-xs hover:text-white transition-colors">
                  Code & Respect
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="text-white text-xs tracking-[0.15em] mb-4">
              CONNECT
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#instagram" className="text-gray-500 text-xs hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#vimeo" className="text-gray-500 text-xs hover:text-white transition-colors">
                  Vimeo
                </a>
              </li>
              <li>
                <a href="#pinterest" className="text-gray-500 text-xs hover:text-white transition-colors">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom border-t border-gray-900 pt-8">
          <p className="text-gray-600 text-xs text-center">
            © 2026 Ink Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
