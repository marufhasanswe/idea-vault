import { auth } from "@/lib/auth";
import { Avatar } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyInteractionsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/my-interactions/${user?.id}`, {
    cache: "no-store",
  });

  const interactions = await res.json();

  return (
    <section className="min-h-screen bg-background px-4 py-10 text-foreground md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Interactions</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            All ideas you commented on and interacted with
          </p>
        </div>

        {/* EMPTY STATE */}
        {interactions?.length === 0 && (
          <div className="rounded-3xl border border-border bg-card p-10 text-center">
            <h2 className="text-lg font-semibold">No interactions yet</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Start exploring ideas and leave your feedback
            </p>
          </div>
        )}

        {/* ACTIVITY FEED */}
        <div className="space-y-4">
          {interactions?.map((item) => (
            <div
              key={item._id}
              className="rounded-2xl border border-border bg-card p-5 transition hover:bg-muted/30"
            >
              {/* TOP: user activity */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  You commented on an idea
                </p>

                <span className="text-xs text-muted-foreground">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "recent"}
                </span>
              </div>

              {/* IDEA SECTION */}
              <div className="mt-4 flex items-center gap-4">
                {/* IMAGE */}
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt="John Doe"
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                {/* INFO */}
                <div className="flex-1">
                  <Link
                    href={`/ideas/${item.idea?._id}`}
                    className="text-base font-semibold hover:underline"
                  >
                    {item.idea?.ideaTitle}
                  </Link>

                  <p className="line-clamp-1 text-sm text-muted-foreground">
                    {item.idea?.shortDescription}
                  </p>

                  {/* USER COMMENT */}
                  <div className="mt-3 rounded-xl border border-border bg-background p-3">
                    <p className="text-xs text-muted-foreground">
                      Your comment:
                    </p>

                    <p className="mt-1 text-sm">{item.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyInteractionsPage;
