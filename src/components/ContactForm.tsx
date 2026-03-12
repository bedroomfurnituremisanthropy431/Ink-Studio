function ContactForm() {
  return (
    <section id="contact" className="contact-section py-28 bg-black">
      <div className="container mx-auto px-6">

        <div className="max-w-3xl mx-auto border border-white/10 rounded-2xl p-10 md:p-16 bg-white/5 backdrop-blur-md shadow-2xl">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="contact-title text-white text-4xl md:text-5xl font-light mb-4">
              Begin Your Journey
            </h2>

            <p className="contact-subtitle text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Secure your session with the industry&apos;s finest. Appointments are limited to ensure maximum focus for every client.
            </p>
          </div>

          {/* Form */}
          <form className="contact-form space-y-6">

            {/* Name */}
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/10 rounded-xl text-white px-5 py-4 text-sm focus:outline-none focus:border-white/30 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border border-white/10 rounded-xl text-white px-5 py-4 text-sm focus:outline-none focus:border-white/30 transition-all duration-300"
              />
            </div>

            {/* Contact Preference */}
            <div className="form-group">
              <select className="w-full bg-transparent border border-white/10 rounded-xl text-gray-400 px-5 py-4 text-sm focus:outline-none focus:border-white/30 transition-all duration-300 appearance-none cursor-pointer">
                <option value="">Preferred Contact Method</option>
                <option value="phone">Phone</option>
                <option value="sms">SMS</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-white text-black text-xs tracking-[0.15em] px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 mt-6"
            >
              REQUEST CONSULTATION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;