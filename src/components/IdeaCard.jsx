import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IdeaCard = ({ idea }) => {
  return (
    <div className="group rounded-3xl border border-border bg-card p-5 shadow-sm transition hover:shadow-xl hover:border-[#4BB8FA]/40">
      {/* Image */}
      <div className="mb-4 overflow-hidden rounded-2xl">
        <Image
          width={500}
          height={500}
          src={idea.imageUrl}
          alt={idea.ideaTitle}
          className="h-40 w-full object-cover transition group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold leading-snug">{idea.ideaTitle}</h2>

      {/* Category + Budget */}
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span className="rounded-full bg-muted px-2 py-1">{idea.category}</span>
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
  );
};

export default IdeaCard;
