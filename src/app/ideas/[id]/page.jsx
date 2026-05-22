import CommunityFeedback from "@/components/CommunityFeedback";
import { auth } from "@/lib/auth";
import { FileText } from "@gravity-ui/icons";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { GiLightBulb } from "react-icons/gi";

const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/ideas/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const idea = await res.json();

  return (
    <section className="min-h-screen bg-background px-4 py-10 text-foreground md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <Image
              width={800}
              height={800}
              src={idea.imageUrl}
              alt={idea.ideaTitle}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-3 inline-block w-fit rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
              {idea.category}
            </span>

            <h1 className="text-3xl font-bold sm:text-4xl">{idea.ideaTitle}</h1>

            <p className="mt-4 text-sm text-muted-foreground">
              {idea.shortDescription}
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full border border-border px-3 py-1">
                Budget: ${idea.estimatedBudget}
              </span>
              <span className="rounded-full border border-border px-3 py-1">
                Audience: {idea.targetAudience}
              </span>
              <span className="rounded-full border border-border px-3 py-1">
                Tags: {idea.tags}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Problem Statement */}
          <div className="group rounded-3xl border border-border bg-card p-6 transition hover:border-red-400/40 ">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-red-500/10 p-2 text-red-500">
                <FiAlertCircle size={18} />
              </div>
              <h2 className="text-base font-semibold">Problem Statement</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {idea.problemStatement}
            </p>
          </div>

          {/* Proposed Solution */}
          <div className="group rounded-3xl border border-border bg-card p-6 transition hover:border-green-400/40">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-green-500/10 p-2 text-green-500">
                <GiLightBulb size={18} />
              </div>
              <h2 className="text-base font-semibold">Proposed Solution</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {idea.proposedSolution}
            </p>
          </div>

          <div className="group rounded-3xl border border-border bg-card p-6 transition hover:border-blue-400/40 md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/10 p-2 text-blue-500">
                <FileText size={18} />
              </div>
              <h2 className="text-base font-semibold">Detailed Overview</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {idea.detailedDescription}
            </p>
          </div>
        </div>

        <CommunityFeedback ideaId={idea._id} />
      </div>
    </section>
  );
};

export default IdeaDetailsPage;
