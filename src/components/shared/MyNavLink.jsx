import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLink = ({ href, children, className }) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;
  return (
    <>
      <Link
        href={href}
        className={`text-foreground ${isActive && "text-[#1591DC]! border-b border-[#1591DC]  font-medium"}   hover:text-[#1591DC]  py-1  ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

export default MyNavLink;
