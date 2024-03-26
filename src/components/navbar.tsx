"use client";
import Link from "next/link";
import Navlink from "./navlink";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  function handleSignout() {
    document.cookie = "email=; path=/";
    document.cookie = "accessToken=; path=/";
    router.push("/login");
  }

  return (
    <nav
      className={`flex flex-row justify-center items-center fixed py-5 w-full `}
    >
      <div id="logo" className="size-16 fixed left-5 top-5">
        <Link href="/">
          <Image src="/logo.svg" alt="IEEECS Logo" width={100} height={100} />
        </Link>
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
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
      <div
        id="logout"
        className={`${
          pathname === "/login" ? "hidden" : "visible"
        } size-14 fixed right-5 top-5`}
        onClick={handleSignout}
      >
        <Image src="/logout.png" alt="Logout button" width={100} height={100} />
      </div>
    </nav>
  );
}
