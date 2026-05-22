import {
  HiOutlineLightBulb,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUsers,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const features = [
  {
    icon: <HiOutlineLightBulb />,
    title: "Share Innovative Ideas",
    description:
      "Turn your startup concepts into public discussions and inspire other creators with your vision.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight />,
    title: "Get Community Feedback",
    description:
      "Receive valuable comments, suggestions, and insights from entrepreneurs and innovators.",
  },
  {
    icon: <HiOutlineUsers />,
    title: "Build Connections",
    description:
      "Connect with people who share similar interests and collaborate on meaningful ideas.",
  },
  {
    icon: <HiOutlineRocketLaunch />,
    title: "Validate Startup Concepts",
    description:
      "Understand market interest and improve your ideas before launching your startup journey.",
  },
];

const WhyChooseIdeaVault = () => {
  return (
    <section className="bg-background px-4 py-16 text-foreground md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 inline-flex rounded-full border border-border bg-card px-4 py-1 text-xs text-muted-foreground">
            Why IdeaVault
          </div>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            A Platform Built For Creative Thinkers
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            IdeaVault helps innovators transform raw concepts into meaningful
            discussions through collaboration, validation, and community-driven
            feedback.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4BB8FA]/40 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4BB8FA]/10 text-2xl text-[#4BB8FA]">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold">{feature.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseIdeaVault;
