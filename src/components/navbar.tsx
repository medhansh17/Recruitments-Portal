"use client";
import Link from "next/link";
import Navlink from "./navlink";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav
      className={`flex flex-row justify-center items-center fixed py-5 w-full `}
    >
      <div id="logo" className="size-16 fixed left-5 top-5">
        <Link href="/">
          <img src="/logo.svg" alt="IEEECS Logo" width={100} height={100} />
        </Link>
      </div>
      <ul
        className={` ${
          pathname === "/login" ? "hidden md:hidden" : " hidden md:flex"
        } flex-row justify-center items-center font-striger px-4 py-2 bg-main-grey bg-opacity-40 rounded-full`}
      >
        <Navlink target="/" text="Home" active={pathname === "/"} />
        <Navlink target="/teams" text="Teams" active={pathname === "/teams"} />
        <Navlink target="/faq" text="FAQS" active={pathname === "/faq"} />
        <Navlink
          target="/dashboard"
          text="Dashboard"
          active={pathname === "/dashboard"}
        />
        <Navlink
          target="/contact"
          text="Contact"
          active={pathname === "/contact"}
        />
        <Link href="https://discord.gg/swF4utKTk4">
          <li className="text-white text-2xl mx-5">
            <img src="/discordlogo.svg" alt="Discord Logo"></img>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
