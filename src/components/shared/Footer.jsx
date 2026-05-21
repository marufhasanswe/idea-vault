import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/">
              <h2 className="bg-gradient-to-r from-[#4BB8FA]  bg-clip-text text-3xl font-extrabold text-transparent">
                IdeaVault
              </h2>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              A modern startup idea sharing platform where innovators connect,
              validate concepts, and build the future together.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com"
                target="_blank"
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  border border-white/10 bg-white/5 text-zinc-300
                  transition-all duration-300
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-[#1591DC]
                "
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  border border-white/10 bg-white/5 text-zinc-300
                  transition-all duration-300
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-[#1591DC]
                "
              >
                <FaLinkedin size={18} />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  border border-white/10 bg-white/5 text-zinc-300
                  transition-all duration-300
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-[#1591DC]
                "
              >
                <FaFacebook size={18} />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  border border-white/10 bg-white/5 text-zinc-300
                  transition-all duration-300
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-[#1591DC]
                "
              >
                <FaXTwitter size={18} />
              </Link>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Platform</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-zinc-400 transition hover:text-[#1591DC]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/ideas"
                  className="text-sm text-zinc-400 transition hover:text-[#1591DC]"
                >
                  Ideas
                </Link>
              </li>

              <li>
                <Link
                  href="/ideas"
                  className="text-sm text-zinc-400 transition hover:text-[#1591DC]"
                >
                  Trending Ideas
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="text-sm text-zinc-400 transition hover:text-[#1591DC]"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Resources</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/add-idea"
                  className="text-sm text-zinc-400 transition hover:text-[#1591DC]"
                >
                  Add Idea
                </Link>
              </li>

              <li>
                <Link
                  href="/my-ideas"
                  className="text-sm text-zinc-400 transition hover:text-[#1591DC]"
                >
                  My Ideas
                </Link>
              </li>

              <li>
                <Link
                  href="/my-interactions"
                  className="text-sm text-zinc-400 transition hover:text-[#1591DC]"
                >
                  My Interactions
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="text-sm text-zinc-400 transition hover:text-[#1591DC]"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Contact</h3>

            <div className="space-y-3 text-sm text-zinc-400">
              <p>Email: support@ideavault.dev</p>
              <p>Location: Dhaka, Bangladesh</p>
              <p>Community Support Available</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm text-zinc-500">
            © 2026 IdeaVault. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-sm text-zinc-500 transition hover:text-[#1591DC]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-zinc-500 transition hover:text-[#1591DC]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/support"
              className="text-sm text-zinc-500 transition hover:text-[#1591DC]"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
