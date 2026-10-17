import { Button } from "@/components/ui/button";
import { ShieldCheck, Car, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F8F7F4]">

      {/* Main container */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 py-16 lg:grid-cols-2 lg:px-12">

        {/* Left Content */}
        <div>

          {/* Small label */}
          <span className="rounded-full bg-[#E8DFC6] px-4 py-2 text-sm font-medium text-[#8A6A2F]">
            Premium Vehicle Marketplace
          </span>

          {/* Main heading */}
          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#0F172A]">
            Drive Luxury.
            <br />
            Rent With Confidence.
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600">
            Discover verified premium vehicles across India and enjoy a secure,
            transparent and hassle-free booking experience.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-[#0F172A] px-8 py-6 text-white hover:bg-[#1E293B]">
              Explore Vehicles
            </Button>

            <Button
              variant="outline"
              className="border-[#C8A75A] text-[#C8A75A] hover:bg-[#FFF7E6]"
            >
              List Your Vehicle
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex gap-8">

            <div>
              <h3 className="text-2xl font-bold text-[#0F172A]">500+</h3>
              <p className="text-sm text-gray-500">Premium Cars</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0F172A]">12</h3>
              <p className="text-sm text-gray-500">Cities</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0F172A]">4.9★</h3>
              <p className="text-sm text-gray-500">Average Rating</p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

            {/* Luxury car image */}
<div className="w-[540px] h-[420px] overflow-hidden rounded-3xl">
  <img
    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    alt="Luxury Car"
    className="w-full h-full object-cover"
  />
</div>

          {/* Floating cards */}

          <div className="absolute -left-6 top-8 rounded-2xl bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-600" />
              <div>
                <p className="font-semibold">98% Verified</p>
                <p className="text-xs text-gray-500">Trusted Owners</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-8 rounded-2xl bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <Car className="text-[#C8A75A]" />
              <div>
                <p className="font-semibold">Luxury Collection</p>
                <p className="text-xs text-gray-500">Handpicked Vehicles</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Feature strip */}
      <div className="border-t bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-6 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <ShieldCheck size={18} />
            Verified Owners
          </div>

          <div className="flex items-center gap-2">
            <Car size={18} />
            Premium Vehicles
          </div>

          <div className="flex items-center gap-2">
            <Users size={18} />
            Secure Booking Requests
          </div>

        </div>
      </div>

    </section>
  );
}