export default function WhyTrust() {
  return (
    <section className="w-full bg-white py-24">

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#C8A75A]">
            Why Trust LuxDrive
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-[#0F172A]">
            Luxury you can trust.
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Every vehicle, owner, and booking is carefully verified
            to give you a safe and effortless rental experience.
          </p>
        </div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="border border-gray-200 rounded-2xl p-7 bg-[#FAF9F6]">
            <div className="w-12 h-12 rounded-full bg-[#F3EBD7] flex items-center justify-center text-[#C8A75A] text-xl">
              ✓
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">
              Verified Vehicles
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Every vehicle is inspected and verified before it
              becomes available on LuxDrive.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-2xl p-7 bg-[#FAF9F6]">
            <div className="w-12 h-12 rounded-full bg-[#F3EBD7] flex items-center justify-center text-[#C8A75A] text-xl">
              ✓
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">
              Trusted Owners
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Owners are verified so you can book your vehicle
              with confidence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-2xl p-7 bg-[#FAF9F6]">
            <div className="w-12 h-12 rounded-full bg-[#F3EBD7] flex items-center justify-center text-[#C8A75A] text-xl">
              ✓
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">
              Secure Bookings
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Booking requests are handled securely with clear
              details and transparent communication.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-200 rounded-2xl p-7 bg-[#FAF9F6]">
            <div className="w-12 h-12 rounded-full bg-[#F3EBD7] flex items-center justify-center text-[#C8A75A] text-xl">
              ✓
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">
              Transparent Pricing
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              See the rental price clearly with no unnecessary
              surprises during the booking process.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}