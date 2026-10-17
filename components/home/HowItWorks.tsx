import {
  Search,
  CalendarDays,
  Send,
  Car,
} from "lucide-react";

// Main How It Works section
export default function HowItWorks() {

  // These are the four booking steps
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Choose Your Vehicle",
      description:
        "Browse our collection of premium vehicles and choose the one that suits you.",
    },
    {
      number: "02",
      icon: CalendarDays,
      title: "Select Your Dates",
      description:
        "Pick your pickup and return dates according to your travel plans.",
    },
    {
      number: "03",
      icon: Send,
      title: "Send Booking Request",
      description:
        "Submit your booking request and wait for the verified owner to approve it.",
    },
    {
      number: "04",
      icon: Car,
      title: "Enjoy Your Ride",
      description:
        "Once approved, collect the vehicle and enjoy a smooth luxury driving experience.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#FAF9F6] py-24">

      {/* Section heading */}
      <div className="mx-auto max-w-3xl text-center px-6">

        <p className="text-sm font-semibold tracking-[0.2em] text-[#C8A75A]">
          HOW IT WORKS
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-[#0F172A]">
          Your luxury ride,
          <br />
          in a few simple steps.
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#64748B]">
          From choosing your vehicle to hitting the road, LuxDrive keeps
          the entire booking experience simple and transparent.
        </p>
      </div>

      {/* Booking steps */}
      <div className="mx-auto mt-16 max-w-6xl px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step) => {

            // Get the icon for this step
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-2xl border border-[#E5E1D8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Step number and icon */}
                <div className="flex items-center justify-between">

                  <span className="text-sm font-semibold tracking-widest text-[#C8A75A]">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5ECD8]">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-[#B18B3D]"
                    />
                  </div>

                </div>

                {/* Step title */}
                <h3 className="mt-8 text-xl font-serif font-bold text-[#0F172A]">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="mt-4 text-sm leading-7 text-[#64748B]">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}