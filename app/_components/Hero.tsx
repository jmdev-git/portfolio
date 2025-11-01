"use client";
import { Tilt } from "@/components/motion-primitives/tilt";
import { Button } from "@/components/ui/button";
import { lines } from "@/constant";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { useTheme } from "next-themes";
import { Magnetic } from "@/components/motion-primitives/magnetic";

const HeroSection = () => {
  const { theme } = useTheme();
  const springOptions = { bounce: 0.1 };

  return (
    <section id="#home" className="bg-linear-to-b from-white to-[#fff2ed] overflow-hidden dark:from-gray-900 dark:to-gray-950 lg:p-0 pb-8">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center lg:h-screen lg:gap-0 gap-6">
          <div className="relative lg:ml-24">
            <Tilt rotationFactor={10}>
              <div className="max-w-[450px] mask-[linear-gradient(to_top,transparent_0,black_20px)]">
                <Image
                  src={"/MyProfile.png"}
                  height={500}
                  width={500}
                  alt="Profile Image"
                  className="object-cover"
                />
              </div>
            </Tilt>
            <div className="md:block hidden">
              {lines.map((tag, i) => (
                <motion.div
                  key={i}
                  animate={{ y: ["0%", "-15%", "0%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tag.delay,
                  }}
                  className={` text-sm flex items-center gap-1.5 ${tag.position} z-50`}
                >
                  <Highlighter
                    action="underline"
                    color={theme === "dark" ? "#ffffff" : "#fe3211"}
                    iterations={1}
                    animationDuration={tag.duration}
                    isView={false}
                  >
                    <div className="flex items-center gap-1 5">
                      <span className="text-color custom-font text-base dark:text-white">
                        {tag.line}
                      </span>
                    </div>
                  </Highlighter>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-2 text-center lg:text-left lg:max-w-auto md:max-w-xl">
              <h2 className="custom-font lg:text-[3.8rem] md:text-5xl text-4xl lg:leading-18 md:leading-16 leading-12 capitalize font-bold">
                turning vision into reality with{" "}
                <span className="text-color">code</span> and{" "}
                <span className="text-color">design</span>.
              </h2>
              <p className="text-muted-foreground line-clamp-2">
                I love bringing ideas to life through code and meaningful
                design. Blending creativity with technical know how, I turn
                concepts into real, engaging experiences that not only work well
                but also feel great to use.
              </p>
              <Magnetic
                intensity={0.2}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <Button className="mt-4 w-full text-white md:w-auto cursor-pointer shadow-sm bg-color">
                  Learn more <ArrowRight />
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
