"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "./hamburger.css";
import Navlink, { HamNavLink } from "../navlink";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const dropdownVariants = {
  key: "div",
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { type: "spring", bounce: 0.15 },
  },
  exit: {
    scaleY: 0,
    transition: { when: "afterChildren" },
  },
  transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
};

export default function Nav() {
  const [isShown, setIsShown] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  function handleSignout() {
    document.cookie = "email=; path=/";
    document.cookie = "accessToken=; path=/";
    router.push("/login");
  }
  const toggleNav = () => {
    setIsShown(!isShown);
    if (typeof window !== "undefined" && !isShown) {
      document.body.style.overflow = "hidden";
    } else if (typeof window !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <>
      <nav
        className={`flex flex-row justify-between items-center fixed py-5 w-full z-[31]`}
      >
        {isShown && (
          <AnimatePresence>
            <motion.div
              {...dropdownVariants}
              className="w-full h-screen bg-main-bg absolute top-0 flex justify-center items-center z-30 origin-top"
            >
              <div className="flex w-[80%] flex-col">
                <ul>
                  <HamNavLink
                    target="/"
                    text="Home"
                    active={pathname === "/"}
                  />
                  <HamNavLink
                    target="/teams"
                    text="Teams"
                    active={pathname === "/teams"}
                  />
                  <HamNavLink
                    target="/faq"
                    text="FAQS"
                    active={pathname === "/faq"}
                  />
                  <HamNavLink
                    target="/dashboard"
                    text="Dashboard"
                    active={pathname === "/dashboard"}
                  />
                  <HamNavLink
                    target="/contact"
                    text="Contact"
                    active={pathname === "/contact"}
                  />
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        <div id="logo" className="size-16 ml-[5%] z-[31]">
          <Link href="/">
            <Image src="/logo.svg" alt="IEEECS Logo" width={100} height={100} />
          </Link>
        </div>
        <button
          className=" md:hidden inline-block hamburger hamburger--spring z-[31]"
          type="button"
          onClick={() => {
            toggleNav();
          }}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <ul
          className={` ${
            pathname === "/login" ? "hidden md:hidden" : " hidden md:flex"
          } flex-row justify-center items-center font-striger px-4 py-2 bg-main-grey bg-opacity-40 rounded-full`}
        >
          <Navlink target="/" text="Home" active={pathname === "/"} />
          <Navlink
            target="/teams"
            text="Teams"
            active={pathname === "/teams"}
          />
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
          } size-14  md:block  hidden mr-[5%]`}
          onClick={handleSignout}
        >
          <Image
            src="/logout.png"
            alt="Logout button"
            width={100}
            height={100}
          />
        </div>
      </nav>
    </>
  );
}
