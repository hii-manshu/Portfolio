"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoot() {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "Himanshu",
    },
    {
      text: "Sharma",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}
