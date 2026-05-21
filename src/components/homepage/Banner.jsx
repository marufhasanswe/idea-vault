"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

const slides = [
  {
    title: "Turn Startup Ideas Into Reality",
    desc: "Share your innovative ideas and get feedback from real founders and developers.",
    cta: "Share Ideas",
    bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Validate Ideas With Real Community Feedback",
    desc: "Get comments, suggestions, and real validation before building your product.",
    cta: "Get Feedback",
    bg: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
  },
  {
    title: "Discover Trending Startup Innovations",
    desc: "Explore new startup ideas and find inspiration for your next big project.",
    cta: "Explore Trends",
    bg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slide.bg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center">
        {/* Badge */}
        <div className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-zinc-300 backdrop-blur">
          🚀 IdeaVault Startup Platform
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          {slide.title}
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-sm text-zinc-300 md:text-base">
          {slide.desc}
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/ideas">
            <Button className="bg-[#1591DC] text-white sm:w-auto">
              {slide.cta}
            </Button>
          </Link>

          <Link href="/add-idea">
            <Button
              variant="outline"
              className="border-white/30 text-white sm:w-auto"
            >
              Add Idea
            </Button>
          </Link>
        </div>

        {/* Dots */}
        <div className="mt-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "w-6 bg-[#1591DC]" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
