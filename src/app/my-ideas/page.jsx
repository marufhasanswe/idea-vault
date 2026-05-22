import DeleteIdeaAlert from "@/components/DeleteIdeaAlert";
import MyIdeaUpdateModal from "@/components/MyIdeaUpdateModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${userId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const myIdeas = await res.json();

  return (
    <section className="min-h-screen bg-background px-4 py-10 text-foreground md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Ideas</h1>
            <p className="text-sm text-muted-foreground">
              Manage your startup ideas
            </p>
          </div>

          <Link
            href="/add-idea"
            className="w-fit rounded-2xl bg-[#4BB8FA] px-5 py-2 text-sm text-primary-foreground hover:opacity-90"
          >
            + Add Idea
          </Link>
        </div>

        {/* EMPTY STATE */}
        {myIdeas?.length === 0 && (
          <div className="rounded-3xl border border-border bg-card p-10 text-center">
            <h2 className="text-lg font-semibold">No ideas found</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Start by creating your first startup idea
            </p>
          </div>
        )}

        {/* FLAT LIST */}
        <div className="space-y-4">
          {myIdeas?.map((idea) => (
            <div
              key={idea._id}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 transition hover:bg-muted/40 sm:flex-row sm:items-center sm:justify-between"
            >
              {/* LEFT CONTENT */}
              <div className="flex gap-4">
                {/* IMAGE */}
                <Image
                  width={200}
                  height={200}
                  src={idea.imageUrl}
                  alt={idea.ideaTitle}
                  className="h-16 w-16 rounded-xl object-cover"
                />

                {/* TEXT */}
                <div>
                  <h2 className="text-base font-semibold">{idea.ideaTitle}</h2>

                  <p className="line-clamp-1 text-sm text-muted-foreground">
                    {idea.shortDescription}
                  </p>

                  <div className="mt-1 flex gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full border border-border px-2 py-0.5">
                      {idea.category}
                    </span>

                    <span className="rounded-full border border-border px-2 py-0.5">
                      ${idea.estimatedBudget}
                    </span>

                    <span className="rounded-full border border-border px-2 py-0.5">
                      {idea.targetAudience}
                    </span>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2 sm:flex-col sm:items-end">
                <MyIdeaUpdateModal idea={idea} />

                <DeleteIdeaAlert idea={idea} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyIdeasPage;
