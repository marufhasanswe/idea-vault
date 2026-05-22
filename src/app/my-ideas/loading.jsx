import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-muted border-t-primary" />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold">Loading Ideas...</h2>
          <p className="text-sm text-muted-foreground">
            Crafting innovation space for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
