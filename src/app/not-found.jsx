"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold tracking-tight text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>

        {/* Description */}
        <p className="mt-3 text-muted-foreground">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/">
            <Button className="bg-primary text-primary-foreground hover:opacity-90 flex items-center">
              <FaHome></FaHome> Go Home
            </Button>
          </Link>

          <Link href="/ideas">
            <Button variant="outline">Browse Ideas</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
