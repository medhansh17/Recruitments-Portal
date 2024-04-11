"use client";
import Link from "next/link";
import React, { SetStateAction } from "react";

type NavlinkProps = {
  target: string;
  text: string;
  active?: boolean;
};

type HamNavlinkProps = {
  target: string;
  text: string;
  active?: boolean;
  setIsShown: React.Dispatch<SetStateAction<boolean>>;
};

export function Navlink({ target, text, active }: NavlinkProps) {
  return (
    <Link href={target}>
      <li
        className={`${active ? "text-main-blue" : "text-white"} text-2xl mx-5`}
      >
        {text}
      </li>
    </Link>
  );
}

export function HamNavLink({
  target,
  text,
  active,
  setIsShown,
}: HamNavlinkProps) {
  return (
    <Link href={target} onClick={() => setIsShown(false)}>
      <p
        className={`${active ? "text-main-blue" : "text-white"} ${
          text === `${text}` ? "text-red" : ""
        } md:text-6xl text-4xl  mx-5 w-screen text-center my-5 font-striger`}
      >
        {text}
      </p>
    </Link>
  );
}

export function HamNavLinkLogout({
  text,
  active,
  setIsShown,
  handleLogout,
}: any) {
  function handleClick() {
    handleLogout();
    setIsShown(false);
  }

    return (
        <button className={"fixed bottom-0"}   onClick={() => handleClick()}>
            <p
                className={`${
                    active ? "text-main-blue" : "text-red-600"
                } md:text-6xl text-4xl  mx-5 w-screen text-center my-5 font-striger`}
            >
                {text}
            </p>
        </button>
    );
}
