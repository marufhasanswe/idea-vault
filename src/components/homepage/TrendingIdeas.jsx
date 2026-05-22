import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { HiOutlineLightBulb } from "react-icons/hi";

const TrendingIdeas = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/trending-ideas`,
    {
      cache: "no-store",
    },
  );

  const trendingIdeas = await res.json();

  return (
    <section className="bg-background px-4 py-14 text-foreground md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1 text-xs text-muted-foreground">
              <HiOutlineLightBulb className="text-primary" />
              Trending Startup Ideas
            </div>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Explore Trending Ideas
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Discover innovative startup concepts shared by creators and
              entrepreneurs worldwide.
            </p>
          </div>

          <Link href="/ideas">
            <Button
              variant="bordered"
              className="rounded-2xl border-border bg-card"
            >
              View All Ideas
            </Button>
          </Link>
        </div>

        {/* IDEAS GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {trendingIdeas.map((idea) => (
            <div
              key={idea._id}
              className="group rounded-3xl border border-border bg-card p-5 shadow-sm transition hover:border-[#4BB8FA]/40 hover:shadow-xl"
            >
              {/* Image */}
              <div className="mb-4 overflow-hidden rounded-2xl">
                <Image
                  width={500}
                  height={500}
                  src={idea.imageUrl}
                  alt={idea.ideaTitle}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
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
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
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
                <Button className="mt-5 h-11 w-full rounded-2xl bg-[#4BB8FA] text-primary-foreground">
                  View Details
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingIdeas;
