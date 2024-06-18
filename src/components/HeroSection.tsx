import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Realtime audio Streaming library
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Welcome to the Music Library API, your ultimate gateway to a world of
          music. Inspired by top-tier music streaming services like Spotify,
          this API delivers a seamless and immersive experience, allowing you to
          integrate rich music functionalities into your applications. Whether
          you are building the next big music app or simply want to add some
          rhythm to your project, our API has you covered.
        </p>
        <div className="mt-4">
          <Link href={"/documentation"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Getting Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
