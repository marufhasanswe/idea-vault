import { Button } from "@heroui/react";
import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineChatBubbleOvalLeftEllipsis,
} from "react-icons/hi2";

const CommunityEngagement = () => {
  return (
    <section className="bg-background px-4 py-16 text-foreground md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-border bg-card">
          <div className="grid grid-cols-1 gap-10 p-6 md:p-10 lg:grid-cols-2 lg:p-14">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-border bg-muted px-4 py-1 text-xs text-muted-foreground">
                Community Driven Innovation
              </div>

              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Collaborate, Discuss & Improve Ideas Together
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                IdeaVault is more than an idea-sharing platform. It is a
                collaborative environment where creators receive feedback,
                validate concepts, and improve startup ideas through meaningful
                community interaction.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/ideas">
                  <Button className="h-11 rounded-2xl bg-[#4BB8FA] px-6 text-primary-foreground">
                    Explore Ideas
                  </Button>
                </Link>

                <Link href="/add-idea">
                  <Button
                    variant="outline"
                    className="h-11 rounded-2xl border-border bg-background px-6"
                  >
                    Share Your Idea
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid gap-5">
              <div className="rounded-3xl border border-border bg-background p-5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4BB8FA]/10 text-xl text-[#4BB8FA]">
                  <HiOutlineSparkles />
                </div>

                <h3 className="text-lg font-semibold">
                  Discover Trending Concepts
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Explore startup ideas gaining attention and feedback from the
                  community.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-background p-5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4BB8FA]/10 text-xl text-[#4BB8FA]">
                  <HiOutlineChatBubbleOvalLeftEllipsis />
                </div>

                <h3 className="text-lg font-semibold">
                  Meaningful Discussions
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Engage in valuable conversations that help improve and refine
                  startup concepts.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-background p-5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4BB8FA]/10 text-xl text-[#4BB8FA]">
                  <HiOutlineUserGroup />
                </div>

                <h3 className="text-lg font-semibold">
                  Connect With Innovators
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Join a growing network of creators, developers, and startup
                  enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;
