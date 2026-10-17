"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

// FAQ section
export default function FAQ() {

  // Stores which question is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Questions and answers
  const faqs = [
    {
      question: "How do I book a vehicle on LuxDrive?",
      answer:
        "Choose your preferred vehicle, select your pickup and return dates, and send a booking request to the owner.",
    },
    {
      question: "Are the vehicles verified?",
      answer:
        "Yes. Every vehicle listed on LuxDrive goes through a verification process before becoming available for booking.",
    },
    {
      question: "Are the owners verified?",
      answer:
        "Yes. Vehicle owners are verified so renters can book with greater confidence and security.",
    },
    {
      question: "When will I be charged?",
      answer:
        "You won't be charged until the vehicle owner approves your booking request.",
    },
    {
      question: "Is the security deposit refundable?",
      answer:
        "Yes. The security deposit is refundable according to the rental terms and conditions.",
    },
  ];

  // Opens or closes a question
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">

      {/* Section heading */}
      <div className="mx-auto max-w-3xl px-6 text-center">

        <p className="text-sm font-semibold tracking-[0.2em] text-[#C8A75A]">
          FREQUENTLY ASKED QUESTIONS
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-[#0F172A]">
          Questions?
          <br />
          We have answers.
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#64748B]">
          Everything you need to know about booking and renting
          a premium vehicle through LuxDrive.
        </p>

      </div>

      {/* FAQ list */}
      <div className="mx-auto mt-14 max-w-3xl px-6">

        {faqs.map((faq, index) => {

          // Check whether this question is open
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border-b border-[#E5E1D8]"
            >

              {/* Question button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between py-6 text-left"
              >

                <span className="pr-6 text-lg font-semibold text-[#0F172A]">
                  {faq.question}
                </span>

                <Plus
                  size={22}
                  className={`shrink-0 text-[#C8A75A] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />

              </button>

              {/* Answer */}
              {isOpen && (
                <div className="pb-6 pr-10">
                  <p className="text-base leading-7 text-[#64748B]">
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>
          );
        })}

      </div>

    </section>
  );
}