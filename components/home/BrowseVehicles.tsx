export default function BrowseVehicles() {
  return (
    <section id="browse-cars" className="px-6 py-20 md:px-12 lg:px-20">
      {/* Section heading */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#b58a35]">
            Our Collection
          </p>

          <h2 className="text-4xl font-bold text-[#101828] md:text-5xl">
            Exceptional vehicles,
            <br />
            handpicked for you.
          </h2>
        </div>

        {/* View all button */}
        <button className="hidden rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-[#101828] transition hover:bg-gray-50 md:block">
          View All Vehicles →
        </button>
      </div>

      {/* Vehicle cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Vehicle 1 */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80"
            alt="BMW luxury car"
            className="h-64 w-full object-cover"
          />

          <div className="p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              BMW
            </p>

            <h3 className="text-xl font-semibold text-[#101828]">
              BMW M5 Competition
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Mumbai
            </p>

            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
                5 Seats
              </span>

              <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
                Automatic
              </span>

              <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
                Petrol
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
              <p className="text-xl font-bold text-[#101828]">
                ₹8,500
                <span className="text-sm font-normal text-gray-400">
                  /day
                </span>
              </p>

              <button className="rounded-lg bg-[#101828] px-4 py-2 text-sm font-semibold text-white">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Vehicle 2 */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80"
            alt="Mercedes luxury car"
            className="h-64 w-full object-cover"
          />

          <div className="p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Mercedes
            </p>

            <h3 className="text-xl font-semibold text-[#101828]">
              Mercedes-AMG GT 63 S
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Delhi
            </p>

            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
                4 Seats
              </span>

              <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
                Automatic
              </span>

              <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
                Petrol
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
              <p className="text-xl font-bold text-[#101828]">
                ₹12,000
                <span className="text-sm font-normal text-gray-400">
                  /day
                </span>
              </p>

              <button className="rounded-lg bg-[#101828] px-4 py-2 text-sm font-semibold text-white">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Vehicle 3 */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80"
            alt="Porsche luxury car"
            className="h-64 w-full object-cover"
          />

          <div className="p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Porsche
            </p>

            <h3 className="text-xl font-semibold text-[#101828]">
              Porsche 911 Carrera S
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Bangalore
            </p>

            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
                4 Seats
              </span>

              <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
                PDK
              </span>

              <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
                Petrol
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
              <p className="text-xl font-bold text-[#101828]">
                ₹15,000
                <span className="text-sm font-normal text-gray-400">
                  /day
                </span>
              </p>

              <button className="rounded-lg bg-[#101828] px-4 py-2 text-sm font-semibold text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}