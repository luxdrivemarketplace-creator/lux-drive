// Become an Owner section
export default function BecomeOwner() {
  return (
    <section id="become-owner" className="bg-[#FAF9F6] py-24">

      {/* Main content container */}
      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-3xl bg-[#F8F6F0] px-8 py-16 md:px-16">

          {/* Section content */}
          <div className="max-w-3xl">

            {/* Small section label */}
            <p className="text-sm font-semibold tracking-[0.2em] text-[#C8A75A]">
              FOR VEHICLE OWNERS
            </p>

            {/* Main heading */}
            <h2 className="mt-5 text-4xl font-serif font-bold leading-tight text-[#0F172A] md:text-5xl">
              Luxury cars.
              <br />
              Earning for you.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#64748B]">
              Turn your premium vehicle into an earning opportunity.
              List your car on LuxDrive and connect with verified renters
              looking for a luxury driving experience.
            </p>

            {/* CTA button */}
           <button
  className="bg-[#C8A75A] text-[#0F172A] px-7 py-3 rounded-xl font-semibold hover:bg-[#B89445] transition"
>
  Start Your Earning
</button>

          </div>

        </div>

      </div>

    </section>
  );
}