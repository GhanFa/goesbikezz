"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Our Bikes", path: "/our-bikes" },
];
const Nav = ({ containerStyles }) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${pathname === link.path ? "text-accent" : "text-black"}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
