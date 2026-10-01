"use client";
import "@/app/global.css";
import { ParticlesProvider } from "@tsparticles/react";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import { loadSlim } from "@tsparticles/slim";
import { Engine } from "@tsparticles/engine";

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="flex flex-col min-h-screen">
        
            <RootProvider theme={{ enabled: true }}><ParticlesProvider init={particlesInit}>{children}</ParticlesProvider></RootProvider>
        
      </body>
    </html>
  );
}
