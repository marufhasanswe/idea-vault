import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

const IdeasPage = async () => {
  const res = await fetch("http://localhost:5000/ideas", {
    cache: "no-store",
  });

  const ideas = await res.json();

  return (
    <section className="min-h-screen bg-background px-4 py-10 text-foreground md:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-6xl text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Explore{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Startup Ideas
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
          Discover innovative startup concepts shared by creators. Give
          feedback, get inspired, and build together.
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea) => (
          <div
            key={idea._id}
            className="group rounded-3xl border border-border bg-card p-5 shadow-sm transition hover:shadow-xl hover:border-primary/40"
          >
            {/* Image */}
            <div className="mb-4 overflow-hidden rounded-2xl">
              <img
                src={idea.imageUrl}
                alt={idea.ideaTitle}
                className="h-40 w-full object-cover transition group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold leading-snug">
              {idea.ideaTitle}
            </h2>

            {/* Category + Budget */}
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span className="rounded-full bg-muted px-2 py-1">
                {idea.category}
              </span>
              <span>${idea.estimatedBudget}</span>
            </div>

            {/* Short Description */}
            <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
              {idea.shortDescription}
            </p>

            {/* Tags + Audience */}
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-border px-2 py-1 text-muted-foreground">
                {idea.tags}
              </span>

              <span className="rounded-full border border-border px-2 py-1 text-muted-foreground">
                {idea.targetAudience}
              </span>
            </div>

            {/* View Details */}
            <Link href={`/ideas/${idea._id}`}>
              <Button className="mt-5 w-full rounded-2xl bg-[#4BB8FA] text-primary-foreground">
                View Details
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IdeasPage;
