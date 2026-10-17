// Footer section for the bottom of the website

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E2D5] bg-[#F8F6F0]">

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand information */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-[#0F172A]">
              LuxDrive
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#64748B]">
              A premium vehicle marketplace connecting you with
              verified owners and luxury cars across India.
            </p>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="font-semibold text-[#0F172A]">
              Explore
            </h3>

            <div className="mt-4 space-y-3 text-sm text-[#64748B]">
              <a href="#" className="block hover:text-[#C8A75A]">
                Browse Cars
              </a>

              <a href="#" className="block hover:text-[#C8A75A]">
                How It Works
              </a>

              <a href="#" className="block hover:text-[#C8A75A]">
                Become an Owner
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-[#0F172A]">
              LuxDrive
            </h3>

            <div className="mt-4 space-y-3 text-sm text-[#64748B]">
              <a href="#" className="block hover:text-[#C8A75A]">
                About Us
              </a>

              <a href="#" className="block hover:text-[#C8A75A]">
                Contact
              </a>

              <a href="#" className="block hover:text-[#C8A75A]">
                Privacy Policy
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright area */}
        <div className="mt-12 border-t border-[#E8E2D5] pt-6">

          <div className="flex flex-col gap-3 text-sm text-[#64748B] md:flex-row md:items-center md:justify-between">

            <p>
              © 2026 LuxDrive. All rights reserved.
            </p>

            <p>
              Premium drives. Trusted owners.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}