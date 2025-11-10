"use client";
import "@/app/global.css";
import { initParticlesEngine } from "@tsparticles/react";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="flex flex-col min-h-screen">
        {init && (
          <RootProvider theme={{ enabled: true }}>{children}</RootProvider>
        )}
      </body>
    </html>
  );
}
