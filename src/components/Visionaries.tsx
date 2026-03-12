function Visionaries() {
  const artists = [
    {
      id: 1,
      name: "Julian Thorne",
      title: "LEAD INK ARCHITECT",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Marcus Vane",
      title: "GEOMETRY VIRTUOSO",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Elena Frost",
      title: "MINIMALIST LUMINARY",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="artists" className="visionaries-section py-28 bg-black">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="visionaries-title text-white text-4xl md:text-5xl font-light mb-3">
              The Visionaries
            </h2>
            <p className="visionaries-subtitle text-gray-500 text-xs tracking-[0.2em]">
              MASTER ARTISTS REDEFINING THE MEDIUM
            </p>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="artists-grid grid grid-cols-1 md:grid-cols-3 gap-10">

          {artists.map((artist) => (
            <div
              key={artist.id}
              className="artist-card group text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 shadow-xl"
              data-artist-id={artist.id}
            >
              {/* Portrait */}
              <div className="artist-image-wrapper mb-6 relative inline-block">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border border-white/10 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="artist-name text-white text-xl font-light mb-2">
                {artist.name}
              </h3>

              {/* Title */}
              <p className="artist-title text-gray-500 text-xs tracking-[0.15em]">
                {artist.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Visionaries;