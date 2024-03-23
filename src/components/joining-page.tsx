"use client";
import { useState, useEffect } from "react";
import Button from "./button";
import Header from "./header";

export default function JoinTeam(props: { teamName: string; order: string }) {
  const [clicked, setClick] = useState(false);
  useEffect(() => {
    console.log(clicked);
  }, [clicked]);
  return (
    <div
      className={`flex ${
        props.order === "1"
          ? "flex-col md:flex-row"
          : "flex-col md:flex-row-reverse"
      }  justify-evenly items-center h-screen w-full`}
    >
      <Header title={props.teamName} click={clicked} />
      <Button
        onClick={() => {
          setClick(true);
        }}
      />
    </div>
  );
}
