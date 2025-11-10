"use client";
import { cn } from "@/lib/cn";
import { config } from "@/particleConfig";
import Particles from "@tsparticles/react";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center ">
      <Particles id="tsparticles" options={config} style={{ zIndex: -1 }} />
      <div className="flex flex-col items-center justify-center p-8">
        <div className="rounded-xl border border-l-(--color-fd-border) bg-(--color-fd-background)/30 backdrop-blur-sm p-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl my-8 leading-tighter font-medium xl:text-5xl xl:mb-12 ">
            Building software for{" "}
            <span className="text-(--color-fd-primary)">Otakus</span>.
          </h1>
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap w-fit">
            <Link
              href="/docs/apps/Goraku"
              className={cn(
                buttonVariants({ variant: "primary" }),
                "max-sm:text-sm"
              )}
            >
              Projects
            </Link>
            <Link
              href="/docs/react-native"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "max-sm:text-sm"
              )}
            >
              Packages
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
