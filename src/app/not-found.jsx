"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="w-full max-w-2xl text-center">
        {/* Soft background glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        </div>

        {/* 404 number */}
        <h1 className="text-[90px] sm:text-[120px] font-extrabold tracking-tight text-primary leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold">
          Page not found
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
          The page you’re looking for doesn’t exist, was moved, or may have been
          deleted.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-90 flex items-center">
              <FaHome /> Go Home
            </Button>
          </Link>

          <Link href="/ideas">
            <Button variant="outline" className="w-full sm:w-auto">
              Explore Ideas
            </Button>
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-6">
          <button
            onClick={() => history.back()}
            className="text-sm text-muted-foreground hover:text-blue-500 transition cursor-pointer"
          >
            ← Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
