import React from "react";

const CommunityFeedback = () => {
  return (
    <div>
      <div className="rounded-3xl border border-border bg-card p-6 space-y-6">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Community Feedback</h2>

          <span className="text-xs text-muted-foreground">3 Comments</span>
        </div>

        {/* ADD COMMENT BOX */}
        <div className="space-y-3">
          <textarea
            placeholder="Write your comment..."
            className="h-24 w-full rounded-2xl border border-border bg-background p-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
          />

          <div className="flex justify-end">
            <button className="rounded-2xl bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              Post Comment
            </button>
          </div>
        </div>

        {/* COMMENTS LIST */}
        <div className="space-y-4">
          {/* COMMENT CARD */}
          <div className="rounded-2xl border border-border bg-background p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">Maruf Hasan</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>

              <div className="flex gap-2 text-xs">
                <button className="text-primary hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </div>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              This is a very strong idea. I think AI + education has huge
              potential in Bangladesh market.
            </p>
          </div>

          {/* COMMENT CARD */}
          <div className="rounded-2xl border border-border bg-background p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">Developer User</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>

              <div className="flex gap-2 text-xs">
                <button className="text-primary hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </div>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              You should add a MVP roadmap. That will make this idea more
              actionable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedback;
