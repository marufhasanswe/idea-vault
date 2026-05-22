import React from "react";
import IdeaCard from "@/components/IdeaCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const IdeasPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch("http://localhost:5000/ideas", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const ideas = await res.json();

  return (
    <section className="min-h-screen bg-background px-4 py-10 text-foreground md:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-7xl text-center">
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
          <IdeaCard key={idea._id} idea={idea}></IdeaCard>
        ))}
      </div>
    </section>
  );
};

export default IdeasPage;
