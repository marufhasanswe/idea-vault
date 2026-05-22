"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import { ThemeToggle } from "./ThemeToggle";
import MyNavLink from "./MyNavLink";
import Link from "next/link";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import ProfileDropdown from "../ProfileDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Signing out successfully!");
    redirect("/auth/login");
  };

  const links = (
    <>
      <li>
        <MyNavLink href={"/"}>Home</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/ideas"}>Ideas</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/add-idea"}>Add Idea</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/my-ideas"}>My Ideas</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/my-interactions"}>My Interactions</MyNavLink>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {/* <h3>IDEA VAULT LOGO</h3> */}
            <p className="bg-linear-to-r from-[#4BB8FA] to-[#2C5EAD] bg-clip-text text-3xl font-extrabold text-transparent">
              IDEA VAULT
            </p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>

        <div className="flex items-center gap-2">
          <ThemeToggle></ThemeToggle>
          {user && <ProfileDropdown user={user} />}
          <div className="hidden items-center gap-4 md:flex">
            {user ? (
              <>
                <Button
                  onClick={handleSignOut}
                  variant="secondary"
                  className={""}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Link href="/auth/login">Login</Link>
                <Link href="/auth/register" className={"underline"}>
                  <Button className={""}>Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            {user ? (
              <>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user?.name}
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <Button
                  onClick={handleSignOut}
                  variant="secondary"
                  className={""}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Link href="/auth/login">Login</Link>
                <Link href="/auth/register" className={"underline"}>
                  <Button className={""}>Register</Button>
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
