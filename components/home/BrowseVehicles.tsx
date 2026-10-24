import { vehicles } from "../../lib/data/vehicle";
import VehicleListing from "./VehicleListing";

export default function BrowseVehicles() {
  return (
    <section
      id="browse-cars"
      className="px-6 py-20 md:px-12 lg:px-20"
    >
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
      <VehicleListing vehicles={vehicles} />
    </section>
  );
}