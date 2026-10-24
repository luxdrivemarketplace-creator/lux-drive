import type { Vehicle } from "../../lib/types/vehicle";
import VehicleStatus from "./VehicleStatus";

type VehicleListingProps = {
  vehicles: Vehicle[];
  isLoading?: boolean;
  error?: string | null;
};

export default function VehicleListing({
  vehicles,
  isLoading = false,
  error = null,
}: VehicleListingProps) {
  // Show loading while vehicles are being fetched.
  if (isLoading) {
    return (
      <VehicleStatus
        type="loading"
        title="Finding your next drive..."
        message="Please wait while we load available vehicles."
      />
    );
  }

  // Show an error if loading fails.
  if (error) {
    return (
      <VehicleStatus
        type="error"
        title="Unable to load vehicles"
        message={error}
      />
    );
  }

  // Show a message when no vehicles are available.
  if (vehicles.length === 0) {
    return (
      <VehicleStatus
        type="empty"
        title="No vehicles available"
        message="Please check back soon for available vehicles."
      />
    );
  }

  // Display a card for each vehicle.
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <article
          key={vehicle.id}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
        >
          <div className="h-52 overflow-hidden bg-gray-100">
            <img
              src={vehicle.image}
              alt={`${vehicle.brand} ${vehicle.name}`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5">
            <p className="text-sm text-gray-500">
              {vehicle.brand}
            </p>

            <h3 className="mt-1 text-xl font-semibold text-[#101828]">
              {vehicle.name}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {vehicle.location}
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
              <span>{vehicle.seats} Seats</span>
              <span>{vehicle.transmission}</span>
              <span>{vehicle.fuelType}</span>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-4">
              <p className="text-lg font-semibold text-[#101828]">
                ₹{vehicle.pricePerDay.toLocaleString("en-IN")}
                <span className="text-sm font-normal text-gray-500">
                  {" "} / day
                </span>
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}